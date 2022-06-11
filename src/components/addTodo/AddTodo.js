import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";
import "./AddTodo.scss";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const updateInput = (input) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="add-todo">
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo-button" onClick={() => handleAddTodo()}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
