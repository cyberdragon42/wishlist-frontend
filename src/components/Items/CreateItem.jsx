import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CreateItemForm from "./CreateItemForm";
import {urls} from "../../utils/urls"

function CreateItem(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Create Item
            </Button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new item to wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateItemForm
                        handleGet={props.handleGet}
                        handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateItem;