import React from "react";
import styles from './style.module.scss';

const ModalWindow = ({ isShow, handleModalClose, timer }) => {

    const closeModalHandler = (e) => {
        const currentClass = e.target.className;
        if (currentClass === styles.modalBackground) {
            handleModalClose()
        }
    }

    return (
        <div hidden={!isShow}>
            <div className={styles.modalBackground} onClick={closeModalHandler}>
                <div className={styles.modalBlock}>
                    <span onClick={handleModalClose} className={styles.close}></span>
                    <h1 className={styles.title}>Congratulations!</h1>
                    <p className={styles.text}>You complited the game!</p>
                    <p className={styles.text}>Your score is {timer.minutes} minutes {timer.seconds} seconds</p>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;