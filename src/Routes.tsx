import * as React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import "./App.css";
import { About } from "./About";
import { MaestroHeader } from "./Header";

function MaestroRoutes() {
  return (
    <div className="App">
      <MaestroHeader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export {
    MaestroRoutes,
}