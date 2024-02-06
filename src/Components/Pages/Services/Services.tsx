import s from './Services.module.scss'
import ServicesBlock from "../../Utils/ServicesBlock/ServicesBlock";
import Button from "../../Utils/Buttons/Button";
import DoctorCard from "../../Utils/DoctorCard/DoctorCard";
import doctor1 from '../../../assets/Images/doctor1.jpg'
import doctor2 from '../../../assets/Images/doctor2.jpg'
import doctor3 from '../../../assets/Images/doctor3.jpg'

const Services = () => {
    const doctors = [
        {
            id: '1',
            picture: doctor1,
            name: "Vanseena Adams",
            profession: "Dental Patient",
            insta: 'Hello',
            facebook: 'Hello',
            twitter: 'Hello'
        },
        {
            id: '2',
            picture: doctor2,
            name: "Dr. Helen Wilmore",
            profession: "Dental Patient",
            insta: 'Hello',
            facebook: 'Hello',
            twitter: 'Hello'
        },
        {
            id: '3',
            picture: doctor3,
            name: "Dr. Kate Winslot",
            profession: "Dental Patient",
            insta: 'Hello',
            facebook: 'Hello',
            twitter: 'Hello'
        },
    ]
    return (
        <div className={s.wrapper}>

            <section className={s.serv__banner}>
                <h1 className={s.serv__header}>Our Services</h1>
            </section>
            <ServicesBlock pageSize={8}/>
            <section className={`${s.serv__hours} ${s.hours}`}>
                <div className={s.hours__body}>
                    <h3 className={s.hours__suptitle}>TIME</h3>
                    <h2 className={s.hours__title}>Working Hours</h2>
                    <p className={s.hours__subtitle}>Sunday
                        To Friday 9.00 am - 10.00 pm
                        Saturday Closed</p>
                </div>
            </section>
            <article className={s.doctors}>
                <div className={s.container}>
                    <div className={s.doctors__header}>
                        <p className={s.crew}>
                            <span className={s.team}>Team</span><br/>The Doctorate Crew
                        </p>
                        <Button text={"View All Doctors"}/>
                    </div>
                    <div className={s.doctors__body}>
                        {doctors.map(doc => {
                            return <div className={s.card}>
                                <DoctorCard id={doc.id} picture={doc.picture}
                                            name={doc.name} profession={doc.profession}
                                            insta={doc.insta} facebook={doc.facebook}
                                            twitter={doc.twitter}/>
                            </div>

                        })}
                    </div>
                    <hr/>
                    <div className={s.doctors__footer}>
                        <p><span>25</span> <br/> Years  Experience</p>
                        <p><span>893</span><br/> Medicament  Invented</p>
                        <p><span>75</span><br/> Awards  Won</p>
                        <p><span>673 k</span><br/> Happy  Clients</p>
                        <p><span>751</span><br/> Pharmacies  Partners</p>
                    </div>
                </div>

            </article>
        </div>
    );
};

export default Services;