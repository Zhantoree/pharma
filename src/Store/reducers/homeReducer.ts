import Angi from '../../assets/Icons/Angi.svg'
import Brain from '../../assets/Icons/Brain.svg'
import Cardi from '../../assets/Icons/Cardi.svg'
import Dent from '../../assets/Icons/Dent.svg'
import Eye from '../../assets/Icons/Eye.svg'
import Orth from '../../assets/Icons/Orth.svg'
import {Feedback, HomeAction, homeActionTypes, HomeState} from "./../../types/home";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: HomeState = {
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
            rating: 5
        }, {
            name: "Vanseena Adams",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: 5
        }, {
            name: "Mark Brown",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: 5
        }, {
            name: "Vanseena Adams",
            profession: "Dental Patient",
            text: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
            rating: 5
        }

    ],
    cards: [
        {
            id: 0,
            icon: Angi,
            title: "Angioplasty",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 1,
            icon: Cardi,
            title: "Cardiology",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 2,
            icon: Dent,
            title: "Dental",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 3,
            icon: Dent,
            title: "Dental",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 4,
            icon: Eye,
            title: "Eye Care",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 5,
            icon: Eye,
            title: "Eye Care",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 6,
            icon: Brain,
            title: "Endocrinology",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },
        {
            id: 7,
            icon: Orth,
            title: "Orthopaedics",
            text: "Our team of highl professionals uses the latest heal echnologies health quickly and easily."
        },

    ]
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        sendFeedback: (state, action: PayloadAction<Feedback>) => {
            state.feedbacks.push({
                name: action.payload.name,
                profession: action.payload.profession,
                text: action.payload.text,
                rating: action.payload.rating
            })
        }
    }

})

export const homeReducer = (state: HomeState = initialState, action: HomeAction): HomeState => {

    switch (action.type) {
        case homeActionTypes.ADD_FEEDBACK:
            return {...state,
                feedbacks: [...state.feedbacks, {
                    name: action.payload.name,
                    profession: action.payload.profession,
                    text: action.payload.text,
                    rating: action.payload.rating
                }]
            }
        default:
            return state;
    }
}