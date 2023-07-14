import React from 'react';
import s from './Paginate.module.scss'

const Paginate = ({itemsCount, pageSize, onPageChange, currentPage}) => {
    const pagesCount = Math.ceil(itemsCount/pageSize)
    if(pagesCount === 1) return null;
    const pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.page}>
            {pages.map(page =>
                <li onClick={() => onPageChange(page)} key={page}
                    className={currentPage===page ? `${s.page__item} ${s.active}` : s.page__item}>
                    <a  className={s.page__link}>{page}</a>
                </li>
            )}


        </div>
    );
};

export default Paginate;