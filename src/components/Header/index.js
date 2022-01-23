import React from 'react';
import 'styles/fonts.scss';
import styles from './style.module.scss';

const Header = () => {

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Space  Match</h1>
        </div>
    )
}

export default Header;