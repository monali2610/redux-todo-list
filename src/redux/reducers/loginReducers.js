import { LOGIN } from "../constant";

const initialState = {
  user: {},
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducers;
