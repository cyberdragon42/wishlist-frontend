import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

import { setCategoriesAC } from '../redux/categoriesReducer'
import CreateCategory from "./CreateCategory"

let url = "https://localhost:7270/api/Categories/GetAllCategories";

function CategoriesPage(props) {
    useEffect(() => {
        axios.get(url)
            .then(response => {
                props.setCategories(response.data);
            })
    }, [])
    if (props.categories.length < 1) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <CreateCategory />
            <h3>All categories:</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map(x => {
                            return <tr>
                                <td>{x.name}</td>
                                <td>
                                    <Badge bg="warning">
                                        <NavLink className={"custom-navlink-dark"}
                                            to={`/categories/details/${x.id}`}>
                                            Details
                                        </NavLink>
                                    </Badge>
                                    <Badge bg="danger">
                                        <NavLink className={"custom-navlink-dark"}
                                            to={`/categories/edit/${x.id}`}>
                                            Edit
                                        </NavLink>
                                    </Badge>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCategories: (categories) => {
            dispatch(setCategoriesAC(categories));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
