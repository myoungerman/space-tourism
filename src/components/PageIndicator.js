import React from "react";
import styles from './PageIndicator.module.css';

export default function PageIndicator(props) {
    return (
        <div className={`${styles.PageIndicator}`}>
            <span className={`${styles.dot} ${styles.active}`} onClick={() => props.setPerson(props.crew[0])}></span>
            <span className={styles.dot} onClick={() => props.setPerson(props.crew[1])}></span>
            <span className={styles.dot} onClick={() => props.setPerson(props.crew[2])}></span>
            <span className={styles.dot} onClick={() => props.setPerson(props.crew[3])}></span>
        </div>
    )
}