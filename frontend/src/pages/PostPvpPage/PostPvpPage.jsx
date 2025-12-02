import React from 'react'
import styles from './PostPvpPage.module.css';
import VideoSummaryBlock from '../../components/VideoSummaryBlock/VideoSummaryBlock.jsx';
import QuestionCard from '../../components/QuestionCard/QuestionCard.jsx';
import CommentSection from '../../components/CommentSection/CommentSection.jsx';

export default function PostPvpPage() {

    const swordPvp = "Sword PvP has long been the foundation of Minecraft combat, especially in the fast-paced pre-1.9 era where constant clicking and tight movement created rapid-fire exchanges. With the 1.9 update introducing hit delays, the entire style shifted—players now had to time their swings instead of spamming, and the sword’s higher attack speed became even more important. Unlike axes, which deal more damage per hit but swing much slower, swords thrive in sustained pressure, combos, and rhythm-based fighting. This contrast shaped the meta: sword users could maintain control through consistent, well-timed hits, while axe users looked for heavier burst openings. Despite all the changes across versions, sword PvP stayed iconic for its fluidity and skill expression, rewarding players who mastered timing, spacing, and those perfectly synced critical hits.";
    const macePvp = "Mace + Elytra PvP introduces one of the most high-skill, high-momentum styles in modern Minecraft combat, built around chaining aerial movement with the mace’s fall-based damage multiplier. Instead of fighting on the ground, players launch into the air with fireworks, glide toward their opponents, and then dive-bomb them with a fully charged mace strike that gains massive power from the altitude drop. The elytra becomes both mobility and offense: you reposition instantly, escape combos, and set up devastating plunges that can one-shot an unprepared player. This style rewards precision—timing your swoop so the mace fully charges, cancelling glide at the perfect moment, and recovering immediately so you can re-launch before getting punished. As players mastered the technique, fights turned into fast aerial duels, with both players circling above the battlefield, trading dives, and trying to control the sky. The synergy between the elytra’s freedom of movement and the mace’s vertical burst damage made this one of the most explosive and mechanically demanding PvP metas Minecraft has ever had.";
    const axeShieldPvp = "Axe and Shield PvP became a defining combat style after shields were added to Minecraft in version 1.9. What made this meta unique was the tactical rhythm it introduced—players weren’t just trading hits, they were playing around timing, spacing, and shield management. Axes became crucial because of their special interaction with shields: if you strike a shield with an axe, it disables that shield for about five seconds, creating a brief window to land real damage. This single mechanic shaped the entire flow of fights. Combat became slower, more deliberate, and more about baiting blocks, reading animations, and capitalizing on those precious openings. As players adapted, axe duels turned into a mind game of cooldown tracking and positioning, and the shield-break mechanic became the centerpiece of high-level 1.9+ PvP strategy.";
    const enderCrystalPvp = "End Crystal PvP emerged as one of the most explosive and mechanically demanding PvP styles in Minecraft’s competitive scene. Unlike traditional dueling, EC PvP revolves around placing and breaking end crystals fast enough to create instant high-damage bursts while avoiding getting one-tapped yourself. What made it iconic was how it rewrote the skill expression of PvP entirely—suddenly players were mastering precise block placements, off-hand crystal swapping, totem timing, and directional knockback just to survive more than a few seconds. The strategy pushed combat to its limits: every movement mattered, every misplaced block could cost the entire fight, and the meta increasingly centered around crystal placement speed and terrain control. As servers and YouTubers popularized the style, it became almost an art form—players showing off insane reflexes, clutch totem pops, and perfectly timed crystals that defined the high-level crystal community and cemented EC PvP as one of the most technical forms of combat in Minecraft.";

    return (
        <>
            <h1 className={styles.pageTitle}>1.9+ PVP</h1>
            <div className={styles.gamemodesContainer}>
                <VideoSummaryBlock title="Sword Pvp" text={swordPvp} videoPath="/sword.mp4" />
                <VideoSummaryBlock title="Mace + ElytraPvp " text={macePvp} videoPath="/mace.mp4" />
                <VideoSummaryBlock title="Axe and Shield Pvp" text={axeShieldPvp} videoPath="/axe.mp4" />
                <VideoSummaryBlock title="Ender Crystal Pvp" text={enderCrystalPvp} videoPath="/end.mp4" />
            </div>
            <h1 className={styles.quizTitle}>Pop Quiz!</h1>
            <div className={styles.quizContainer}>
                <QuestionCard
                    question="Which Minecraft version introduced shields?"
                    choices={["1.7", "1.8", "1.9", "1.10"]}
                    correctIndex={2}
                    pageName="postPvp"
                    questionNumber={1}
                />
                <QuestionCard
                    question="If you hit a shield with a axe, the shield goes to cooldown for how many seconds?"
                    choices={["3 seconds", "5 seconds", "7 seconds", "9 seconds"]}
                    correctIndex={1}
                    pageName="postPvp"
                    questionNumber={2}
                />
                <QuestionCard
                    question="What items allow you to fly with fireworks?"
                    choices={["Elytra", "Feather Falling Boots", "Potion of Swiftness", "Trident"]}
                    correctIndex={0}
                    pageName="postPvp"
                    questionNumber={3}
                />
                <QuestionCard
                    question="Which weapon here deal more damage in a single hit"
                    choices={["Netherite Axe", "Netherite Sword", "Bow", "Diamond hoe"]}
                    correctIndex={0}
                    pageName="postPvp"
                    questionNumber={4}
                />
            </div>
            <div className={styles.commentSectionContainer}>
                <h1>Comment Section</h1>
                <CommentSection pageName="postPvp"/>
            </div>
        </>
    );
}
