import Header from "../../Utils/Header/Header.jsx";
import s from "./Home.module.scss"
import Button from "../../Utils/Buttons/Button.jsx";
import Footer from "../../Utils/Footer/Footer.jsx";
import homeImg from '../../../assets/Images/Homeimg.png'
import Angi from '../../../assets/Icons/Angi.svg'
import Brain from '../../../assets/Icons/Brain.svg'
import Cardi from '../../../assets/Icons/Cardi.svg'
import Dent from '../../../assets/Icons/Dent.svg'
import Eye from '../../../assets/Icons/Eye.svg'
import Plus from '../../../assets/Icons/+.svg'
import Orth from '../../../assets/Icons/Orth.svg'

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <div className={s.container}>
                    <div className={s.banner__body}>
                        <div className={s.banner__title}>MEDICAL PROFESSIONALS</div>
                        <div className={s.banner__subtitle}>Makes Your Health Better Will Makes Us Better</div>
                        <div className={s.banner__text}>Our team of highly trained professionals uses the latest healing
                            technologies to restore you to pain-free health quickly and easily.
                        </div>
                        <div className={s.banner__btn}>
                            <Button text={"Get Started"}/>
                        </div>

                    </div>

                </div>
            </div>
            <div className={s.services}>
                <div className={s.container}>
                    <div className={s.services__title}>Services</div>
                    <div className={s.services__subtitle}>Feel Like Home With Best Medical Care</div>
                    <div className={`${s.services__card} ${s.card}`}>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Angi} alt="Angi"/>
                            </div>
                            <div className={s.card__title}>Angioplasty</div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Cardi} alt="Cardi"/>
                            </div>
                            <div className={s.card__title}>Cardiology</div>
                            <div className={s.card__text}>Our team of high professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Dent} alt="Dent"/>
                            </div>
                            <div className={s.card__title}>Dental</div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Eye} alt="Eye"/>
                            </div>
                            <div className={s.card__title}>Eye Care</div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Brain} alt="Brain"/>
                            </div>
                            <div className={s.card__title}>Endocrinology</div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Orth} alt="Orth"/>
                            </div>
                            <div className={s.card__title}>Orthopaedics</div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Angi} alt="Angi"/>
                            </div>
                            <div className={s.card__title}></div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                        <div className={s.card__column}>
                            <div className={s.card__image}>
                                <img src={Brain} alt="Brain"/>
                            </div>
                            <div className={s.card__title}></div>
                            <div className={s.card__text}>Our team of highl professionals uses the latest heal
                                echnologies health quickly and easily.
                            </div>
                            <div className={s.card__subtext}>
                                <p>Read More</p>
                                <img src={Plus} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;