import axios from "axios"
import { urls } from "./urls";

export const wishlistApi = {
    getAllCategories: () => {
        return axios.get(urls.getAllCategoriesUrl());
    },

    createCategory: (values) => {
        return axios.post(urls.createCategoryUrl(), values);
    },

    deleteCategory: (id) => {
        return axios.delete(urls.deleteCategoryUrl(id));
    },

    getCategory: (id) => {
        return axios.get(urls.categoryDetailsUrl(id));
    },

    editCategory: (values) => {
        return axios.put(urls.editCategoryUrl(), values);
    },

    createItem: (values) => {
        return axios.post(urls.createItemUrl(), values)
    },

    getAllItems: () => {
        return axios.get(urls.getAllItemsUrl());
    },

    getItem: (id) => {
        return axios.get(urls.getItemUrl((id)));
    },

    editItem: (values) => {
        return axios.put(urls.editItemUrl(), values);
    },

    deleteItem: (id) => {
        return axios.delete(urls.deleteItemUrl(id));
    }

}