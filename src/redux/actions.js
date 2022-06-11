import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  COMPLETED_TODO_LIST,
  LOGIN,
} from "./constant";

let nextTodoId = 0;

export const login = (user) => ({ type: LOGIN, payload: { user } });

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    todo,
  },
});
export const updateTodos = (todo) => ({
  type: UPDATE_TODO,
  payload: {
    id: todo.id,
    todo: todo.todo,
    completed: todo.completed,
  },
});

export const completeTodos = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id: id,
  },
});

export const completedTodosList = () => ({
  type: COMPLETED_TODO_LIST,
});

export const removeTodos = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id: id,
  },
});
