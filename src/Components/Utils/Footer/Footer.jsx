import React, {useState} from 'react';
import s from './Footer.module.scss'
import Button from "../Buttons/Button.jsx";
import logo from "../../../assets/Icons/logo.png"
import Call from "../../../assets/Icons/Call.svg"
import Mail from "../../../assets/Icons/Mail.svg"
import Fb from "../../../assets/Icons/Fb.svg"
import Insta from "../../../assets/Icons/Insta.svg"
import Twiter from "../../../assets/Icons/Twiter.svg"
import DropDown from "../../../assets/Icons/DropDown.svg"

import Dropdown from "../Dropdown/Dropdown.jsx";
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.utils.footer.dropdown.items)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.footer}>
                    <div className={s.container}>
                        <div className={`${s.footer__nav} ${s.nav}`}>
                            <div className={s.nav__logo}>
                                <img src={logo} alt="logo"/>
                                <p>Pharma</p>
                            </div>
                            <div className={s.nav__body}>
                                <div className={s.nav__number}>
                                    <img src={Call} alt="Call"/>
                                    <p>(+22) 123 - 4567 - 900</p>
                                </div>
                                <div className={s.nav__number}>
                                    <img src={Mail} alt="Mail"/>
                                    <p>support@doctorate.com</p>
                                </div>
                                <div className={s.nav__social}>
                                    <div className={s.nav_media}>
                                        <img src={Insta} alt="Insta"/>
                                    </div>
                                    <div className={s.nav_media}>
                                        <img src={Fb} alt="Fb"/>
                                    </div>
                                    <div className={s.nav_media}>
                                        <img src={Twiter} alt="Twiter"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__body}>
                            <div className={s.footer__story}>“A Simple Story About
                                The Doctorate Medical Center & Health Care Foundation
                            </div>

                            {items.map(item => <Dropdown item={item}/>)}

                            <div className={`${s.footer__app} ${s.app}`}>
                                <div className={s.app__title}>Book an appointment</div>
                                <div className={s.app__subtitle}>It is a long established fact that a reader will be distracted</div>
                                <div className={s.app__input}>
                                    <input type="email" placeholder={"your email address"}/>
                                </div>
                                <div className={s.app__btn}>
                                    <Button text={"Submit"}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.copy}>
                    <div className={s.copy__text}>Copyright © Pharma | Designed by VictorFlow Templates </div>
                </div>
            </div>
        </>
    );
};

export default Footer;