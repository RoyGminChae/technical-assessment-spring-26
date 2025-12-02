import React from 'react';
import styles from './HomePage.module.css';
import SummaryBlock from '../../components/SummaryBlock/SummaryBlock.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const text1 = ` 
    The 1.7/1.8 era is often remembered as the golden age of Minecraft PvP 
    because it marked the moment when competitive play felt both pure and 
    electrifying. PvP servers were at their peak in popularity, packed with 
    players grinding factions, pot PvP, and kit-based duels, all drawn to a 
    system that was deceptively simple yet incredibly deep. Mechanics like 
    W-tapping, block-hitting, strafing, and precise rod timing created a 
    huge skill gap—anyone could hop into a fight, but only those who mastered 
    the subtleties could dominate. That balance between accessibility and true 
    mechanical mastery made the combat feel fair, competitive, 
    and endlessly replayable, cementing the 1.7/1.8 period as the high 
    point of the PvP community.
    `;

const text2 = `
    The 1.9+ PvP era arrived with major controversy, largely because it 
    introduced hit cooldowns that dramatically slowed the fast-paced rhythm 
    players loved from 1.7/1.8. For years afterward, the older style was 
    widely seen as superior, and many PvP servers refused to update, keeping 
    the classic mechanics alive. Even though modern Minecraft doesn’t have 
    PvP servers as massively popular as those from the golden age, a dedicated 
    and lively community still thrives. Over time, the newer versions built 
    their own identity, adding layers of strategy through shields, crossbows, 
    elytra combat, and recent additions like the mace and wind charger. 
    These mechanics created a different kind of depth—less about raw speed 
    and more about timing, positioning, and versatility—giving 1.9+ PvP its 
    own place in the evolution of Minecraft combat.
    `;

function HomePage() {
    return (
        <>
            <div className={styles.wallpaperContainer}>
                <img className={styles.wallpaper} 
                    src="/pvp-wallpaper.png" alt="Minecraft PvP History Logo" 
                />
                <h1 className={styles.headline}>The Evolution of Minecraft PVP</h1>
            </div>
            <div className={styles.summaryBlockContainer}>
                <SummaryBlock>
                    <div className={styles.summaryBlockInfoContainer}>
                        <div className={styles.summaryBlockInfoTitleContainer}>
                            <p className={styles.summaryBlockInfoTitle}>
                                1.7/1.8 The Golden Age
                            </p>
                        </div>
                        <div className={styles.summaryBlockInfoTextContainer}>
                            <p className={styles.summaryBlockInfoText}>
                                {text1}
                            </p>
                        </div>
                        <Link to="/pastPvpPage">
                            <Button 
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: 'var(--black1)',
                                borderRadius: '0.5rem',
                                color: 'var(--text);',
                                boxShadow: 'var(--shadow-s)',
                                fontFamily: "'LowresPixel', sans-serif"
                            }}
                            >Learn More</Button>
                        </Link>
                    </div>
                    <div className={styles.summaryBlockCarouselOuterContainer}>
                        <div className={styles.summaryBlockCarouselInnerContainer}>
                            <Carousel>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/pot.png" />
                                    <p className={styles.text}>Pot PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/uhc.png" />
                                    <p className={styles.text}>UHC PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/mcsg.png" />
                                    <p className={styles.text}>MCSG PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/soup.png" />
                                    <p className={styles.text}>Soup PVP</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </SummaryBlock>
            </div>
            <div className={styles.summaryBlockContainer}>
                <SummaryBlock>
                    <div className={styles.summaryBlockInfoContainer}>
                        <div className={styles.summaryBlockInfoTitleContainer}>
                            <p className={styles.summaryBlockInfoTitle}>
                                1.9+ Start of a New Beginning
                            </p>
                        </div>
                        <div className={styles.summaryBlockInfoTextContainer}>
                            <p className={styles.summaryBlockInfoText}>
                                {text2}
                            </p>
                        </div>
                        <Link to="/postPvpPage">
                            <Button 
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: 'var(--black1)',
                                borderRadius: '0.5rem',
                                color: 'var(--text);',
                                boxShadow: 'var(--shadow-s)',
                                fontFamily: "'LowresPixel', sans-serif"
                            }}
                            >Learn More</Button>
                        </Link>
                    </div>
                    <div className={styles.summaryBlockCarouselOuterContainer}>
                        <div className={styles.summaryBlockCarouselInnerContainer}>
                            <Carousel>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/macePic.png" />
                                    <p className={styles.text}>Mace PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/endPic.jpg" />
                                    <p className={styles.text}>End Crystal PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/swordPic.png" />
                                    <p className={styles.text}>Sword PVP</p>
                                </div>
                                <div className={styles.imageContainer}>
                                    <img className={styles.image} src="/axePic.png" />
                                    <p className={styles.text}>Axe PVP</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </SummaryBlock>
            </div>
        </>
    );
}

export default HomePage;