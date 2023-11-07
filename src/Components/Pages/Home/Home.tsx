import s from "./Home.module.scss"
import Button from "../../Utils/Buttons/Button";
import Card from "./Card/Card";
import {Card as CardType} from '../../../types/home'
import Paginate from "../../Utils/Paginate/Paginate";
import {FC, ReactNode, useState} from "react";
import {paginate} from "../../../Helpers/Paginate";
import {useAppSelector} from "../../../hooks/Hooks";

interface HomeProps {
    children?: ReactNode
}


const Home:FC<HomeProps> = () => {
    const cards = useAppSelector(state => state.home.cards)
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const handlePageChange = (pageIndex:number): void => {
        setCurrentPage(pageIndex)
    }



    const cardsCrop = paginate(cards, currentPage, pageSize)

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
                        {cardsCrop.map((card: CardType) =>
                            <Card key={card.id} icon={card.icon} title={card.title} text={card.text}/>
                        )}
                    </div>
                    <div className={s.card__pages}>
                        <Paginate pageSize={11}
                                  onPageChange={handlePageChange}
                                  currentPage={currentPage}
                                  itemsCount={15}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;