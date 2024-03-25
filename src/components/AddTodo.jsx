// AddTodoModal.jsx
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../css/AddTodo.css";

function AddTodo({ show, handleClose, handleAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAdd = () => {
    handleAddTodo(todoText);
    setTodoText("");
    handleClose();
  };

  return (
    <Modal className="addtodo-modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className="dark-input-addtodo"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Add todo your list..."
          value={todoText}
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modalClosebtn"
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button className="modalAddBtn" variant="primary" onClick={handleAdd}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTodo;
