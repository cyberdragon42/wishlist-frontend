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
    },

    createItemUrl: ()=>{
        return "https://localhost:7270/api/Items/Create";
    },

    getAllItemsUrl: ()=>{
        return "https://localhost:7270/api/Items/GetAllItems";
    },

    getItemUrl: (id)=>{
        return "https://localhost:7270/api/Items/GetItem/"+id;
    },

    editItemUrl: ()=>{
        return "https://localhost:7270/api/Items/Edit";
    },

    deleteItemUrl: (id)=>{
        return "https://localhost:7270/api/Items/Delete/"+id;
    }
}