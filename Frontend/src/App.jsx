import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Components/Courses.jsx";
import { Toaster } from "react-hot-toast";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
