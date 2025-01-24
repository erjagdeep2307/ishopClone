import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; //Adding tailwind css in our project
import App from "./App.jsx";
import MainContext from "./Pages/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </StrictMode>
);
