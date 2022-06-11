import React, { useEffect, useState } from "react";
import AddTodo from "../../components/addTodo";
import ToDo from "../../components/todo";
import "./ToDoList.scss";
import { connect } from "react-redux";
import { completedTodosList } from "../../redux/actions";
import { Button } from "react-bootstrap";

const ToDoList = ({ todoList, completedList, completedTodosList }) => {
  const [isCompletedList, setCompletedList] = useState(false);

  const handleClick = () => {
    completedTodosList();
    setCompletedList(true);
  };
  useEffect(() => {}, [todoList]);
  return (
    <div className="to-do-list">
      <AddTodo />
      <div>
        <Button
          onClick={() => setCompletedList(false)}
          className={!isCompletedList ? "selected-button" : "button"}
        >
          All List
        </Button>
        <Button
          onClick={() => handleClick()}
          className={isCompletedList ? "selected-button" : "button"}
        >
          Completed List
        </Button>
      </div>
      <div className="todos-list">
        {!isCompletedList ? (
          <>
            {todoList && todoList.length
              ? todoList.map((todo) => {
                  return (
                    <ToDo
                      key={`todo-${todo.id}`}
                      todo={todo}
                      isCompletedList={false}
                    />
                  );
                })
              : "No todos."}
          </>
        ) : (
          <>
            {completedList && completedList.length
              ? completedList.map((todo) => {
                  return (
                    <ToDo
                      key={`todo-${todo.id}`}
                      todo={todo}
                      isCompletedList={true}
                    />
                  );
                })
              : "No completed todos."}
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todos.todoList,
  completedList: state.todos.completedList,
});
export default connect(mapStateToProps, { completedTodosList })(ToDoList);
