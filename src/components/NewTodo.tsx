import React, {useRef} from "react";
import './NewTodo.css'

type TodoProps = {
    onAdd: (text: string) => void
}

const NewTodo: React.FC<TodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const textEntered = textInputRef.current!.value
        props.onAdd(textEntered)
        textInputRef.current!.value = ""
    };
  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
