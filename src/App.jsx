import "./App.css";
import { Navbar } from "./Components/Navbar";
import React from "react";
import ListPage from "./Components/ListPage/ListPage";
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./SCSS/MainStyle.scss";

function App() {
  return (
    <>
      <div className="NavbarDiv">
        <div id="Header_logo">
          <h1>ToDo App</h1>
        </div>
        <Link className="NavLink" to="/mainpage">
          MainPage
        </Link>
        <Link className="NavLink" to="/listpage">
          ListPage
        </Link>
      </div>
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </>
  );
}

export default App;
