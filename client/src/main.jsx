import React from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
