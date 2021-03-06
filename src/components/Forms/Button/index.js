import React from "react";
import styles from './style.module.scss'

const Button = (props) => {
        return (
            <button 
                {...props}
                className={ props.className || styles.button}
            >
                {props.children}
            </button>
        )
}

export default Button;