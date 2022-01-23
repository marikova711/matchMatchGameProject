import React from 'react';
import styles from './style.module.scss'

const Input = (props) => {

    const onChangeHandler = (e) => {
        props.onChange(e.target.value);
    }
        return (
            <input
              {...props}
              value={props.value}
              type={props.type}
              className={[styles.input, props.className].join(' ')}
              onChange={onChangeHandler} 
            />
        )
}

export default Input;