import axios from "axios";

export const login = async (email, password) => {
  try {
    // POST request to server with email and password
    const response = await axios.post("users/login", { email, password });

    // Response.data captures the res.send coming from the server
    return response.data;
  } catch (error) {
    console.log("There was an error: ", error.response.data.errors);

    // Response to error in state and page routing
    return false;
  }
};
