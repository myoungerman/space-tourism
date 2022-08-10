import React from "react";
import styles from './TechCard.module.css';
import CardHeader from './CardHeader';
import ButtonSlider from "./ButtonSlider";

export default function TechCard(props) {
    return (
        <main className={props.className}>
            <CardHeader
            number="03"
            title="Space Launch 101"
            />
            <section className={styles['TechCard__content']}>
                <ButtonSlider className={`${styles['TechCard__ButtonSlider']}`} />
                <div className={`${styles['TechCard__text']}`}>
                    <p className={`${styles['intro-text-before-header']} ${styles['TechCard__intro-text']} blue`}>THE TERMINOLOGY…</p>
                    <h1 className={`${styles['TechCard__header--main']} heading--3 not-bold ${styles.header}`}>LAUNCH VEHICLE</h1>
                    <p className={`${styles['TechCard__description']} ${styles.description} blue`}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div className={`${styles.img} ${styles['TechCard__img-container']}`}>
                    <img src="https://i.postimg.cc/BZmMFXnL/launch-vehicle.png" alt="Spacecraft launch vehicle"></img>
                </div> 
            </section>

        </main>
    )
}