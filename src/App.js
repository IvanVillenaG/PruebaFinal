import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Comercios from "./pages/Comercios/Comercios";
import Comercio1 from "./pages/Comercios/Comercio1";
import Comercio2 from "./pages/Comercios/Comercios";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/comercio1" element={<Comercio1 />} />
          <Route path="/comercio2" element={<Comercio2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
