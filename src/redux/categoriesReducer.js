const SET_CATEGORIES = "SET_CATEGORIES";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";


let initialState = {
    categories: [
    ],
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            let stateCopy = { ...state };
            stateCopy.categories = action.categories;
            return stateCopy;
        }

        case DELETE_CATEGORY: {
            var filtered = state.categories.filter((c) => {
                return c.id !== action.id
            });

            let stateCopy = { ...state, categories: filtered }
            return stateCopy
        }

        case ADD_CATEGORY: {
            var newArr = state.categories;
            newArr.push(action.category);
            let stateCopy = { ...state, categories: newArr }
            return stateCopy;
        }

        default:
            return state;
    }
}

export const setCategoriesAC = (categories) => {
    return { type: SET_CATEGORIES, categories }
}

export const deleteCategoryAC = (id) => {
    return { type: DELETE_CATEGORY, id }
}

export const addCategoryAC = (category) => {
    return { type: ADD_CATEGORY, category }
}

export default categoriesReducer;
