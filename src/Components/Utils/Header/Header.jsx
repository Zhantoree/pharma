import s from "./Header.module.css";
import Email from '../../../assets/Icons/Email.png'
import Phone from '../../../assets/Icons/Phone.png'
import Logo from '../../../assets/Icons/Logo.png'
import {NavLink} from "react-router-dom";
import Button from "../Buttons/Button.jsx";

const Header = () => {
    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header_item}>
                    <p>Welcome to Pharma. We provides medical accessories</p>
                    <div className={s.number}>
                        {/* eslint-disable-next-line no-undef */}
                        <img src={Phone} alt=""/>
                        <p>(404) 850 - 7080</p>
                    </div>
                    <div className={s.number}>
                        <img src={Email} alt=""/>
                        <p>(404) 850 - 7080</p>
                    </div>
                </div>

                <div className={s.header_item}>
                    <NavLink to={"/"}>
                        <div className={s.logo}>
                            <img src={Logo} alt="logo"/>
                            <span>Pharma</span>
                        </div>
                    </NavLink>
                    <div className={s.navbar}>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/service"}>Service</NavLink>
                        <NavLink to={"/pages"}>Pages</NavLink>
                        <NavLink to={"/contact"}>Contact us</NavLink>
                    </div>
                    <NavLink to={"/contact"}>
                        <Button text={"Appointment"}/>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Header;