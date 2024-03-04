import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import SignUp from "./components/signup/SignUp";
import SignIn from './components/signin/SignIn';  
import TaskPage from "./components/task/TaskPage";

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={showSignIn ? <SignIn /> : <SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/task-page" element={<TaskPage />} />
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
