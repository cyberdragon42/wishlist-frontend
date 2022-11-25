import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { urls } from "../../utils/urls"

function EditCategoryForm(props) {
    let params = useParams();
    const [values, setValues] = useState({
        name: "",
        description: "",
        id: ""
    });

    useEffect(() => {
        axios.get(urls.categoryDetailsUrl(params.id))
            .then(response => {
                setValues(response.data);
            })
    }, [])

    const onHandleSubmit = (event) => {
        event.preventDefault();
        axios.put(urls.editCategoryUrl(), values)
            .then(response => {

            })
    }

    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Form onSubmit={onHandleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text"
                    name="name"
                    placeholder="Enter category name"
                    value={values.name}
                    onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3}
                    name="description"
                    placeholder="Enter description"
                    value={values.description}
                    onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default EditCategoryForm;