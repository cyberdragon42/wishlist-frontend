import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function CreateCategoryForm(props) {
    const [values, setValues] = useState({
        name: "",
        description: "",
    });

    const onHandleSubmit = (event) => {
        event.preventDefault();
        props.handleClose();
        props.handleCreate(values);
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

export default CreateCategoryForm;