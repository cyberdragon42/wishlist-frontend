import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import EditItemForm from "./EditItemForm"
import ItemForm from "./ItemForm";
import { urls } from "../../utils/urls"
import axios from 'axios';
import { Spinner } from "react-bootstrap";
import { wishlistApi } from "../../utils/wishlistApi";

function EditItem(props) {
    let params = useParams();
    let [categories, setCategories] = useState(null);
    let [currencies, setCurrencies] = useState(null);
    let [defaultValues, setDefaultValues] = useState(null);

    let handleSubmit = (values) => {
        wishlistApi.editItem(values)
            .then(response => {

            })
    }

    useEffect(() => {
        wishlistApi.getAllCategories()
            .then(response => {
                setCategories(response.data);
            })

        axios.get(urls.getAllCurrenciesUrl())
            .then(response => {
                setCurrencies(response.data);
            })

        wishlistApi.getItem(params.id)
            .then(response => {
                setDefaultValues(response.data);
            })

    }, [])
    if (categories === null || currencies === null || defaultValues === null) {
        return <Spinner />
    }
    return (
        <div>
            <ItemForm
                categories={categories}
                values={defaultValues}
                handleSubmit={handleSubmit}
                currencies={currencies} />
        </div>
    )
}

export default EditItem;
