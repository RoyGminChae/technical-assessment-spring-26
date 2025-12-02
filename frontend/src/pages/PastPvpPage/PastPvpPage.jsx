import React from 'react'
import styles from './PastPvpPage.module.css';
import VideoSummaryBlock from '../../components/VideoSummaryBlock/VideoSummaryBlock.jsx';
import QuestionCard from '../../components/QuestionCard/QuestionCard.jsx';
import CommentSection from '../../components/CommentSection/CommentSection.jsx';

export default function PastPvpPage() {

    const hcfText = "HCF, or Hardcore Factions, was one of Minecraft’s most challenging and teamwork-driven PvP environments, blending base building, territory control, and high-stakes combat with limited lives and intense punishment for mistakes. Servers like HCFactions and later VeltPvP and MineHQ helped popularize the mode, creating a competitive ecosystem where coordinated factions fought for dominance across the map. One of the most infamous strategies to emerge during HCF’s peak was pot stealing—a high-skill maneuver where players used ender pearls to glitch or slip into an opponent’s base and grab their potion supplies before the fight began. Successfully pearling into a pot storage room and wiping out an enemy faction’s healing resources could instantly swing the balance of power, making it both a risky and celebrated tactic. For many players, HCF represents a golden era of Minecraft PvP defined by strategy, faction loyalty, and clutch mechanical plays that shaped the community’s early competitive culture.";
    const uhcText = "UHC, or Ultra Hardcore, became one of Minecraft’s most intense competitive formats, emphasizing survival, strategy, and high-stakes PvP with no natural health regeneration. Players had to rely on golden apples, potions, and careful planning to stay alive while preparing for late-game battles. Around 2016, the Badlion Network emerged as the most popular and influential server for UHC, thanks to its structured hosting system, anti-cheat tools, competitive rankings, and large, dedicated community. Badlion UHCs routinely attracted thousands of players and helped define the meta for crafting routes, bow mechanics, melee techniques, and team play. For many, UHC on Badlion represents the height of competitive Minecraft’s “sweat era,” when strategy guides, highlight videos, and recorded rounds flourished, shaping a generation of PvP players and content creators.";
    const mcsgText = "The MCSG server, short for Minecraft Survival Games, was one of the most iconic competitive Minecraft servers of its time and reached peak popularity around 2013. It offered a fast-paced, Hunger Games–style experience where players spawned around a central cornucopia, rushed for loot, and fought to be the last one standing. What made MCSG stand out was its polished gameplay, custom maps, ranking system, and the sense of community that formed around its matches. For many players, it became the definitive PvP server of the early 2010s, shaping Minecraft’s competitive scene and inspiring countless similar servers. Even years later, MCSG remains a nostalgic symbol of the era when Minecraft multiplayer was exploding in popularity and creators and players alike flocked to Survival Games as the go-to format for skill, strategy, and fun.";
    const skywarsText = "SkyWars became one of Minecraft’s most beloved competitive game modes during the mid-2010s, offering fast, high-intensity matches where players spawned on tiny floating islands, gathered resources, bridged toward the center, and fought to be the last survivor. Its blend of strategy, quick decision-making, and mechanical skill made it a favorite across major servers, especially Hypixel. SkyWars is also deeply associated with Technoblade, whose exceptional win streaks, dueling mastery, and iconic commentary helped elevate the game mode’s popularity. His achievements—such as legendary winstreaks and dominant performances in ranked play—set a standard for competitive SkyWars skill and cemented him as one of the most influential players in the game’s history. For many fans, SkyWars is inseparable from Technoblade’s legacy, representing both a golden era of Minecraft PvP and one of the community’s most celebrated talents.";

    return (
        <>
            <h1 className={styles.pageTitle}>1.7/1.8 PVP</h1>
            <div className={styles.gamemodesContainer}>
                <VideoSummaryBlock title="Hardcore Factions" text={hcfText} videoPath="/hcf.mp4" />
                <VideoSummaryBlock title="Ultra Hard Core" text={uhcText} videoPath="/uhc.mp4" />
                <VideoSummaryBlock title="MC Hunger Games" text={mcsgText} videoPath="/mcsg.mp4" />
                <VideoSummaryBlock title="Hypixel Skywars" text={skywarsText} videoPath="/skywars.mp4" />
            </div>
            <h1 className={styles.quizTitle}>Pop Quiz!</h1>
            <div className={styles.quizContainer}>
                <QuestionCard
                    question="What year was the peak of MCSG?"
                    choices={["2013", "2015", "2017", "2019"]}
                    correctIndex={0}
                    pageName="pastPvp"
                    questionNumber={1}
                />
                <QuestionCard
                    question="What item is used the most commonly for the pot steal technique?"
                    choices={["Glass Bottle", "Ender Pearl", "Cauldron", "Water Bottle"]}
                    correctIndex={1}
                    pageName="pastPvp"
                    questionNumber={2}
                />
                <QuestionCard
                    question="What was the most popular UHC server around 2016?"
                    choices={["Mineplex", "Hypixel", "Badlion", "Shotbow"]}
                    correctIndex={2}
                    pageName="pastPvp"
                    questionNumber={3}
                />
                <QuestionCard
                    question="Which Youtuber had a pig skin and was a master at Skywars"
                    choices={["DanTDM", "Stampylonghead", "StimpyPvp", "Technoblade"]}
                    correctIndex={3}
                    pageName="pastPvp"
                    questionNumber={4}
                />
            </div>
            <div className={styles.commentSectionContainer}>
                <h1>Comment Section</h1>
                <CommentSection pageName="pastPvp"/>
            </div>
        </>
    );
}
