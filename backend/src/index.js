import express from 'express';
import { prisma } from '../prisma/prisma.js';
import gracefulShutdown from '../prisma/shutdown.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

// quiz
// adds or updates the database based on the result
// returns json {[correctnames], [incorrectnames]}
app.post('/quiz', async (req, res) => {
    const pageName = req.query.pageName; 
    const { name, number, correct } = req.body;

    // find if the same quiz result for this quiz already exists
    const result = await prisma.quiz.findFirst({
        where: {
            name: name,
            pageName: pageName,
            number: number
        }, 
        select: { id: true, correct: true }
    });

    // if it exists update it, else add a new result
    if (result) {
        await prisma.quiz.update({
            where: { id: result.id },
            data: { correct: correct }
        });
    } else {
        await prisma.quiz.create({
            data: {
                name: name,
                pageName: pageName,
                number: number,
                correct: correct
            }
        });
    }

    // return { [correctNames], [incorrectNames] } for this specific question
    const correctArr = await prisma.quiz.findMany({
            where: {
                correct: true, 
                pageName: pageName,
                number: number, 
            },
            select: { name: true, id: true}
        })

    const incorrectArr = await prisma.quiz.findMany({
            where: {
                correct: false,
                pageName: pageName,
                number: number,
            },
            select: { name: true, id: true}
        })

    res.json({ correctArr, incorrectArr });
});

app.post('/comment', async (req, res) => {
    const pageName = req.query.pageName;
    const { name, content } = req.body;

    await prisma.comment.create({
        data: {
            name: name,
            content: content,
            pageName: pageName,
        }
    });
    const comments = await prisma.comment.findMany({
        where: { pageName: pageName },
        orderBy: { createdAt: 'desc'}
    });

    res.json(comments);
});

app.get('/comment', async (req, res) => {
    const pageName = req.query.pageName;
    const comments = await prisma.comment.findMany({
        where: { pageName: pageName },
        orderBy: { createdAt: 'desc' }
    });
    res.json(comments);
})

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

process.on('SIGINT', gracefulShutdown); /* closed from ctrl + c */
process.on('SIGTERM', gracefulShutdown); /* Idk (maybe when OS closes?)*/
