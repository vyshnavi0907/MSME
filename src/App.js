import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Main from "./components/Main"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/app" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
