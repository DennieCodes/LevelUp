import { Redirect } from "react-router-dom";
import axios from "axios";

export const register = async (username, email, password) => {
  try {
    const res = await axios.post("users/register", {
      username,
      email,
      password,
    });
    console.log(`Response Data: ${res.data}`);

    // const res = await api.post("/users", formData);

    // <Redirect to="/login" />;
    return true;
    // Response to success, update state and page routing
  } catch (error) {
    console.log(error.response.data.errors);

    // Response to error in state and page routing
    return false;
  }
};
