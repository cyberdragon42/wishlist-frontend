import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom";
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'

import { urls } from "../../helpers/urls"

function CategoryDetails() {
    let params = useParams();
    let [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get(urls.categoryDetailsUrl(params.id))
            .then(response => {
                setCategory(response.data);
            })
    }, [])

    if (category === null) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Container>
                <Badge bg="warning">
                    <NavLink className={"custom-navlink-dark"}
                        to={`/categories`}>
                        Back
                    </NavLink>
                </Badge>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>{category.description}</Card.Text>
                </Card>
            </Container>
        </div>
    )
}

export default CategoryDetails;