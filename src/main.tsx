import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Global toast notification function
declare global {
  interface Window {
    showNeuraToast: (message: string, type?: "success" | "error", timeout?: number) => void;
  }
}

window.showNeuraToast = (message: string, type: "success" | "error" = "success", timeout: number = 3800) => {
  const el = document.createElement("div");
  el.className = `neura-toast ${type}`;
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => { el.classList.add("hide"); }, timeout);
  setTimeout(() => { el.remove(); }, timeout + 400);
};

createRoot(document.getElementById("root")!).render(<App />);