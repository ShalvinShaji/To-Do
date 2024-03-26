import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../css/AddTodo.css";

function DeleteTodoModal({ show, handleClose, todo, handleDeleteTodo }) {
  const handleDelete = () => {
    handleDeleteTodo(todo.id);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to delete this todo?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className="modalClosebtn" onClick={handleClose}>
          Close
        </Button>
        <Button className="modalAddBtn" onClick={handleDelete}>
          Delete Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteTodoModal;
