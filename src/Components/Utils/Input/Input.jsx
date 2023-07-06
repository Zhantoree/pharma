import React, {useState} from 'react';
import s from'./Input.module.scss'

const Input = ({placeholder, ...props}) => {
    let [input, setInput] = useState('')
    const onChangeInput = newValue => setInput(newValue)

    return (
        <div className={s.input}>
            <input {...props} type="text" placeholder={placeholder} value={input}
                   onChange={e => onChangeInput(e.target.value)}/>
        </div>);
};

export default Input;