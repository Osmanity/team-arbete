import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./Pages/About.jsx";
import Calculator from "./Pages/Calculator.jsx";
import Todos from "./Pages/Todos.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
);
