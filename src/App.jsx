import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <TodoList />
    </>
  );
}

export default App;
