import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useToast } from "./services/hook";
import { ScrollToTop } from "./components";
import { ModalProvider } from "./services/hook/ModalContext.jsx";
import { SocialProvider } from "./services/hook/SocialContext.jsx";
import { ProfileProvider } from "./services/hook/ProfileContext.jsx";
const { ToastContainerComponent } = useToast();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ModalProvider>
    <SocialProvider>
      <ProfileProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
          <ToastContainerComponent />
        </BrowserRouter>
      </ProfileProvider>
    </SocialProvider>
  </ModalProvider>
  // </StrictMode>
);
