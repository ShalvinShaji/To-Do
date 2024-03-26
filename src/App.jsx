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
    { id: 1, text: "Listen a person", date: new Date().toLocaleString() },
    { id: 2, text: "Read a book", date: new Date().toLocaleString() },
    { id: 3, text: "Climb a book", date: new Date().toLocaleString() },
    { id: 4, text: "Walk 1km", date: new Date().toLocaleString() },
    { id: 5, text: "Ride a bicycle", date: new Date().toLocaleString() },
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
    if (!text) {
      return; // If text is null or empty, do not add a new todo
    }

    const newTodo = {
      id: todos.length + 1,
      text: text,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Topbar />
      <div className="search-add d-flex align-items-center justify-content-center">
        <SearchTodo onSearch={setSearchQuery} />
        <Button className="addTodoBtn ms-2" onClick={handleShowAddModal}>
          Add Todo
        </Button>
        <AddTodo
          show={showAddModal}
          handleClose={handleCloseAddModal}
          handleAddTodo={handleAddTodo}
        />
      </div>

      <TodoList
        searchQuery={searchQuery}
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
