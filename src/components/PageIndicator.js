import React from "react";
import styles from './PageIndicator.module.css';

export default function PageIndicator() {
    return (
        <div className={`${styles.PageIndicator}`}>
            <span className={`${styles.dot} ${styles.active}`}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
    )
}