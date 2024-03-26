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
    { id: 1, text: "Listen a person", date: "03/27/2024, 02:46:39 AM" },
    { id: 2, text: "Read a book", date: "08/11/2022, 09:32:39 PM" },
    { id: 3, text: "Climb a book", date: "02/12/2020, 02:40:39 AM" },
    { id: 4, text: "Walk 1km", date: "09/11/2020, 03:21:39 PM" },
    { id: 5, text: "Ride a bicycle", date: "01/01/2019, 05:51:39 AM" },
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
      return;
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

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
