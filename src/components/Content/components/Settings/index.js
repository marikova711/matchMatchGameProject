import React, { useState } from 'react';
import styles from './style.module.scss';
import { chooseEasyLevel, chooseMiddleLevel, chooseHardLevel } from 'redux_main/actions/cards';
import { setHomeWindow } from 'redux_main/actions/windows';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/Forms/Input';
import Button from 'components/Forms/Button';

const Settings = () => {
    const cardImages = useSelector(state => state.cards.cardImages)
    const dispatch = useDispatch();

    const chooseMiddle = () => {
        dispatch(chooseMiddleLevel())
    }

    const chooseEasy = () => {
        dispatch(chooseEasyLevel())
    }

    const chooseHard = () => {
        dispatch(chooseHardLevel())
    }

    const onClickHomeHandler = () => {
        dispatch(setHomeWindow())
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Choose difficulty level:</h2>
            <div className={styles.level}>
                <div className={styles.levelItem}>
                    <Input className={styles.levelInput} id='easy' name='level' type='radio' checked={cardImages.length === 4} onChange={chooseEasy}/>
                    <label className={styles.levelLabel} for='easy'>easy</label>
                    <div className={styles.check}></div>
                </div>
                <div className={styles.levelItem}>
                    <Input className={styles.levelInput} id='middle' name='level' type='radio' checked={cardImages.length === 6}  onChange={chooseMiddle}/>
                    <label className={styles.levelLabel} for='middle'>middle</label>
                    <div className={styles.check}></div>
                </div>
                <div className={styles.levelItem}>
                    <Input className={styles.levelInput} id='hard' name='level' type='radio' checked={cardImages.length === 8} onChange={chooseHard}/>
                    <label className={styles.levelLabel} for='hard'>hard</label>
                    <div className={styles.check}></div>
                </div>
            </div>
            <Button onClick={onClickHomeHandler}>Back</Button>
        </div>
    )
}

export default Settings;