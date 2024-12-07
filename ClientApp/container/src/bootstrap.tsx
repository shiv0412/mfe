import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const container: Element | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
