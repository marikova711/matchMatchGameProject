import React from 'react';
import Header from '../Header';
import Content from '../Content';
import styles from './style.module.scss';

const App = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <Content/>
        </div>
    )
}

export default App;