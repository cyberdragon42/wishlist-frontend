import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CategoryForm from "./CategoryForm";

function CreateCategory(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Create new
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CategoryForm
                        handleSubmit={(values) => {
                            props.handleCreate(values);
                            handleClose();
                        }}
                        values={{ description: "", name: "" }}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateCategory;

