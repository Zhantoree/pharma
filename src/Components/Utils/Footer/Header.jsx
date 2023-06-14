import React from 'react';
import s from "./Header.module.css";
import Email from '../../../assets/Icons/Email.png'
import Phone from '../../../assets/Icons/Phone.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
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
                <div className={s.header_item}></div>
            </div>

        </div>
    );
};

export default Header;