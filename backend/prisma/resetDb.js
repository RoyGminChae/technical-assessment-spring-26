import { prisma } from './prisma.js';

const table = process.argv[2]; 

async function reset(table) {
    try {
        // Add every table you want to wipe:
        await prisma.$executeRawUnsafe(`
        TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE;
        `);

        console.log("🔥 Table cleared and IDs reset.");
    } catch (err) {
        console.error(err);
    } finally {
        await prisma.$disconnect();
    }
}

reset(table);