import React from 'react';
import styles from './style.module.scss';
import Game from './components/Game';
import ProfileForm from './components/ProfileForm';
import Home from './components/Home';
import Settings from './components/Settings';
import Greeting from './components/Greeting';
import RecordsTable from './components/RecordsTable';
import { useSelector } from 'react-redux';

const Content = () => {
    const windows = useSelector(state => state.windows)

    return (
            <div className={styles.container}>
            {windows.startWindow && 
                <div className={styles.greetBlock}>
                    <Greeting/>
                    <ProfileForm/>
                </div>}
            {windows.homeWindow && !windows.gameWindow && !windows.settingsWindow && !windows.bestResultWindow && <Home/>}
            {windows.homeWindow && windows.gameWindow && <Game/>}
            {windows.homeWindow && windows.bestResultWindow && <RecordsTable/>}
            {windows.homeWindow && windows.settingsWindow && <Settings/>}
            </div>
    )
}

export default Content;