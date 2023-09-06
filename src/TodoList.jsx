import List from "@mui/material/List";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const initialTodos = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  else return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodos = (id) => {
    setTodos((prev) => prev.filter((t) => t.id != id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      })
    );
  };

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: text, completed: false },
    ]);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            removeTodos={() => removeTodos(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
