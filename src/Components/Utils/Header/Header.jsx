import s from "./Header.module.css";
import Email from '../../../assets/Icons/Email.svg'
import Phone from '../../../assets/Icons/Phone.svg'
import Logo from '../../../assets/Icons/Logo.png'
import {NavLink} from "react-router-dom";
import Button from "../Buttons/Button.jsx";

const Header = () => {
    return (
        <>
            <div className={s.header}>
                <div className={s.header_item}>
                    <div className={s.container}>
                        <div className={s.number}>
                            <div className={s.number_inner}>
                                <p className={s.number_text}>Welcome to Pharma. We provides medical accessories</p>

                            </div>
                            <div className={s.number_inner}>
                                {/* eslint-disable-next-line no-undef */}
                                <img className={s.number_inner_img} src={Phone} alt=""/>
                                <p className={s.number_text}>(404) 850 - 7080</p>
                            </div>
                            <div className={s.number_inner}>
                                <img className={s.number_inner_img} src={Email} alt=""/>
                                <p className={s.number_text}>(404) 850 - 7080</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.container}>
                    <div className={s.navbar}>
                        <NavLink to={"/"}>
                            <div className={s.logo}>
                                <img className={s.logo_img} src={Logo} alt="logo"/>
                                <span>Pharma</span>
                            </div>
                        </NavLink>
                        <div className={s.navbar_item}>
                            <NavLink className={s.navbar_item_link} to={"/"}>Home</NavLink>
                            <NavLink className={s.navbar_item_link} to={"/about"}>About</NavLink>
                            <NavLink className={s.navbar_item_link} to={"/service"}>Service</NavLink>
                            <NavLink className={s.navbar_item_link} to={"/pages"}>Pages</NavLink>
                            <NavLink className={s.navbar_item_link} to={"/contact"}>Contact us</NavLink>
                        </div>
                        <NavLink to={"/contact"}>
                            <Button text={"Appointment"}/>
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;