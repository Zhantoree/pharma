import {FC, useState} from 'react';
import s from './Dropdown.module.scss'
import {id} from "postcss-selector-parser";

interface DropdownProps {
    item: {
        title: string,
        icon: string,
        elements: string[],
        id: number
    }
}


const Dropdown: FC<DropdownProps> = ({item}) => {
    const [listActive, setListActive] = useState(false);


    return (
        <div>
            <div className={`${s.list}`}>
                <div onClick={() => setListActive(!listActive)} className={s.list__title}>
                    <p>{item.title}</p>
                    <img src={item.icon} alt="icon"/>
                </div>
                {item.elements.map((item) =>
                    <div key={item} className={listActive ? `${s.list__item} ${s.active}` : s.list__item}>
                        {item}
                    </div>
                )}
            </div>
        </div>

    )
};

export default Dropdown;