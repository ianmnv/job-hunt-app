import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./store/index.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
