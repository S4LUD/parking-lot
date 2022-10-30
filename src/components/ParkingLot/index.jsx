import React, { useContext } from "react";
import DashboardCSS from "./index.module.scss";
import {
  BlackOut,
  BlueStrip,
  GreenStrip,
  PinkStrip,
  RedStrip,
  WhiteStrip,
} from "../../assets/image/cars";
import parkContext from "../../context/parkContext";

export default function ParkingLot({ currentFloor }) {
  const { ToggleFee } = useContext(parkContext);
  const Cars = [
    BlackOut,
    BlueStrip,
    GreenStrip,
    PinkStrip,
    RedStrip,
    WhiteStrip,
  ];

  return (
    <div className={DashboardCSS._d_h}>
      <div className={DashboardCSS._d_i}>
        {currentFloor.map((item) => {
          return item.smallParkingLot.map((lot, index) => {
            return (
              <div
                key={index}
                className={DashboardCSS._d_o_s}
                onClick={() => ToggleFee(lot)}
              >
                {lot.status !== "vacant" ? (
                  <img
                    src={Cars[parseInt(lot.carName)]}
                    alt={lot}
                    style={{
                      height:
                        lot.vehicleType === "smallVehicle"
                          ? "48px"
                          : lot.vehicleType === "mediumVehicle"
                          ? "52px"
                          : lot.vehicleType === "largeVehicle"
                          ? "56px"
                          : null,
                    }}
                  />
                ) : (
                  <div className={DashboardCSS._d_r}>{lot.status}</div>
                )}
              </div>
            );
          });
        })}
      </div>
      <div className={DashboardCSS._d_k}>
        {currentFloor.map((item) => {
          return item.mediumParkingLot.map((lot, index) => {
            return (
              <div
                key={index}
                className={DashboardCSS._d_q_m}
                onClick={() => ToggleFee(lot)}
              >
                {lot.status !== "vacant" ? (
                  <img
                    src={Cars[parseInt(lot.carName)]}
                    alt={lot}
                    style={{
                      height:
                        lot.vehicleType === "smallVehicle"
                          ? "48px"
                          : lot.vehicleType === "mediumVehicle"
                          ? "52px"
                          : lot.vehicleType === "largeVehicle"
                          ? "56px"
                          : null,
                    }}
                  />
                ) : (
                  <div className={DashboardCSS._d_v}>{lot.status}</div>
                )}
              </div>
            );
          });
        })}
      </div>
      <div className={DashboardCSS._d_j}>
        {currentFloor.map((item) => {
          return item.largeParkingLot.map((lot, index) => {
            return (
              <div
                key={index}
                className={DashboardCSS._d_p_l}
                onClick={() => ToggleFee(lot)}
              >
                {lot.status !== "vacant" ? (
                  <img
                    src={Cars[parseInt(lot.carName)]}
                    alt={lot}
                    style={{
                      height:
                        lot.vehicleType === "smallVehicle"
                          ? "48px"
                          : lot.vehicleType === "mediumVehicle"
                          ? "52px"
                          : lot.vehicleType === "largeVehicle"
                          ? "56px"
                          : null,
                    }}
                  />
                ) : (
                  <div className={DashboardCSS._d_u}>{lot.status}</div>
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
