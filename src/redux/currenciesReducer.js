const SET_CURRENCIES = "SET_CURRENCIES";
let initialState = {
    currencies: [
    ],
}

const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES: {
            let stateCopy = { ...state };
            stateCopy.currencies = action.currencies;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setCurrenciesAC = (currencies) => {
    return { type: SET_CURRENCIES, currencies }
}

export default currenciesReducer;
