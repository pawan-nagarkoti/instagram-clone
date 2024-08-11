import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useToast } from "./services/hook";
import { ScrollToTop } from "./components";
const { ToastContainerComponent } = useToast();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <ToastContainerComponent />
    </BrowserRouter>
  </StrictMode>
);
