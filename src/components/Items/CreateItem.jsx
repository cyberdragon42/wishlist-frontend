import React, { useState, useEffect } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Spinner from "react-bootstrap/Spinner";

import ItemForm from "./ItemForm";
import { urls } from "../../utils/urls"
import { wishlistApi } from "../../utils/wishlistApi";

function CreateItem(props) {
    let [categories, setCategories] = useState(props.categories);
    let [currencies, setCurrencies] = useState(props.currencies);
    let values = {
        name: "",
        description: "",
        imageLink: "",
        price: 0,
        currencyCode: "",
        categoryName: ""
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        wishlistApi.getAllCategories()
            .then(response => {
                setCategories(response.data);
            })

        axios.get(urls.getAllCurrenciesUrl())
            .then(response => {
                setCurrencies(response.data);
            })

    }, [])

    const handleSubmit = (values) => {
        var payload = {
            name: values.name,
            description: values.description,
            imageLink: values.imageLink,
            price: values.price,
            currencyId: currencies.find(c => c.code === values.currencyCode).id,
            categoryId: categories.find(c => c.name === values.categoryName).id
        }

        wishlistApi.createItem(payload)
            .then(response => {

            })
        handleClose();
    }

    if (categories === null || currencies === null) {
        return <Spinner />
    }
    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Create Item
            </Button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new item to wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemForm
                        handleSubmit={handleSubmit}
                        categories={categories}
                        currencies={currencies}
                        values={values} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateItem;