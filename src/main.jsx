import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.module.scss";
import { ParkingLotProvider } from "./context/parkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParkingLotProvider>
      <App />
    </ParkingLotProvider>
  </React.StrictMode>
);
