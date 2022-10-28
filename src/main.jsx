import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.module.scss";
import { ParkingLotProvider } from "./context/parkContext";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParkingLotProvider>
      <App />
    </ParkingLotProvider>
  </React.StrictMode>
);
