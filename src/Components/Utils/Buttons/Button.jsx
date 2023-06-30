import React from 'react';
import s from "./Button.module.scss";

const Button = ({text, color = "default"}) => {
    return (
        <>
            <button className={color==='default' ? s.button : s.button_reverse}>{text}</button>
        </>
    )
        ;
};

export default Button;