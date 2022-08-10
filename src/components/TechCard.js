import React from "react";
import styles from './TechCard.module.css';
import CardHeader from './CardHeader';

export default function TechCard(props) {
    return (
        <main className={props.className}>
            <CardHeader
            number="03"
            title="Space Launch 101"
            />
            <section className={styles['TechCard__content']}>
                {/* ButtonSlider here */}
                <div>
                    <p>THE TERMINOLOGY…</p>
                    <p>LAUNCH VEHICLE</p>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/BZmMFXnL/launch-vehicle.png" alt="Spacecraft launch vehicle"></img>
                </div> 
            </section>

        </main>
    )
}