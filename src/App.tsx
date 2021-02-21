import React, { useState } from "react";
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

interface TodoType {
  id: number;
  todos: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const addTodo = (text: string) => {
  setTodos(prevState => [...prevState, {id: Math.random(), todos: text}])
  }

  const deleteTodo = (todoId: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId))
  }

  return (
    <>
      <NewTodo onAdd={addTodo} />
      <TodoList items={todos} onDelete={deleteTodo}/>
    </>
  );
};

export default App;
