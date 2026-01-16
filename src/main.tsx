// Import af React StrictMode og createRoot for at rendere appen
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Opret root elementet og render App komponenten i StrictMode
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
