import React from "react";
import styles from './ButtonSlider.module.css';

export default function ButtonSlider(props) {
    return (
        <div className={`${styles.ButtonSlider} ${props.className}`}>
            <button className={`${styles['numbered-button']} heading--4`} onClick={() => props.setTech(props.equipment[0])}>1</button>
            <button className={`${styles['numbered-button']} heading--4`} onClick={() => props.setTech(props.equipment[1])}>2</button>
            <button className={`${styles['numbered-button']} heading--4`} onClick={() => props.setTech(props.equipment[2])}>3</button>
        </div>
    )
}