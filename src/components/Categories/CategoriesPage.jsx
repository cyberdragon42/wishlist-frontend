import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

import { setCategoriesAC, deleteCategoryAC, addCategoryAC } from '../../redux/categoriesReducer'
import CreateCategory from "./CreateCategory"
import DeleteCategory from "./DeleteCategory";

import { urls } from "../../helpers/urls"

function CategoriesPage(props) {
    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = () => {
        axios.get(urls.getAllCategoriesUrl())
            .then(response => {
                props.setCategories(response.data);
            })
    }

    const handleDelete = (id) => {
        axios.delete(urls.deleteCategoryUrl(id))
            .then(response => {
                props.deleteCategory(id);
            })
    }

    const handleCreate = (values) => {
        axios.post(urls.createCategoryUrl(), values)
            .then(response => {
                props.addCategory(response.data);
            })
    }

    if (props.categories.length < 1) {
        return <Spinner animation="border" />
    }
    return (
        <div>
            <CreateCategory handleCreate={handleCreate} />
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
                                    <Badge bg="primary">
                                        <NavLink className={"custom-navlink-dark"}
                                            to={`/categories/details/${x.id}`}>
                                            Details
                                        </NavLink>
                                    </Badge>
                                    <Badge bg="warning">
                                        <NavLink className={"custom-navlink-dark"}
                                            to={`/categories/edit/${x.id}`}>
                                            Edit
                                        </NavLink>
                                    </Badge>
                                    <DeleteCategory
                                        id={x.id}
                                        handleDelete={handleDelete}
                                    />
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
        },

        deleteCategory: (id) => {
            dispatch(deleteCategoryAC(id));
        },

        addCategory: (category) => {
            dispatch(addCategoryAC(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
