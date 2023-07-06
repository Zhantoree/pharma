import s from "./Header.module.scss";
import Email from '../../../assets/Icons/Email.svg'
import Phone from '../../../assets/Icons/Phone.svg'
import Logo from '../../../assets/Icons/Logo.png'
import {NavLink} from 'react-router-dom';
import Button from '../Buttons/Button.jsx';
import {useState} from "react";
import scrollDown from '../../../assets/Icons/scrollDown.svg'

const Header = () => {
    const [burgerType, setBurgerType] = useState(true)
    const [navVisibility, setNavVisibility] = useState(true)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.header}>

                    <div className={`${s.header__number} ${s.number}`}>
                        <div className={s.container}>
                            <div className={s.number__text}>Welcome to Pharma. We provides medical accessories</div>
                            <div className={s.number__info}>
                                <div className={s.number__phone}>
                                    <img src={Phone} alt="Phone"/>
                                    <span>(404) 850 - 7080</span>
                                </div>
                                <div className={s.number__email}>
                                    <img src={Email} alt="Email"/>
                                    <span>(404) 850 - 7080</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.header__nav} ${s.nav}`}>
                        <div className={s.container}>
                            <NavLink to='/'>
                            <div className={s.nav__logo}>
                                    <img src={Logo} alt="Logo"/>
                                    <p>Pharma</p>
                            </div>
                            </NavLink>
                            <div className={s.nav__links}>
                                <NavLink to="/" className={({isActive, isPending}) =>
                                    isPending ? `${s.nav__link}` : isActive ? `${s.nav__link} ${s.active}` : `${s.nav__link}`
                                }>Home</NavLink>
                                <NavLink to="/about" className={({isActive, isPending}) =>
                                    isPending ? `${s.nav__link}` : isActive ? `${s.nav__link} ${s.active}` : `${s.nav__link}`
                                }>About</NavLink>
                                <NavLink to="/services" className={({isActive, isPending}) =>
                                    isPending ? `${s.nav__link}` : isActive ? `${s.nav__link} ${s.active}` : `${s.nav__link}`
                                }>Services</NavLink>
                                <NavLink to="/pages" className={({isActive, isPending}) =>
                                    isPending ? `${s.nav__link}` : isActive ? `${s.nav__link} ${s.active}` : `${s.nav__link}`
                                }>
                                    Pages
                                    <img src={scrollDown} alt="scrollDown"/>
                                </NavLink>
                                <NavLink to="/contact" className={({isActive, isPending}) =>
                                    isPending ? `${s.nav__link}` : isActive ? `${s.nav__link} ${s.active}` : `${s.nav__link}`
                                }>Contact us</NavLink>
                            </div>
                            <div className={s.nav__btn}>
                                <NavLink to="/home" className={s.nav__btn}>
                                    <Button text={"Appointment"}/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;