const SET_CATEGORIES="SET_CATEGORIES";
let initialState={
    categories: [
        {name: "food", description: "foodproducts", id:1},
        {name: "tech", description: "tech products", id:2},
    ],
}

const categoriesReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_CATEGORIES:{
            let stateCopy={...state};
            stateCopy.categories = action.categories;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setCategoriesAC=(categories)=>{
    return {type: SET_CATEGORIES, categories}
}

export default categoriesReducer;
