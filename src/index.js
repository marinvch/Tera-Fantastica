import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newspaper from "./pages/Newspaper";
import Books from "./pages/Books";
import Magazines from "./pages/Magazines";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="newspaper" exact element={<Newspaper />} />
        <Route path="books" element={<Books />} />
        <Route path="magazines" element={<Magazines />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
