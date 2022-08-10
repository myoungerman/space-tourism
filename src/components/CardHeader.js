import React from "react";
import styles from './CardHeader.module.css';

export default function CardHeader(props) {
    return (
        <h1 className={`heading--5 grey ${styles['no-top-bottom-margin']}`}>{props.number}<span className={`blue not-bold ${styles['CardHeader__span']}`}>{props.title}</span></h1>
        )
}