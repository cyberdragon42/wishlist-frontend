import React, {useEffect } from "react";
import CreateItem from "./CreateItem";
import Table from "react-bootstrap/Table"
import { setItemsAC } from "../../redux/itemsReducer"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import DeleteComponent from "../reusable/DeleteComponent";
import { Badge } from "react-bootstrap";
import { wishlistApi } from "../../utils/wishlistApi";

function ItemsPage(props) {
    useEffect(() => {
        handleGet()
    }, [])

    const handleGet = () => {
        wishlistApi.getAllItems()
            .then(response => {
                props.setItems(response.data);
            })
    }

    const handleDelete = (id) => {
        wishlistApi.deleteItem(id)
            .then(response => {
                handleGet();
            });
    }

    return (
        <>
            <CreateItem handleGet={handleGet} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(i => {
                        return <tr>
                            <td>{i.name}</td>
                            <td>{i.description}</td>
                            <td>
                                <img src={i.imageLink} alt="Not found"
                                />
                            </td>
                            <td>
                                {i.categoryName}
                            </td>
                            <td>
                                {i.price + " " + i.currencyCode}
                            </td>
                            <td>
                                <Badge bg="primary">
                                    <NavLink to={`/items/details/${i.id}`}
                                        className={"custom-navlink-dark"}>
                                        Details
                                    </NavLink>
                                </Badge>
                                <Badge bg="warning">
                                    <NavLink to={`/items/edit/${i.id}`}
                                        className={"custom-navlink-dark"}>
                                        Edit
                                    </NavLink>
                                </Badge>
                                <DeleteComponent id={i.id}
                                    handleDelete={handleDelete}
                                    placement="left"
                                    subject="item"
                                />
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => {
            dispatch(setItemsAC(items));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);