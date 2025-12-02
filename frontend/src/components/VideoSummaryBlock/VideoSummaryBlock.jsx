import React from 'react';
import SummaryBlock from '../SummaryBlock/SummaryBlock.jsx';
import styles from './VideoSummaryBlock.module.css';

export default function VideoSummaryBlock({ title, text, videoPath }) {
    return (
        <SummaryBlock>
            <div className={styles.summaryBlockInfoContainer}>
                <div className={styles.summaryBlockInfoTitleContainer}>
                    <p className={styles.summaryBlockInfoTitle}>
                        {title || "none"}
                    </p>
                </div>
                <div className={styles.summaryBlockInfoTextContainer}>
                    <p className={styles.summaryBlockInfoText}>
                        {text || "none"}
                    </p>
                </div>
            </div>
            <div className={styles.summaryBlockVideoContainer}>
                <div className={styles.summaryBlockVideoInnerContainer}>
                    <video width="100%" controls>
                        <source src={videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </SummaryBlock>
    );
}