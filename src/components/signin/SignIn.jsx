import React, { useState } from "react";
import axios from "axios";
import SignUp from "../signup/SignUp";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });

      // Save the token to local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to the home page
      window.location.href = "/";
    } catch (error) {
      // Handle error
      console.error(error);
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
      </div>
    </>
  );
};

export default SignIn;
