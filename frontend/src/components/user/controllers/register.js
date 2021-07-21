import axios from "axios";

export const register = async (username, email, password) => {
  try {
    const response = await axios.post("users/register", {
      username,
      email,
      password,
    });

    return true;
    // Response to success, update state and page routing
  } catch (error) {
    console.log("There was an error: ", error.response.data.errors);

    // Response to error in state and page routing
    return false;
  }
};
