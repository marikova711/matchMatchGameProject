import React, { useState } from 'react';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import RecordItem from './components/RecordItem';
import { useDispatch } from 'react-redux';
import { setHomeWindow } from 'redux_main/actions/windows';
import Button from 'components/Forms/Button';

const RecordsTable = () => {
    const bestResults = useSelector(state => state.records);
    const dispatch = useDispatch();

    const onClickHomeHandler = () => {
        dispatch(setHomeWindow())
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Top 10 best results</h1>
            <div className={styles.table}>
                {bestResults.map(item => (
                    <RecordItem 
                        item={item}
                    />
                ))}
            </div>
            <Button onClick={onClickHomeHandler}>Back</Button>
        </div>
    )
}

export default RecordsTable;