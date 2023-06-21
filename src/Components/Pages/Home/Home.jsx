import Header from "../../Utils/Header/Header.jsx";
import s from "./Home.module.css"
import Button from "../../Utils/Buttons/Button.jsx";

const Home = () => {
    return (
        <div className={s.home}>
            <Header/>
            <div className={s.home_item}>
                <div className={s.banner}>
                    <div className={`${s.container} ${s.banner_inner}`}>

                        <p className={s.banner_suptitle}>
                            MEDICAL PROFESSIONALS
                        </p>
                        <p className={s.banner_title}>
                            Makes Your Health Better Will Makes Us Better
                        </p>
                        <p className={s.banner_subtitle}>
                            Our team of highly trained professionals uses the latest healing technologies to restore you
                            to pain-free health quickly and easily.
                        </p>

                        <Button text={"Get Started"}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;