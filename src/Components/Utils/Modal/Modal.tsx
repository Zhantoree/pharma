
import Input from "../Input/Input";
import Button from "../Buttons/Button";
import modalImg from '../../../assets/Images/ModalImage.jpg'
import s from './Modal.module.scss'
import {FC, useState} from "react";
import {sendForm} from "../../../actions/Form";

interface ModalProps {
    active: boolean,
    setActive: (value: boolean) => void
}

const Modal:FC<ModalProps> = ({active, setActive}) => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    return (
        <div onClick={() => setActive(false)} className={active ? `${s.modal} ${s.active}` : `${s.modal}`}>
            <div className={s.container} onClick={(e) => e.stopPropagation()}>
                <div className={s.modal__image}>
                    <img src={modalImg} alt="modalImg"/>
                </div>
                <div className={s.modal__body}>
                    <div className={s.modal__title}>
                        <p>                        Book an appoinment
                        </p>
                        <div className={s.modal__close}>
                            <span onClick={() => setActive(false)}></span>

                        </div>
                    </div>
                    <div className={s.modal__text}>Lorem Ipsum is simply dummy text of  printing and typesetting industry standard dummy text the with the release.</div>
                    <form className={s.modal__inputs}>
                        <Input type="text" required="true" setValue={setName} value={name} name="name" placeholder={"Name"}/>
                        <Input type="email" required="true" setValue={setEmail} value={email} name="email" placeholder={"Email"}/>
                        <Input type="phone" required="true" setValue={setPhone} value={phone} name="phone" placeholder={"Phone"}/>
                        <Input type="text" required="true" setValue={setSubject} value={subject} name="subject" placeholder={"Subject"}/>
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" placeholder={"Message..."} className={s.modal__textarea}></textarea>
                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                        <Button onClick={async () => await sendForm(name, email, phone, subject, message)} type={"submit"} text={"Booking Now"} color={"default"}/>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;