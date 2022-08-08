import React from "react";
import styles from "./NavBar.module.css"

export default function NavBar(props) {
    return (
        <div className={`${styles.NavBar} ${props.className}`}>
            <img src="https://svgshare.com/i/jtu.svg" className={`${styles.star} ${styles['NavBar__star']}`} alt="Star icon"></img>
            <div className={styles.line}></div>
            <nav>
                <a><span className={styles.bold}>00</span> HOME</a>
                <a><span className={styles.bold}>01</span> DESTINATION</a>
                <a><span className={styles.bold}>02</span> CREW</a>
                <a><span className={styles.bold}>03</span> TECHNOLOGY</a>
            </nav>
        </div>
    )
}