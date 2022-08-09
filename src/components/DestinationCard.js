import React from "react";
import styles from './DestinationCard.module.css'

export default function DestinationCard() {
    return (
        <main>
            <section>
                <h1>01 Pick your destination</h1>
                <div className={styles['planet-img-container']}>
                    <img className="img--contain" src="https://i.postimg.cc/G2JS7VN7/Moon.png"></img>
                </div>
            </section>
            <section>
                <nav>
                    <a>Moon</a>
                    <a>Mars</a>
                    <a>Europa</a>
                    <a>Titan</a>
                </nav>
                <h2>Moon</h2>
                <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="line--grey"></div>
                <details>
                    <div>
                        <p>Avg. distance</p>
                        <p>384,400 KM</p>
                    </div>
                    <div>
                        <p>Est. travel time</p>
                        <p>3 days</p>
                    </div>
                </details>
            </section>
        </main>
    )
}