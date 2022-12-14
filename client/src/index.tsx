import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css/bundle";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
