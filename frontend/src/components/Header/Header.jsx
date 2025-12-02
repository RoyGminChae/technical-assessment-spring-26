import React from 'react';
import { useUserContext } from '../../context.jsx'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const { username } = useUserContext();

    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/grass-block-icon.png" alt="grass block icon"/>
            <div className={styles.nav}>
                <Link to="/" className={styles.navItem}>Home</Link>
                <Link to="/pastPvpPage" className={styles.navItem}>1.7/1.8 PVP</Link>
                <Link to="/postPvpPage" className={styles.navItem}>1.9 PVP</Link>  
            </div>
            <p className={styles.userName}>
                {username || 'Guest'}
            </p>
        </header>
    )
}