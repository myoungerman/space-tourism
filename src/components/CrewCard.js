import React from "react";
import styles from './CrewCard.module.css';
import CardHeader from './CardHeader';
import PageIndicator from "./PageIndicator";

export default function CrewCard(props) {
    return (
        <main className={`${props.className} ${styles.CrewCard}`}>
            <CardHeader
            number="02"
            title="Meet your crew"
            />
            <div className={`${styles['CrewCard__content']}`}>
                <section className={`${styles['text-container']} ${styles['CrewCard__text']}`}>
                    <h3 className={`heading--4 not-bold light-grey ${styles['CrewCard__header--secondary']}`}>Commander</h3>
                    <h2 className={`heading--3 not-bold ${styles['CrewCard__header--main']}`}>Douglas Hurley</h2>
                    <p className={`${styles.description} ${styles['CrewCard__description']} blue`}>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    <PageIndicator />
                </section>
                <img src="https://i.postimg.cc/qqzRCVhh/douglas-hurley.png" className={styles.crewImg}></img>
            </div>
        </main>
    )
}