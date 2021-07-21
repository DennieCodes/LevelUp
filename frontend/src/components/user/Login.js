import { useState } from "react";
import styled from "styled-components";

import { login } from "./controllers/login";

// Component Styling
const StyledSection = styled.section`
  padding: 2em 1em;
`;

const StyledForm = styled.form`
  border: 1px solid black;
  padding: 1em;
  width: 25em;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input`
  margin-bottom: 1em;
  height: 2.25rem;
`;

const StyledButton = styled.button`
  margin: 1.25em auto;
  height: 3.25em;
  width: 10rem;
  font-size: 1.25rem;
`;

// Login Component
const Login = (props) => {
  // Set State for form input control
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // onSubmit handler for form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Redirect to Login upon successful registration or redirec to dashboard
    login(email, password);
    props.history.push("/");

    // NOTE: We will probably want some kind of response so an alert system will be necessary
  };

  // onChange handler for controlled components
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <StyledSection>
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          required
        />

        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          id="password"
          minlength="8"
          onChange={onChange}
          required
        />

        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </StyledSection>
  );
};

export default Login;
