import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchTodo from "./components/SearchTodo";
import Topbar from "./components/Topbar";
import TodoList from "./components/TodoList";
import Button from "react-bootstrap/Button";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Listen music", date: "March 27, 11:52 PM" },
    { id: 2, text: "Read a book", date: "March 28, 09:00 AM" },
    { id: 2, text: "Read 2 book", date: "March 28, 02:00 AM" },
    { id: 3, text: "Walk 1km", date: "March 29, 03:30 PM" },
    { id: 3, text: "Walk 5km", date: "March 29, 04:30 PM" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleAddTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Topbar />
      <div className="search-add d-flex align-items-center justify-content-center">
        <SearchTodo onSearch={setSearchQuery} />
        <Button
          variant="primary"
          className="addTodoBtn ms-2"
          onClick={handleShowAddModal}
        >
          Add Todo
        </Button>
        <AddTodo
          show={showAddModal}
          handleClose={handleCloseAddModal}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <TodoList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
