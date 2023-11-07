import {ComponentPropsWithoutRef, FC} from 'react';
import s from "./Button.module.scss";


interface Button extends ComponentPropsWithoutRef<"button">{
    text: string,
    color?: string,

}

const Button: FC<Button> = ({text, color = "default", ...props}) => {

    return (
        <>
            <button  {...props} className={color==='default' ? s.button : s.button_reverse}>{text}</button>
        </>
    )
        ;
};

export default Button;