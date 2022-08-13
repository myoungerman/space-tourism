import React from "react";
import styles from "./NavBar.module.css"
import appStyles from '../App.module.css';
import IntroScreen from "./IntroScreen";
import DestinationCard from "./DestinationCard";
import CrewCard from "./CrewCard";
import TechCard from "./TechCard";

export default function NavBar(props) {
    return (
        <div className={`${styles.NavBar} ${props.className}`}>
            <img src="https://svgshare.com/i/jtu.svg" className={`${styles.star} ${styles['NavBar__star']}`} alt="Star icon"></img>
            <div className={styles.line}></div>
            <nav className={styles['nav--main']}>
                <a onClick={() => props.linkClickHandler(<IntroScreen linkClickHandler={props.linkClickHandler} />)}><span className='bold'>00</span> HOME</a>
                <a onClick={() => props.linkClickHandler(<DestinationCard className={appStyles['App__cards']} />)}><span className='bold'>01</span> DESTINATION</a>
                <a onClick={() => props.linkClickHandler(<CrewCard className={appStyles['App__cards']} />)}><span className='bold'>02</span> CREW</a>
                <a onClick={() => props.linkClickHandler(<TechCard className={appStyles['App__cards']} />)}><span className='bold'>03</span> TECHNOLOGY</a>
            </nav>
        </div>
    )
}