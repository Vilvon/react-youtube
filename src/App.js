import React from "react";
import TodoList from "./todo/toDoList";
import MyContext from "./context";
import AddTodo from "./AddTodo";
function App() {
  
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: "Купить хлеб",
    },
    {
      id: 2,
      completed: false,
      title: "Купить масло",
    },
    {
      id: 3,
      completed: false,
      title: "Купить молоко",
    },
  ]);

  function addTodo(title){
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false
    }]))
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <MyContext.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React trainee</h1>
        <AddTodo onCreate = {addTodo}/>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!!!</p>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
