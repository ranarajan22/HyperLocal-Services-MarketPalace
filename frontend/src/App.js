// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import HomePage from "./pages/HomePage";   // ✅ Capital P
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";   // ✅ Correct import path

// Auth Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} /> {/* ✅ About Route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
