import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // ทำการเปลี่ยนเป็น BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ใส่ BrowserRouter ในที่นี้ */}
      <App />
    </BrowserRouter>{" "}
    {/* ปิด BrowserRouter */}
  </React.StrictMode>
);
