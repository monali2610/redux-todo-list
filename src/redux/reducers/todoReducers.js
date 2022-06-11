import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  COMPLETED_TODO_LIST,
} from "../constant";

const initialState = {
  todoList: [],
  completedList: [],
};

const ToDoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            completed: false,
            id: action.payload.id,
            todo: action.payload.todo,
          },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === action.payload.id
            ? Object.assign({}, todo, {
                completed: !todo.completed,
              })
            : todo;
        }),
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              todo: action.payload.todo,
            };
          }
          return todo;
        }),
      };
    }
    case COMPLETED_TODO_LIST: {
      return {
        ...state,
        completedList: state.todoList.filter((todo) => {
          return todo.completed === true;
        }),
      };
    }

    default:
      return state;
  }
};
export default ToDoReducers;
