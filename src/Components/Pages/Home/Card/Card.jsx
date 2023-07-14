import React from 'react';
import s from "../Home.module.scss";
import Angi from "../../../../assets/Icons/Angi.svg";
import Plus from "../../../../assets/Icons/+.svg";

const Card = ({icon, title, text}) => {
    return (
        <>
            <div className={s.card__column}>
                <div className={s.card__image}>
                    <img src={icon} alt="Angi"/>
                </div>
                <div className={s.card__title}>{title}</div>
                <div className={s.card__text}>{text}</div>
                <div className={s.card__subtext}>
                    <p>Read More</p>
                    <img src={Plus} alt=""/>
                </div>
            </div>
        </>
    );
};

export default Card;