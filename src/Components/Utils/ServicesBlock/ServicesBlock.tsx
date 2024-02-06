import React, {FC, useCallback, useState} from 'react';
import s from "../../Pages/Home/Home.module.scss";
import {Card as CardType} from "../../../types/home";
import Card from "../../Pages/Home/Card/Card";
import Paginate from "../Paginate/Paginate";
import {paginate} from "../../../Helpers/Paginate";
import {useAppSelector} from "../../../hooks/Hooks";

interface ServicesBlockProps {
    pageSize?: number
}

const ServicesBlock:FC<ServicesBlockProps> = ({pageSize = 4}) => {
    const cards = useAppSelector(state => state.home.cards)
    console.log(cards.length)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const handlePageChange = useCallback((pageIndex: number): void => {
        setCurrentPage(pageIndex)
    }, [])
    const cardsCrop = paginate(cards, currentPage, pageSize)


    return (
        <article className={s.services}>
            <div className={s.container}>
                <div className={s.services__title}>Services</div>
                <div className={s.services__subtitle}>Feel Like Home With Best Medical Care</div>
                <div className={`${s.services__card} ${s.card}`}>
                    {cardsCrop.map((card: CardType) =>
                        <Card key={card.id} icon={card.icon} title={card.title} text={card.text}/>
                    )}
                </div>
                <div className={s.card__pages}>
                    <Paginate pageSize={pageSize}
                              onPageChange={handlePageChange}
                              currentPage={currentPage}
                              itemsCount={cards.length}/>
                </div>
            </div>
        </article>
    );
};

export default ServicesBlock;