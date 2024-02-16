import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/pages/App";

import "./styles/app.scss";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

