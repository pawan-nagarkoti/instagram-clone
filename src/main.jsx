import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useToast } from "./services/hook";
import { ScrollToTop } from "./components";
import { ModalProvider } from "./services/hook/ModalContext.jsx";
const { ToastContainerComponent } = useToast();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
        <ToastContainerComponent />
      </BrowserRouter>
    </ModalProvider>
  </StrictMode>
);
