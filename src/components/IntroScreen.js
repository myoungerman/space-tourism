import React from "react";
import styles from './IntroScreen.module.css';

export default function IntroScreen() {
    return (
        <div className={styles.IntroScreen}>
            <img src="https://svgshare.com/i/ju3.svg" alt='Earth' className={styles['IntroScreen__img']}></img>
        </div>
    )
}