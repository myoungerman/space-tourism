import React from "react";
import styles from './IntroScreen.module.css';

export default function IntroScreen() {
    return (
        <div className={styles.IntroScreen}>
            {/* <img src="https://svgshare.com/i/ju3.svg" alt='Earth' className={`${styles['IntroScreen__img']} ${styles['img--background']}`}></img> */}
            <div className={`${styles['text-container']} ${styles['IntroScreen__text-div']}`}>
                <p className={`heading--5 blue ${styles['IntroScreen__text--no-top-and-bottom-margin']}`}>So, you want to travel to</p>
                <p className={`heading--1 ${styles['IntroScreen__large-word']}`}>Space</p>
                <p className={styles['IntroScreen__text--no-top-and-bottom-margin']}>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className={`${styles.circle} ${styles['IntroScreen__button']}`}></div>
            <div className={`${styles['IntroScreen__button-container']}`}>
                <button className={`heading--4 ${styles['IntroScreen__button']}`}>Explore</button>
                <span className={styles.circle}></span>
            </div>
        </div>
    )
}