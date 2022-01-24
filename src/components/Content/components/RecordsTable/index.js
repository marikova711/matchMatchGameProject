import React from 'react';
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
            <h2 className={styles.title}>Top 10 best results</h2>
            <div className={styles.itemTitle}>
                <h3>Player</h3>
                <h3>Time</h3>
            </div>
            <div className={styles.table}>
                {bestResults.map((item, i) => (
                    <RecordItem
                        key={i} 
                        item={item}
                    />
                ))}
            </div>
            <Button onClick={onClickHomeHandler}>Back</Button>
        </div>
    )
}

export default RecordsTable;