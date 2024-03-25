// SearchTodo.jsx
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/SearchTodo.css";

function SearchTodo({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value); // Call onSearch for every keystroke
  };

  return (
    <>
      <div className="searchtodo my-5 p-2 d-flex justify-content-center align-items-center">
        <InputGroup className=" searchbar">
          <Form.Control
            className="dark-input"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Search todo from your list..."
            value={searchText}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
    </>
  );
}

export default SearchTodo;
