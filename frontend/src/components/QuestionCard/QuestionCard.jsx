import React, { useState, useEffect } from 'react';
import styles from './QuestionCard.module.css';
import Button from '@mui/material/Button';
import { useUserContext } from '../../context.jsx';
import HoverCardInside from '../HoverCard/HoverCardInside.jsx';
import { HoverCard, HoverCardContent, HoverCardTrigger} from '../animate-ui/components/radix/hover-card.jsx';

const API_URL = import.meta.env.VITE_API_URL;

export default function QuestionCard({ question, choices, correctIndex, pageName, questionNumber }) {
    const [selected, setSelected] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [pollData, setPollData] = useState(null); // { correctArr, incorrectArr }
    const { username, setPopUpExists } = useUserContext();

    function handleChoice(idx) {
        if (!username) {
            setPopUpExists(true);
            return;
        }

        setSelected(idx);
        setFeedback(idx === correctIndex ? 'Correct' : 'Incorrect');
    }

    // if selected value change, then backend is called
    useEffect(() => {
        if (selected === null)
            return;

        (async () => {
            const res = await fetch(`${API_URL}/quiz?pageName=${pageName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: username,
                    number: questionNumber,
                    correct: selected === correctIndex
                })
            })
            const data = await res.json();
            console.log(data);
            setPollData(data); // { correctArr, incorrectArr }
        })();
    }, [selected]);

    return (
        <div className={styles.card}>
            <div className={styles.question}>{question}</div>
            <div className={styles.choices}>
                {choices.map((choice, idx) => (
                <Button
                    key={idx}
                    onClick={() => handleChoice(idx)}
                    variant="contained"
                    size="large"
                    sx={{
                        fontFamily: "'LowresPixel', sans-serif",
                        color: 'var(--text)',
                        backgroundColor: 'var(--black1)',
                        boxShadow: selected === idx ? 'none' : 'var(--shadow-s)',
                    }}
                >
                    {choice}
                </Button>
                ))}
            </div>

            {selected !== null && pollData !== null &&(
            <div className={styles.resultContainer}>
                <p className={styles.feedbackText}>{feedback}</p>
                <HoverCard>
                    <HoverCardTrigger>
                        <img className={styles.pollingIcon} src="/polling.png"/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <HoverCardInside correctArr={pollData.correctArr} incorrectArr={pollData.incorrectArr} />
                    </HoverCardContent>
                </HoverCard>
            </div>
            )}
        </div>
    );
}