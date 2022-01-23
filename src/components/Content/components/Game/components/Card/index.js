import React from "react";
import styles from './style.module.scss';
import FaceDown from 'images/facedown.jpg';

const Card = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className={styles.card}>
            <div className={flipped ? styles.flipped : ''}>
                <img className={styles.front} src={card.src}/>
                <img 
                    className={styles.back}
                    src={FaceDown} 
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Card;