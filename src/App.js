import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import SignUp from "./components/signup/SignUp";
import SignIn from './components/signin/SignIn';  
import TaskPage from "./components/task/TaskPage";

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm=()=>{
    setShowSignUp(!showSignUp);
    setShowSignIn(!showSignIn);
  }

  return (
    <div className="App">
      

      {showSignIn ? <SignIn/>:<SignUp/>}
      <button onClick={toggleForm}>
        {showSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
      {/*<TaskPage/> */}
    </div>
  );
}

export default App;
