import React from 'react';
import s from './Footer.module.scss'
import Button from "../Buttons/Button.jsx";
import logo from "../../../assets/Icons/logo.png"
import Call from "../../../assets/Icons/Call.svg"
import Mail from "../../../assets/Icons/Mail.svg"
import Fb from "../../../assets/Icons/Fb.svg"
import Insta from "../../../assets/Icons/Insta.svg"
import Twiter from "../../../assets/Icons/Twiter.svg"
const Footer = () => {
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
                                The Doctorate Medical Center & Health Care Foundation</div>
                            <div className={`${s.footer__list} ${s.list}`}>
                                <div className={s.list__title}>Explore</div>
                                <div className={s.list__item}>Home</div>
                                <div className={s.list__item}>Services</div>
                                <div className={s.list__item}>About us</div>
                                <div className={s.list__item}>Testimonials</div>
                                <div className={s.list__item}>News</div>
                            </div>
                            <div className={`${s.footer__list} ${s.list}`}>
                                <div className={s.list__title}>Uitility Pages</div>
                                <div className={s.list__item}>Style Guide</div>
                                <div className={s.list__item}>Change log</div>
                                <div className={s.list__item}>Licenses</div>
                                <div className={s.list__item}>Protected Page</div>
                                <div className={s.list__item}>404 Page</div>
                            </div>
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