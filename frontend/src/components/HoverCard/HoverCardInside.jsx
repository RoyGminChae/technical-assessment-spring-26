import React from 'react';
import styles from './HoverCardInside.module.css'

export default function HoverCardInside({correctArr, incorrectArr}) {
    const correct = Array.isArray(correctArr) ? correctArr : [];
    const incorrect = Array.isArray(incorrectArr) ? incorrectArr : [];
    
    return (
        <div className={styles.hoverCardInsideContainer}>
            <div>
                <div className={styles.textNumberContainer}>
                    <p className={styles.correctTextNumber}>Correct: {correct.length}</p>
                </div>
                <div className={styles.hoverCardInsideNames}>
                    {correct.map(item => {
                        return (
                            <p key={item.id} className={styles.correctNameText}>
                                {item.name}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div>
                <div className={styles.textNumberContainer}>
                    <p className={styles.incorrectTextNumber}>Incorrect: {incorrect.length}</p>
                </div>
                <div className={styles.hoverCardInsideNames}>
                    {incorrect.map(item => {
                        return (
                            <p key={item.id} className={styles.incorrectNameText}>
                                {item.name}
                            </p>
                        );
                    })}
                </div>
            </div> 
            

        </div>
    );
}