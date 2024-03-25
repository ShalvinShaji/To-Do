// TodoList.jsx
import { React, useEffect } from "react";
import DisplayTodo from "./DisplayTodo";

function TodoList({ searchQuery }) {
  const todos = [
    { id: 1, text: "Listen music", date: "March 27, 11:52 PM" },
    { id: 6, text: "Read a book", date: "March 28, 09:00 AM" },
    { id: 2, text: "Read 2 book", date: "March 28, 02:00 AM" },
    { id: 5, text: "Walk 1km", date: "March 29, 03:30 PM" },
    { id: 3, text: "Walk 5km", date: "March 29, 04:30 PM" },
  ];

  const filteredTodos = searchQuery
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todos;

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <DisplayTodo key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center">No matches found.</p>
      )}
    </div>
  );
}

export default TodoList;
