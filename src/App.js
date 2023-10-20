import React from "react";
// import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import DataProjects from "./components/DataProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects DataProjects={DataProjects} />
      <Contact />
    </div>
  );
}

export default App;
