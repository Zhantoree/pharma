const initialState = {
    footer : {
        dropdown: {
            items: [
                {
                    title: "Explore",
                    elements: ['Home','Services','About us','Testimonials','News'],
                    icon: "/src/assets/Icons/DropDown.svg"
                },
                {
                    title: "Utility Pages",
                    elements: ['Style Guide','Changelog','Licenses','Protected Page','404 Page'],
                    icon: "/src/assets/Icons/DropDown.svg"

                },


            ]
        }
    }
}

export let utilReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return state;
        default:
            return state;
    }
}