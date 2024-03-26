// DisplayTodo.jsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EditTodoModal from "../components/EditTodo";
import "../css/DisplayTodo.css";

function DisplayTodo({ todo, handleUpdateTodo }) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <div
        id={todo.id}
        className="d-flex justify-content-center align-items-center mb-2"
      >
        <div className="todo-item d-flex justify-content-between align-items-center p-2">
          <p className="m-0 p-0">{todo.text}</p>
        </div>
        <div className="todo-time d-flex justify-content-center align-items-center p-2">
          <p className="m-0 p-0">{todo.date}</p>
        </div>
        <Button className="editTodoBtn ms-2" onClick={handleShowEditModal}>
          <p className="p-0 m-0">Edit Todo</p>
        </Button>
        {/* Add Delete Todo and Mark Completed buttons here */}
      </div>
      <EditTodoModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </>
  );
}

export default DisplayTodo;
