// TodoList.jsx
import { React, useEffect } from "react";
import DisplayTodo from "./DisplayTodo";

function TodoList({ searchQuery, todos, handleUpdateTodo, handleDeleteTodo }) {
  const filteredTodos = searchQuery
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todos;

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <DisplayTodo
            key={todo.id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <p className="text-center">No matches found.</p>
      )}
    </div>
  );
}

export default TodoList;
