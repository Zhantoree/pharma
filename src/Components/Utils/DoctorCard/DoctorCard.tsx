import React, {FC} from 'react';
import s from "./DoctorCard.module.scss";
import Insta from "../../../assets/Icons/Insta.svg"
import Twitter from "../../../assets/Icons/Twiter.svg"
import Fb from "../../../assets/Icons/Fb.svg"


interface DoctorCardProps {
    id: string,
    picture: string,
    name: string,
    profession: string,
    insta: string | null,
    facebook: string | null,
    twitter: string | null
}

const DoctorCard:FC<DoctorCardProps> = ({id, picture, facebook, insta, twitter, name, profession}) => {
    return (
        <div className={s.doctor__card}>
            <img src={picture} className={s.doctor__image}/>
            <h3 className={s.doctor__name}>{name}</h3>
            <h4 className={s.doctor__prof}>{profession}</h4>
            <div className={s.doctor__links}>
                {insta !== null
                    ?
                    <a href={insta}>
                        <img src={Insta} className={s.doctor__link} alt="Insta"/>
                    </a>
                        :
                    ""
                    }
                {twitter !== null
                    ?
                    <a href={twitter}>
                        <img src={Twitter} className={s.doctor__link} alt="Twiter"/>
                    </a>
                        :
                    ""
                    }
                {facebook !== null
                    ?
                    <a href={facebook}>
                        <img src={Fb} className={s.doctor__link} alt="facebook"/>
                    </a>
                        :
                    ""
                    }
            </div>
        </div>

    );
};

export default DoctorCard;