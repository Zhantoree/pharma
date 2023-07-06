import React, {useState} from 'react';
import Input from "../Input/Input.jsx";
import Button from "../Buttons/Button.jsx";
import modalImg from '../../../assets/Images/ModalImage.jpg'
import s from './Modal.module.scss'

const Modal = () => {

    return (

        <div className={s.modal}>
            <div className={s.container}>
                <div className={s.modal__image}>
                    <img src={modalImg} alt="modalImg"/>
                </div>
                <div className={s.modal__body}>
                    <div className={s.modal__title}>Book an appoinment</div>
                    <div className={s.modal__text}>Lorem Ipsum is simply dummy text of  printing and typesetting industry standard dummy text the with the release.</div>
                    <div className={s.modal__inputs}>
                        <Input placeholder={"Name"}/>
                        <Input placeholder={"Email"}/>
                        <Input placeholder={"Phone"}/>
                        <Input placeholder={"Subject"}/>
                        <textarea placeholder={"Message..."} className={s.modal__textarea} name="" id=""></textarea>
                        <Button text={"Booking Now"} color={"default"}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;