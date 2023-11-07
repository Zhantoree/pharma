interface Doctor {
    name: string,
    profession: string,
}

export interface Feedback {
    name: string,
    profession: string,
    rating: number,
    text: string,
}

export interface Card {
    icon: string,
    id: number,
    title: string,
    text: string
}

export interface Form {
    name: string | undefined;
    email: string,
    phone: string,
    subject: string,
    message: string

}

export interface HomeState {
    doctors: Doctor[],
    feedbacks: Feedback[],
    cards: Card[]
}

export enum homeActionTypes {
    ADD_FEEDBACK = "ADD_FEEDBACK",
}

interface AddFeedbackAction {
    type: homeActionTypes.ADD_FEEDBACK
    payload: {
        name: string,
        profession: string,
        text: string,
        rating: number
    };
}


export type HomeAction = AddFeedbackAction


