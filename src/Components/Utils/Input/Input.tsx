import {FC} from 'react';
import s from './Input.module.scss'
import * as React from "react";


interface InputProps {
    placeholder?: string;
    [x:string]: any,
    value?: string,
    setValue?: (value: string) => void
}
const Input:FC<InputProps> = ({placeholder, value, setValue, ...props}) => {
    const handleChangeValue: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        if (setValue) {
            setValue(e.target.value)
        }
    }
    return (
        <div className={s.input}>
            <input {...props} placeholder={placeholder} value={value}
                   onChange={handleChangeValue}/>
        </div>);
};

export default Input;