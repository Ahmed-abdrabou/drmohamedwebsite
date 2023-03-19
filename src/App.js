import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import { Navbar } from "./components";
import { Footer } from "./components";

import "./App.css";

const App = () => (
  <div className="app">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
