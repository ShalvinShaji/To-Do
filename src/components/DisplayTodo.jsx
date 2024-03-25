import React from "react";
import "../css/DisplayTodo.css";
import { Button } from "react-bootstrap";

function DisplayTodo({ todo }) {
  return (
    <>
      <>
        <div className=" d-flex justify-content-center align-items-center mb-2">
          <div className="todo-item d-flex justify-content-between align-items-center p-2">
            <p className="m-0 p-0">{todo.text}</p>
          </div>
          <div className="todo-time d-flex justify-content-center align-items-center p-2">
            <p className="m-0 p-0">{todo.date}</p>
          </div>
          <Button className="editTodoBtn ms-2">
            <p className="p-0 m-0">Edit Todo</p>
          </Button>
          <Button className="editTodoBtn ms-2">
            <p className="p-0 m-0">Delete Todo</p>
          </Button>
          <Button className="editTodoBtn ms-2">
            <p className="p-0 m-0">Mark Completed</p>
          </Button>
        </div>
      </>
    </>
  );
}

export default DisplayTodo;
