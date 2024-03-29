import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditTodoModal from "../components/EditTodo";
import DeleteTodoModal from "../components/DeleteTodo";
import "../css/DisplayTodo.css";

function DisplayTodo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleMarkComplete = () => {
    setCompleted(true);
  };

  return (
    <>
      <div
        id={todo.id}
        className="d-flex justify-content-center align-items-center mb-2"
      >
        <div
          className={`d-flex justify-content-between align-items-center ${
            completed ? "completed" : "todo-data"
          }`}
        >
          <div className=" d-flex justify-content-between align-items-center p-2">
            <p className="m-0 p-0 todo-text">{todo.text}</p>
          </div>
          <div className="todo-time d-flex justify-content-center align-items-center p-2">
            <p className="m-0 p-0">{todo.date}</p>
          </div>
        </div>
        <Button className="editTodoBtn ms-2" onClick={handleShowEditModal}>
          <p className="p-0 m-0">Edit Todo</p>
        </Button>
        <Button className="editTodoBtn ms-2" onClick={handleShowDeleteModal}>
          <p className="p-0 m-0">Delete Todo</p>
        </Button>
        <Button className="editTodoBtn ms-2" onClick={handleMarkComplete}>
          <p className="p-0 m-0">Mark Completed</p>
        </Button>
      </div>
      <EditTodoModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
      />
      <DeleteTodoModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default DisplayTodo;
