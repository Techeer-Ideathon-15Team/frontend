import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import background from "../src/assets/background.gif";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className="w-screen h-screen bg-cover bg-no-repeat bg-center opacity-80"
      style={{ backgroundImage: `url(${background})` }}
    >
      <App />
    </div>
  </React.StrictMode>
);
