import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/auth";
import { BoardProvider } from "./contexts/board";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </AuthProvider>
  </StrictMode>
);
