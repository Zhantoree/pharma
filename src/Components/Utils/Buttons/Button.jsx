import React from 'react';
import s from "./Button.module.css";

const Button = (props) => {
    return (
        <div>
            <button className={s.button}>{props.text}</button>
        </div>
    );
};

export default Button;