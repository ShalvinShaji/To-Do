import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import SearchTodo from "./components/SearchTodo";

function App() {
  return (
    <>
      <Topbar />
      <SearchTodo />
    </>
  );
}

export default App;
