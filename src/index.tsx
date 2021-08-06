import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Pages
import Home from "./pages/Home.page";
// Styles
import "./styles/base.css";

ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  document.getElementById("root")
);
