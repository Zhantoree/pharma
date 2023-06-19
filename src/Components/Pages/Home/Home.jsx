import React from 'react';
import Header from "../../Utils/Header/Header.jsx";
import s from "./Home.module.css"
import homeImg from '../../../assets/Images/Homeimg.png'

const Home = () => {
    return (
        <div className={s.home}>
            <Header/>
            <div className="container">
                <div className={s.home_item}>
                    <img src={homeImg} alt="homeImg"/>
                </div>
            </div>

        </div>
    );
};

export default Home;