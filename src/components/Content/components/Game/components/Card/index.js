import React, { useEffect } from "react";
import styles from './style.module.scss';
import { useSelector } from 'react-redux';

const Card = ({ card, handleChoice, flipped, disabled }) => {
    const currentCardBack = useSelector(state => state.cards.currentCardBack)

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className={[styles.card, card.isMatched ? styles.isMatched : ''].join(' ')}>
            <div className={flipped ? styles.flipped : ''}>
                <img className={styles.front} src={card.src}/>
                <img 
                    className={styles.back}
                    src={currentCardBack} 
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Card;