import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp";
import { BrowserRouter } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <JournalApp></JournalApp>
  </BrowserRouter>
);
