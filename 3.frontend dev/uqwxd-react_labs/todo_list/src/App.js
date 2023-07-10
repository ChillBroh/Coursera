import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    if ([todos].length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos]);

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      date: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert("Enter a valid task");
      setTodo("");
    }
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.date !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.date === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          align="right"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter a task"
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => (
        <div
          style={{
            border: "1px solid black",
            margin: "50px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.date)}
          />
          {todo.id === todoEditing ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <div>{todo.text}</div>
          )}
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => deleteToDo(todo.date)}
          >
            Delete
          </button>
          {todo.id === todoEditing ? (
            <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
          ) : (
            <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
          )}
          {todo.completed ? "completed" : "Not yet completed"}
        </div>
      ))}
    </div>
  );
};
export default App;
