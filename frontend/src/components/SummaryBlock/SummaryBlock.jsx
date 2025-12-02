import React from 'react';
import styles from './SummaryBlock.module.css';

export default function SummaryBlock({ children }) {

    const childrenArray = React.Children.toArray(children);

    return (
        <div className={styles.summaryBlock}>
            <div className={styles.innerContainer}>
                {childrenArray[0] || null}
            </div>
            <div className={styles.innerContainer}>
                {childrenArray[1] || null}
            </div>
        </div>    
    );
}