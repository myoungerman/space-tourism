import React, { useMemo } from "react";
import styles from './CrewCard.module.css';
import CardHeader from './CardHeader';
import PageIndicator from "./PageIndicator";
import data from "../data.json";

export default function CrewCard(props) {

    const crew = useMemo(() => { return data.crew }, []);
    const [person, setPerson] = React.useState(crew[0]);

    return (
        <main className={`${props.className} ${styles.CrewCard}`}>
            <CardHeader
            number="02"
            title="Meet your crew"
            />
            <div className={`${styles['CrewCard__content']}`}>
                <section className={`${styles['text-container']} ${styles['CrewCard__text']}`}>
                    <h3 className={`heading--4 not-bold light-grey ${styles['CrewCard__header--secondary']}`}>{person.role}</h3>
                    <h2 className={`heading--3 not-bold ${styles['CrewCard__header--main']}`}>{person.name}</h2>
                    <p className={`${styles.description} ${styles['CrewCard__description']} blue`}>{person.bio}</p>
                    <PageIndicator setPerson={setPerson} crew={crew} />
                </section>
                <img src={person.images.png} className={styles.crewImg}></img>
            </div>
        </main>
    )
}