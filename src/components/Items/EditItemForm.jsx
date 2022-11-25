import React,{useState, useEffect} from 'react'
import { useParams, NavLink } from "react-router-dom";
import {urls} from "../../utils/urls"
import axios from 'axios';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Spinner } from 'react-bootstrap';

function CreateItemForm(props){
    let params = useParams();
    let [categories, setCategories] = useState([]);
    let [currencies, setCurrencies] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(urls.getAllCategoriesUrl())
        .then(response=>{
            setCategories(response.data);
        })

        axios.get(urls.getAllCurrenciesUrl())
        .then(response=>{
            setCurrencies(response.data);
        })

        axios.get(urls.getItemUrl((params.id)))
        .then(response=>{
            setValues(response.data);
            setIsLoaded(true);
        })

    }, [])

    let [values, setValues] = useState({
        name:"",
        description:"",
        imageLink:"",
        price:0,
        currencyName:"",
        categoryId:"",
        currencyId:"",
        categoryName:""
    });

    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const handleEdit=(payload)=>{
        axios.put(urls.editItemUrl(), payload)
            .then(response => {
                debugger;
               //props.handleGet();
            })
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        handleEdit(values);
    }

    if(!isLoaded){
        return <Spinner />
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
                    value={values.currencyName}
                    onChange={handleChange}>
                    {currencies.map(c=>{
                        if(c.id===values.currencyId)
                            return <option selected>{c.code}</option>
                        else
                            return <option>{c.code}</option>
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="categoryName">
                <Form.Label>Category:</Form.Label>
                <Form.Select aria-label="category"
                    name="categoryName"
                    value={values.categoryName}
                    onChange={handleChange}>
                    {categories.map(c=>{
                        if(c.id===values.categoryId)
                            return <option selected>{c.name}</option>
                        else
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