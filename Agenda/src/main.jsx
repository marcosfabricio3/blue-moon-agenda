import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTES
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Pages/Home.jsx";
import Fichas from "./components/Pages/Fichas.jsx";
import Agenda from "./components/Pages/Agenda.jsx";

// CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>

      <NavBar />

      <Routes>

        {/* PATH OF EACH PAGES */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="fichas" element={<Fichas />} />
        <Route exact path="agenda" element={<Agenda />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);
