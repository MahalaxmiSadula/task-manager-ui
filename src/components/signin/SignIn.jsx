import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("signin clicked");
    const signUpData = {
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      console.log("data11111", response);
      if (!response?.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response?.json();
      console.log("Data", data);
      console.log("response.data", data.token);
      // Save the token to local storage
      localStorage.setItem("token", data.token);

      // If the request is successful, navigate to the TaskPage
      navigate("/task-page");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
        <button>{"Don't have an account? Sign Up"}</button>
      </div>
    </>
  );
};

export default SignIn;
