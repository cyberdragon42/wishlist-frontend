const SET_ITEMS = "SET_ITEMS";
let initialState = {
    items: [
    ],
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            let stateCopy = { ...state };
            stateCopy.items = action.items;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setItemsAC = (items) => {
    return { type: SET_ITEMS, items }
}

export default itemsReducer;
