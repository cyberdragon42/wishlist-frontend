import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

import { setCategoriesAC, deleteCategoryAC, addCategoryAC } from '../../redux/categoriesReducer'
import CreateCategory from "./CreateCategory"

import DeleteComponent from "../reusable/DeleteComponent";
import { wishlistApi } from "../../utils/wishlistApi"

function CategoriesPage(props) {
    useEffect(() => {
        wishlistApi.getAllCategories()
            .then(response => {
                props.setCategories(response.data);
            })
    }, [])

    const handleDelete = (id) => {
        wishlistApi.deleteCategory(id)
            .then(response => {
                props.deleteCategory(id);
            })
    }

    const handleCreate = (values) => {
        wishlistApi.createCategory(values)
            .then(response => {

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
                                    <DeleteComponent
                                        id={x.id}
                                        handleDelete={handleDelete}
                                        placement="right"
                                        subject="category"
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
