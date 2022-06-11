import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { removeTodos, updateTodos, completeTodos } from "../../redux/actions";
import "./ToDo.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

const ToDo = ({
  todo,
  removeTodos,
  isCompletedList,
  completeTodos,
  updateTodos,
}) => {
  const handleDeleteClick = (todo) => {
    removeTodos(todo.id);
  };
  const handleEditClick = (todo) => {
    const updateTodo = prompt("Please enter todo");
    updateTodos({ id: todo.id, todo: updateTodo, completed: todo.completed });
  };
  const handleCompletedClick = (todo) => {
    completeTodos(todo.id);
  };

  return (
    <div className="todo-item">
      <span className="todo-title">
        {todo.id}.{" \t"}
        {todo.todo}
      </span>
      {!isCompletedList && (
        <>
          <Button
            onClick={() => handleCompletedClick(todo)}
            className={
              !todo.completed ? "completed-button" : "unCompleted-button"
            }
          >
            {todo.completed ? <AiFillCloseCircle /> : <FaCheckCircle />}
          </Button>
          <Button onClick={() => handleEditClick(todo)} className="edit-button">
            <FaEdit />
          </Button>
          <Button
            onClick={() => handleDeleteClick(todo)}
            className="delete-button"
          >
            <FaTrash />
          </Button>
        </>
      )}
    </div>
  );
};

export default connect(null, { removeTodos, completeTodos, updateTodos })(ToDo);
