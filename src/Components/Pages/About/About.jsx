import React from 'react';
import Header from "../../Utils/Header/Header.jsx";
import s from "./About.module.scss"
import bannerImg from '../../../assets/Images/Aboutimg.jpg'
import aboutVideo from '../../../assets/Images/AboutVideo.png'
import Button from "../../Utils/Buttons/Button.jsx";
import AboutBio from '../../../assets/Images/AboutBio.jpg';
import AboutVaccine from '../../../assets/Images/AboutVaccine.png'
import AboutLate from '../../../assets/Images/AboutLate.png'
import AboutExpert from '../../../assets/Images/AboutExpert.png'
import Footer from "../../Utils/Footer/Footer.jsx";

const About = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.banner}>
                <div className={s.banner__image}>
                    <img src={bannerImg} alt="bannerImg"/>
                </div>
                <div className={s.container}>
                    <div className={s.banner__body}>
                        <div className={s.banner__title}>Our team helps you get your life back on track.</div>
                        <div className={s.banner__subtitle}>Our team of highly trained professionals uses the latest
                            healing technologies to restore you to pain-free health quickly and easily. We thoroughly
                            evaluate & treat all of the contributing root factors related to your issue. Includes, but
                            is not limit, your work and home stressors.
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.about}>
                <div className={s.container}>
                    <div className={s.about__video}>
                        <img src={aboutVideo} alt="aboutVideo"/>
                    </div>
                    <div className={s.about__body}>
                        <div className={`${s.about__column} ${s.column}`}>
                            <div className={s.column__title}>THE LEADERS</div>
                            <div className={s.column__subtitle}>We have the best Pharma & Medical</div>
                            <div className={s.column__text}>Collaboratively administrate empowered markets via
                                plug-and-play networks. users after installed base benefits. Dramatically visualize
                                customer. <br/> <br/>Completely synergize resource taxing relationships via premier
                                niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                                Dynamically innovate.
                            </div>
                        </div>
                        <div className={`${s.about__column} ${s.column}`}>
                            <div className={s.column__title}>OUR STORY</div>
                            <div className={s.column__subtitle}>Our mission is to help patients live better.</div>
                            <div className={s.column__text}>Collaboratively administrate empowered markets via
                                plug-and-play networks. users after installed base benefits. Dramatically visualize
                                customer.
                            </div>
                            <div className={s.column__list}>
                                <div className={s.column__item}>Over 400 leading hospitals and clinics
                                </div>
                                <div className={s.column__item}>Trusted doctors across 20+ specialties
                                </div>
                                <div className={s.column__item}>Award-winning practice management</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={s.cta}>
                <div className={s.cta__title}>Online consultations with
                    Certified doctors
                </div>
                <div className={s.cta__body}>
                    <Button text={"Book an Appointment"}/>
                    <div className={s.cta__text}>(OR)</div>
                    <Button color={'fff'} text={"Call: 1-800-123-9999"}/>
                </div>
            </div>
            <div className={s.value}>
                <div className={s.container}>
                    <div className={s.value__body}>
                        <div className={s.value__title}>
                            Our values that drive success
                        </div>
                        <div className={s.value__subtitle}>
                            Our team of highly trained professionals uses the latest healing technologies to restore you
                            to pain-free health quickly and easily. We thoroughly evaluate & treat all of the
                            contributing root factors related to your issue. Includes, but is not limit, your work and
                            home stressors.
                        </div>
                    </div>
                    <div className={`${s.value__row} ${s.card}`}>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={AboutBio} alt="AboutBio"/>
                            </div>
                            <div className={s.card__title}>Bio Technology</div>
                            <div className={s.card__text}>Our team of highly trained professionals uses the latest
                                healing technologies.
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={AboutVaccine} alt="AboutBio"/>
                            </div>
                            <div className={s.card__title}>Vaccine</div>
                            <div className={s.card__text}>Our team of highly trained professionals uses the latest
                                healing technologies.
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={AboutLate} alt="AboutBio"/>
                            </div>
                            <div className={s.card__title}>Latest Technology</div>
                            <div className={s.card__text}>Our team of highly trained professionals uses the latest
                                healing technologies.
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={AboutExpert} alt="AboutBio"/>
                            </div>
                            <div className={s.card__title}>Expert Doctors</div>
                            <div className={s.card__text}>Our team of highly trained professionals uses the latest
                                healing technologies.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;