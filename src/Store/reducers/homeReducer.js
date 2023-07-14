import * as path from "path";
import Angi from '../../assets/Icons/Angi.svg'
import Brain from '../../assets/Icons/Brain.svg'
import Cardi from '../../assets/Icons/Cardi.svg'
import Dent from '../../assets/Icons/Dent.svg'
import Eye from '../../assets/Icons/Eye.svg'
import Plus from '../../assets/Icons/+.svg'
import Orth from '../../assets/Icons/Orth.svg'

const initialState = {
    doctors: [
        {
            name: "Vanseena Adams",
            profession: "Dental Patient"
        }, {
            name: "Dr. Helen Wilmore",
            profession: "Dental Patient"
        }, {
            name: "Dr. Kate Winslot",
            profession: "Dental Patient"
        },
    ],
    feedbacks: [
        {
            name: "Robert Davis",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: "5"
        }, {
            name: "Vanseena Adams",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: "5"
        }, {
            name: "Mark Brown",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: "5"
        }, {
            name: "Vanseena Adams",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: "5"
        }

    ],
    cards: [
        {
            id: 0,
            icon: Angi ,
            title: "Angioplasty",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 1,
            icon: Cardi ,
            title: "Cardiology",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 2,
            icon: Dent ,
            title: "Dental",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 3,
            icon: Dent ,
            title: "Dental",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 4,
            icon: Eye ,
            title: "Eye Care",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 5,
            icon: Eye ,
            title: "Eye Care",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 6,
            icon: Brain ,
            title: "Endocrinology",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 7,
            icon: Orth ,
            title: "Orthopaedics",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },

    ]
}

export let homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_FEEDBACK":
            return { ...state, feedbacks: [...state.feedbacks, {name: action.f.name, profession: action.f.profession, text: action.f.text, rating: 5}]}
        default:
            return state;
    }
}