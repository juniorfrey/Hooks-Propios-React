import React from 'react'
import useTodos from './hooks/useTodos';


const initialTodos = [
  { id: 1, title: "Learn React js" },
  { id: 2, title: "Learn Node js" },
];

const TodoApp = () => {

    //const [todos, setTodos] = useState(initialTodos)
    const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        <button onClick={() => addTodo({ title: "Nueva tarea" })}>Add</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TodoApp
