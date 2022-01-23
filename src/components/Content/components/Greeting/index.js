import React from 'react';
import 'styles/fonts.scss';
import styles from './style.module.scss';

const Greeting = () => {

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome to Space Match Game!</h1>
            <h2>How to play?</h2>
            <p className={styles.rules}>Start the game by flipping a card. Then try to find another card that has the same image as the first. If you can't find a pair, the flipped cards will be flipped back with the face down. Try to remember these images as it becomes easier to find pairs the longer you play. When you find a pair they are removed from the board and when you find all the pairs in this memory, you have completed the level.</p>
        </div>
    )
}

export default Greeting;