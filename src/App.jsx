import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchTodo from "./components/SearchTodo";
import Topbar from "./components/Topbar";
import TodoList from "./components/TodoList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Topbar />
      <SearchTodo onSearch={setSearchQuery} />
      <TodoList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
