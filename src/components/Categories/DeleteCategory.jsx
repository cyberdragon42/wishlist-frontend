import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";

import { Button, Popover, OverlayTrigger } from "react-bootstrap";

function DeleteCategory(props) {
    let [show, setShow] = useState(false);
    const confirmation = (
        <Popover id="confirm" style={{ width: '18rem' }}>
            <Popover.Header as="h3">Do you really want to delete this category?</Popover.Header>
            <Popover.Body>
                <Button variant="primary" onClick={() => { setShow(false) }}>No</Button>
                <Button variant="danger" onClick={() => {
                    setShow(false);
                    props.handleDelete(props.id)
                }}>Yes</Button>
            </Popover.Body>
        </Popover>
    );
    return (
        <>
            <OverlayTrigger delay={{ show: 250, hide: 400 }}
                trigger="click" show={show}
                placement="right" overlay={confirmation}>
                <Badge bg="danger" className={"custom-navlink-dark"}
                    onClick={() => { setShow(true) }}>
                    Delete
                </Badge>
            </OverlayTrigger>
        </>
    )
}

export default DeleteCategory;