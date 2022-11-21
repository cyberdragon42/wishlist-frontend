export const urls={
    getAllCategoriesUrl: ()=>{
        return "https://localhost:7270/api/Categories/GetAllCategories";
    },
    deleteCategoryUrl: (id)=>{
        return "https://localhost:7270/api/Categories/Delete/"+id;
    },

    categoryDetailsUrl: (id)=>{
        return "https://localhost:7270/api/Categories/GetCategory/"+id;
    },

    createCategoryUrl: ()=>{
        return "https://localhost:7270/api/Categories/Create";
    },

    getAllCurrenciesUrl: ()=>{
        return "https://localhost:7270/api/Currency/GetAllCurrencies";
    },

    editCategoryUrl: ()=>{
        return "https://localhost:7270/api/Categories/Edit";
    }
}