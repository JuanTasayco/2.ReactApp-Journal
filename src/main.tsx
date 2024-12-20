import { createRoot } from "react-dom/client";
import "./styles.css";
import { JournalApp } from "./JournalApp";
import { BrowserRouter } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <JournalApp></JournalApp>
    </BrowserRouter>
  </Provider>
);
