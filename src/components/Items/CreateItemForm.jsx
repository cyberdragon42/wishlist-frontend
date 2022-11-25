import React,{ useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {urls} from "../../utils/urls"
import axios from 'axios'

function CreateItemForm(props){
    let [categories, setCategories] = useState([]);
    let [currencies, setCurrencies] = useState([]);
    let [values, setValues] = useState({
        name:"",
        description:"",
        imageLink:"",
        price:0,
        currencyCode:"",
        categoryName:""
    });

    useEffect(() => {
        axios.get(urls.getAllCategoriesUrl())
        .then(response=>{
            setCategories(response.data);
        })

        axios.get(urls.getAllCurrenciesUrl())
        .then(response=>{
            setCurrencies(response.data);
        })
        
    }, [])

    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCreate=(payload)=>{
        debugger;
        axios.post(urls.createItemUrl(), payload)
            .then(response => {
                props.handleGet();
            })
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        var payload= {
            name: values.name,
            description: values.description,
            imageLink: values.imageLink,
            price: values.price,
            currencyId: currencies.find(c=>c.code===values.currencyCode).id,
            categoryId: categories.find(c=>c.name===values.categoryName).id
        }
        handleCreate(payload);
        props.handleClose();
    }
    return(
        <>
            <Form onSubmit={onHandleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter item name">
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3}
                    value={values.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Enter description">
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="imageLink">
                <Form.Label>Picture link:</Form.Label>
                <Form.Control type="text"
                    value={values.link}
                    onChange={handleChange}
                    name="imageLink"
                    placeholder="Enter picture link">
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="number"
                    value={values.price}
                    onChange={handleChange}
                    name="price"
                    placeholder="Enter price">
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="currencyCode">
                <Form.Select aria-label="Currency"
                    name="currencyCode"
                    value={values.currency}
                    onChange={handleChange}>
                    {currencies.map(c=>{
                        return <option>{c.code}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="categoryName">
                <Form.Label>Category:</Form.Label>
                <Form.Select aria-label="category"
                    name="categoryName"
                    value={values.category}
                    onChange={handleChange}>
                    {categories.map(c=>{
                        return <option>{c.name}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

export default CreateItemForm;