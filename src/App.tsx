import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-content";

function App() {


  return (
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
