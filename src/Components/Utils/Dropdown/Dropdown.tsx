import {FC, useState} from 'react';
import s from './Dropdown.module.scss'

interface DropdownProps {
    item: {
        title: string,
        icon: string,
        elements: string[]
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
                    <div className={listActive ? `${s.list__item} ${s.active}` : s.list__item}>
                        {item}
                    </div>
                )}
            </div>
        </div>

    )
};

export default Dropdown;