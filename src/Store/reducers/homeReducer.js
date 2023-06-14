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