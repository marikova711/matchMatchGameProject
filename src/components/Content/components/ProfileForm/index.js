import React, { useState } from 'react';
import styles from './style.module.scss';
import { addPlayer, setCurrentPlayer } from 'redux_main/actions/players';
import { setHomeWindow } from 'redux_main/actions/windows';
import { useDispatch } from 'react-redux';
import Input from 'components/Forms/Input';
import Button from 'components/Forms/Button';

const ProfileForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const onClickHandler = () => {
        const newPlayer = {
            firstName, lastName, email
        }
        if (newPlayer.firstName.length && newPlayer.lastName.length && newPlayer.email.length) {
        dispatch(addPlayer(newPlayer))
        dispatch(setCurrentPlayer(newPlayer))
        dispatch(setHomeWindow())
        }
    }

    return (
        <div className={styles.form}>
            <p className={styles.text}>Fill out your profile<br/> to start playing:</p>
            <Input onChange={setFirstName} placeholder='Name' type='text'/>
            <Input onChange={setLastName} placeholder='Last name' type='text'/>
            <Input onChange={setEmail} placeholder='Email' type='email'/>
            <Button onClick={onClickHandler}>Log in</Button>
        </div>
    )
}

export default ProfileForm;