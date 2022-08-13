import React, { useMemo } from "react";
import styles from './DestinationCard.module.css'
import CardHeader from "./CardHeader";
import data from "../data.json";

export default function DestinationCard(props) {

    // Cache destinations object so it's not re-evaluated
    const places = useMemo(() => { return data.destinations }, []);
    const [planet, setPlanet] = React.useState(places[0]);

    function findPlanet(name) {
        for (let i = 0; i < places.length; i++) {
            if (places[i].name === name) {
                setPlanet(places[i]);
                return;
            }
        }
    }

    return (
        <main className={`${styles.DestinationCard} ${props.className}`}>
            <section className={`${styles['DestinationCard__section']} ${styles['section--planet-img']}`}>
                <CardHeader
                number="01"
                title="Pick your destination"
                />
                <div className={`${styles['planet-img-container']} ${styles['DestinationCard__img']}`}>
                    <img className={`${styles['img--contain']} ${styles['planet-img']}`} src={process.env.PUBLIC_URL + planet.images.png}></img>
                </div>
            </section>
            <section className={`${styles['DestinationCard__section']} ${styles['DestinationCard__section--planet-details']} ${styles['section--planet-details']}`}>
                <nav className={`${styles.subnav}`}>
                    <a onClick={() => findPlanet("Moon")}>Moon</a>
                    <a onClick={() => findPlanet("Mars")}>Mars</a>
                    <a onClick={() => findPlanet("Europa")}>Europa</a>
                    <a onClick={() => findPlanet("Titan")}>Titan</a>
                </nav>
                <h2 className={styles['DestinationCard__header--planet-name']}><span className={`not-bold heading--2`}>{planet.name}</span></h2>
                <p className={`${styles.paragraph} ${styles['DestinationCard__paragraph']}`}>{planet.description}</p>
                <div className={styles.line}></div>
                <div className={`${styles['DestinationCard__trip-details']}`}>
                    <div className={`${styles['DestinationCard__distance']}`}>
                        <p className={`subheading--2 blue ${styles['DestinationCard__detail--header']}`}>Avg. distance</p>
                        <p className={`subheading--1 ${styles['DestinationCard__detail--body']}`}>{planet.distance}</p>
                    </div>
                    <div>
                        <p className={`subheading--2 blue ${styles['DestinationCard__detail--header']}`}>Est. travel time</p>
                        <p className={`subheading--1 ${styles['DestinationCard__detail--body']}`}>{planet.travel}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}