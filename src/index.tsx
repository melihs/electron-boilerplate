import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { store } from "./store";
import App from "./components/pages/App";
import "./styles/app.scss";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

