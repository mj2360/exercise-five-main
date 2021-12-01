import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateUser from "./pages/CreateUser";
import React from "react";

import "./App.css";

import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    //brackets wrap the application ---> short hand for a React.fragment
    //better than wrapping in a div
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
