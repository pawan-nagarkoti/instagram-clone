import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useToast } from "./services/hook";
import { ScrollToTop } from "./components";
import { ModalProvider } from "./services/hook/ModalContext.jsx";
import { SocialProvider } from "./services/hook/SocialContext.jsx";
const { ToastContainerComponent } = useToast();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ModalProvider>
    <SocialProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
        <ToastContainerComponent />
      </BrowserRouter>
    </SocialProvider>
  </ModalProvider>
  // </StrictMode>
);
