import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utility/ScrollToTop.js";
import CloseSidebar from "./utility/CloseSidebar.js";
import SidebarProvider from "./Contexs/SidebarContext.jsx";
import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SidebarProvider>
      <App />
      <ScrollToTop />
      <CloseSidebar />
    </SidebarProvider>
  </BrowserRouter>
);
