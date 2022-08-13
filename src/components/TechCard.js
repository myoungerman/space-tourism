import React, { useMemo } from "react";
import styles from './TechCard.module.css';
import CardHeader from './CardHeader';
import ButtonSlider from "./ButtonSlider";
import data from "../data.json";

export default function TechCard(props) {

    const equipment = useMemo(() => { return data.technology }, []);
    const [tech, setTech] = React.useState(equipment[0]);

    return (
        <main className={`${props.className} ${styles.TechCard}`}>
            <CardHeader
            number="03"
            title="Space Launch 101"
            />
            <section className={styles['TechCard__content']}>
                <ButtonSlider className={`${styles['TechCard__ButtonSlider']}`} setTech={setTech} equipment={equipment} />
                <div className={`${styles['TechCard__text']}`}>
                    <p className={`${styles['intro-text-before-header']} ${styles['TechCard__intro-text']} blue`}>THE TERMINOLOGY…</p>
                    <h1 className={`${styles['TechCard__header--main']} heading--3 not-bold ${styles.header}`}>{tech.name}</h1>
                    <p className={`${styles['TechCard__description']} ${styles.description} blue`}>{tech.description}</p>
                </div>
                <div className={`${styles.img} ${styles['TechCard__img-container']}`}>
                    <img src={window.matchMedia('(max-width: 768px)').matches ? tech.images.landscape : tech.images.portrait} alt="Spacecraft launch vehicle"></img>
                </div> 
            </section>

        </main>
    )
}