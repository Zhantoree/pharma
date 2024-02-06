import s from "./Home.module.scss"
import Button from "../../Utils/Buttons/Button";
import {useState, memo, useCallback} from "react";
import {useAppSelector} from "../../../hooks/Hooks";
import Modal from "../../Utils/Modal/Modal";
import ServicesBlock from "../../Utils/ServicesBlock/ServicesBlock";

const Home = () => {
    const feedbacks = useAppSelector(state => state.home.feedbacks)
    const doctors = useAppSelector(state => state.home.doctors)


    const [isModalActive, setIsModalActive] = useState<boolean>(false)

    return (
        <main className={s.wrapper}>
            {
                isModalActive ?
                    <Modal active={isModalActive} setActive={setIsModalActive}/>
                    :
                    <></>
            }
            <section className={s.banner}>
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
            </section>

            <ServicesBlock />
            <section className={s.about}>
                <div className={s.container}>
                    <div className={s.about__body}>
                        <p className={s.about__suptitle}>About Us</p>
                        <h2 className={s.about__title}>The Heart And Science Of Medicate Test</h2>
                        <p className={s.about__subtitle}>Capitalize on low hanging fruit to identify a ballpark value
                            added activity to beta test. Override the digital divide with information highway will
                            close.</p>
                        <div className={s.about__cards}>
                            <div className={s.about__card}>
                                <img src="/HomeCard1.svg" alt=""/>
                                <p>Multi Speciality Pharma Treatment</p>
                            </div>
                            <div className={s.about__card}>
                                <img src="/HomeCard2.svg" alt=""/>
                                <p>24 Hours Medical Service</p>
                            </div>
                        </div>
                        <Button className={s.about__button} text={"More About Us"}/>
                    </div>
                </div>
            </section>
            <section className={s.logo}>
                <div className={s.container}>
                    <div className={s.logo__item}>
                        <img src="/spinalCare.svg" alt="spinalCare"/>
                        <p>Spinal Care</p>
                    </div>
                    <div className={s.logo__item}>
                        <img src="/medical.svg" alt="medical"/>
                        <p>Mr.Medical</p>
                    </div>
                    <div className={s.logo__item}>
                        <img src="/twohands.svg" alt="twohands"/>
                        <p>Twohands</p>
                    </div>
                    <div className={s.logo__item}>
                        <img src="/HealthCare.svg" alt="HealthCare"/>
                        <p>Health Care</p>
                    </div>
                    <div className={s.logo__item}>
                        <img src="/medicalLove.svg" alt="medicalLove"/>
                        <p>Medical Love</p>
                    </div>
                </div>
            </section>
            <section className={s.cta}>
                <div className={s.cta__title}>Schedule an imperson or virtual appointment today</div>
                <div className={s.cta__body}>
                    <Button color={"no"} onClick={() => setIsModalActive(true)} text={"Book an Appointment"}/>
                </div>
            </section>
            <section className={s.spec}>
                <div className={s.container}>
                    <div className={s.spec__body}>
                        <div className={s.spec__suptitle}>SPEACIAL CARE</div>
                        <div className={s.spec__title}>We provide a best care for your health with specialist</div>
                        <div className={s.spec__subtitle}>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer. <br/> <br/>
                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.</div>
                        <div className={s.spec__check}>
                            <img src="/check.png" alt="check"/>
                            <p>20+ years of excellence</p>
                        </div>
                        <div className={s.spec__check}>
                            <img src="/check.png" alt="check"/>
                            <p>Professional Experts</p>
                        </div>
                        <Button text={"Discover Now"} className={s.spec__button}/>
                    </div>
                    <div className={s.spec__cards}>
                        <div className={s.spec__card}>
                            <img src={"/homeDoctor1.jpg"} alt="homeDoctor1" />
                        </div>
                        <div className={s.spec__card}>
                            <img src={"/homeDoctor2.jpg"} alt="homeDoctor2"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.feedback}>
                <div className={s.container}>
                    <div className={s.feedback__header}>
                        <div className={s.feedback__suptitle}>FEEDBACK</div>
                        <div className={s.feedback__title}>Feedbacks about our service from the bottom of heart</div>
                    </div>
                    <div className={s.feedback__body}>
                        {feedbacks.map(feedback => {
                            return <div className={s.profile}>
                                <div className={s.profile__header}></div>
                                <hr/>
                                <div className={s.profile__body}>
                                    <div className={s.profile__text}></div>
                                    <div className={s.profile__rate}>

                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section>
        </main>
    );
};

export default memo(Home);