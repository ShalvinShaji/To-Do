import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../css/SearchTodo.css";

function SearchTodo() {
  return (
    <>
      <div className="searchtodo my-5 p-2 d-flex justify-content-center align-items-center">
        <InputGroup className=" searchbar">
          <Form.Control
            className="dark-input"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search todo from your list..."
          />
        </InputGroup>
        <Button variant="primary" className="addTodoBtn ms-2">
          Add ToDo
        </Button>
      </div>
    </>
  );
}

export default SearchTodo;
