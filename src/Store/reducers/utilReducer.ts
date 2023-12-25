import {createSlice} from "@reduxjs/toolkit";
import Dropdown from '../../assets/Icons/DropDown.svg'

const initialState = {
    footer : {
        dropdown: {
            items: [
                {
                    title: "Explore",
                    id: 0,
                    elements: ['Home','Services','About us','Testimonials','News'],
                    icon: Dropdown
                },
                {
                    title: "Utility Pages",
                    id: 1,
                    elements: ['Style Guide','Changelog','Licenses','Protected Page','404 Page'],
                    icon: Dropdown

                },


            ]
        }
    }
}

export const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        getItems(state) {
            return state
        }
    }
})

// export let utilReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_ITEMS":
//             return state;
//         default:
//             return state;
//     }
// }