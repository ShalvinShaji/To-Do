import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../css/AddTodo.css";

function EditTodoModal({ show, handleClose, todo, handleUpdateTodo }) {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    handleUpdateTodo(updatedTodo);
    handleClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUpdate();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          className="edit-todo mb-3"
          type="text"
          placeholder="Enter updated todo text"
          name="text"
          value={updatedTodo.text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Form.Control
          type="text"
          className="edit-todo"
          placeholder="Enter updated todo date"
          name="date"
          value={updatedTodo.date}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="modalClosebtn" onClick={handleClose}>
          Close
        </Button>
        <Button className="modalAddBtn" onClick={handleUpdate}>
          Update Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodoModal;
