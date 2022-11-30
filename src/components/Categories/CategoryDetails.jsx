import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'

import { wishlistApi } from "../../utils/wishlistApi"

function CategoryDetails() {
    let params = useParams();
    let [category, setCategory] = useState(null);

    useEffect(() => {
        wishlistApi.getCategory(params.id)
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