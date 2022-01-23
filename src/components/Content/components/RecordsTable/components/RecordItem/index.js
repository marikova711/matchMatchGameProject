import React from "react";
import styles from './style.module.scss';

const RecordItem = ({ item }) => {

    return (
        <div className={styles.item}>
            <div className={styles.player}>
                <p>{item.currentPlayer.firstName} {item.currentPlayer.lastName}</p>
                <p>{item.currentPlayer.email}</p>
            </div>
            <div className={styles.timer}>
                <p>{item.minutes} : {item.seconds}</p>
            </div>
        </div>
    )
}

export default RecordItem;