import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        name="todo"
        value={props.value}
        onChange={props.handleChanges}
        placeholder="...todo"
      />
      <button>Submit To-Do</button>
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </form>
  );
}

export default TodoForm;
