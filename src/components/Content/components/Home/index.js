import React from 'react';
import styles from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setGameWindow, setSettingsWindow, setStartWindow, setBestResultWindow } from 'redux_main/actions/windows';
import { deleteCurrentPlayer } from 'redux_main/actions/players';
import Button from 'components/Forms/Button';

const Home = () => {
    const currentPlayer = useSelector(state => state.players.currentPlayer)
    const dispatch = useDispatch();

    const onClickGameHandler = () => {
        dispatch(setGameWindow())
    }

    const onClickSettingsHandler = () => {
        dispatch(setSettingsWindow())
    }

    const onClickBestResultHandler = () => {
        dispatch(setBestResultWindow())
    }

    const onClickStartHandler = () => {
        dispatch(setStartWindow())
        dispatch(deleteCurrentPlayer())
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hi, {currentPlayer.firstName}!</h1>
            <h2 className={styles.item} onClick={onClickGameHandler}>New game</h2>
            <h2 className={styles.item} onClick={onClickBestResultHandler}>Best Results</h2>
            <h2 className={styles.item} onClick={onClickSettingsHandler}>Settings</h2>
            <Button onClick={onClickStartHandler}>Log out</Button>
        </div>
    )
}

export default Home;