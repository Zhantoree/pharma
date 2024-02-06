import {ComponentPropsWithoutRef, FC} from 'react';
import s from "./Button.module.scss";


interface ButtonProps extends ComponentPropsWithoutRef<"button">{
    text: string,
    color?: string,
    className?: string
}

const Button: FC<ButtonProps> = ({text, className, color = "default", ...props}) => {

    return (
        <>
            <button className={color==='default' ? `${s.button} ${className}` : `${s.button_reverse} ${className}`} {...props}>{text}</button>
        </>
    )
        ;
};

export default Button;