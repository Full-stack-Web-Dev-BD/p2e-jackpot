import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Jackpot from "./pages/Jackpot";
import P2E from "./pages/P2E";
export const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <div className="preloader" id="preloader" />
        {/* end preloader */}
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/p2e" element={<P2E />} />
            <Route path="/jackpot" element={<Jackpot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
