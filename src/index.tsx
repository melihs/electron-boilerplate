import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./renderer/App";

import "./renderer/styles/app.scss";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

