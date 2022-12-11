import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function CategoryForm(props) {
    const [values, setValues] = useState(props.values);
    const [errors, setErrors] = useState({});

    const onHandleSubmit = (event) => {
        event.preventDefault();
        if (validate(values)) {
            props.handleSubmit(values);
        }
    }

    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
        let errors = {};

        if (!values.name) {
            errors.name = "Category name is required";
        } else if (values.name.length > 100) {
            errors.name = "Name is too long";
        }

        if (values.description.length > 100) {
            errors.description = "Description is too long";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Form onSubmit={onHandleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text"
                    name="name"
                    placeholder="Enter category name"
                    value={values.name}
                    onChange={handleChange}></Form.Control>
                {errors.name && (
                    <p className="text-danger">{errors.name}</p>
                )}
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3}
                    name="description"
                    placeholder="Enter description"
                    value={values.description}
                    onChange={handleChange}></Form.Control>
                {errors.description && (
                    <p className="text-danger">{errors.description}</p>
                )}
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CategoryForm;