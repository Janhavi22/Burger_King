export const getAllBurgersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BURGERS_REQUEST":
      return {
        ...state,
      };
    case "GET_BURGERS_SUCCESS":
      return {
        burger: action.payload,
      };
    case "GET_BURGERS_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
