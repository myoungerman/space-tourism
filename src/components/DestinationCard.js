import React from "react";
import styles from './DestinationCard.module.css'
import CardHeader from "./CardHeader";

export default function DestinationCard(props) {
    return (
        <main className={`${styles.DestinationCard} ${props.className}`}>
            <section className={`${styles['DestinationCard__section']} ${styles['section--planet-img']}`}>
                <CardHeader
                number="01"
                title="Pick your destination"
                />
                <div className={`${styles['planet-img-container']} ${styles['DestinationCard__img']}`}>
                    <img className={`${styles['img--contain']} ${styles['planet-img']}`} src="https://i.postimg.cc/G2JS7VN7/Moon.png"></img>
                </div>
            </section>
            <section className={`${styles['DestinationCard__section']} ${styles['DestinationCard__section--planet-details']} ${styles['section--planet-details']}`}>
                <nav className={`${styles.subnav}`}>
                    <a>Moon</a>
                    <a>Mars</a>
                    <a>Europa</a>
                    <a>Titan</a>
                </nav>
                <h2 className={styles['DestinationCard__header--planet-name']}><span className={`not-bold heading--2`}>Moon</span></h2>
                <p className={`${styles.paragraph} ${styles['DestinationCard__paragraph']}`}>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className={styles.line}></div>
                <div className={`${styles['DestinationCard__trip-details']}`}>
                    <div className={`${styles['DestinationCard__distance']}`}>
                        <p className={`subheading--2 blue ${styles['DestinationCard__detail--header']}`}>Avg. distance</p>
                        <p className={`subheading--1 ${styles['DestinationCard__detail--body']}`}>384,400 KM</p>
                    </div>
                    <div>
                        <p className={`subheading--2 blue ${styles['DestinationCard__detail--header']}`}>Est. travel time</p>
                        <p className={`subheading--1 ${styles['DestinationCard__detail--body']}`}>3 days</p>
                    </div>
                </div>
            </section>
        </main>
    )
}