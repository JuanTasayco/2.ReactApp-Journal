import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <JournalApp></JournalApp>
  </BrowserRouter>
);
