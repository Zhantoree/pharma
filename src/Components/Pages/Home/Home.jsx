import Header from "../../Utils/Header/Header.jsx";
import s from "./Home.module.scss"
import Button from "../../Utils/Buttons/Button.jsx";
import Footer from "../../Utils/Footer/Footer.jsx";
import homeImg from '../../../assets/Images/Homeimg.png'
import Card from "./Card/Card.jsx";
import {useSelector} from "react-redux";
import Paginate from "../../Utils/Paginate/Paginate.jsx";
import {useState} from "react";
import {paginate} from "../../../Helpers/Paginate.js";


const Home = () => {
    const cards = useSelector(state => state.home.cards)
    const count = cards.length
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
        console.log(pageIndex)
    }



    let cardsCrop = paginate(cards, currentPage, pageSize)

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
                        {cardsCrop.map(card =>
                            <Card key={card.id} icon={card.icon} title={card.title} text={card.text}/>
                        )}
                        <div className={s.card__pages}>
                            <Paginate pageSize={11}
                                      onPageChange={handlePageChange}
                                      currentPage={currentPage}
                                      itemsCount={15}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;