import axios from "axios";
export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });

  try {
    const response = await axios.get("/api/burgers/getallburgers");
    console.log(response);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};
