import React, { useState, useContext } from "react";
import CarParkCSS from "./index.module.scss";
import parkContext from "../../context/parkContext";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

export default function CarPark({}) {
  const { isPark, setPark, UnTogglePark, isState, ActionType } =
    useContext(parkContext);
  const [isDrop, setDrop] = useState(false);
  const [isSelect, setSelect] = useState("Select");

  const notify = (comment) => {
    toast.warning(comment, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  const smallVehicle = () => {
    setSelect("smallVehicle");
    setDrop(!isDrop);
  };

  const mediumVehicle = () => {
    setSelect("mediumVehicle");
    setDrop(!isDrop);
  };

  const largeVehicle = () => {
    setSelect("largeVehicle");
    setDrop(!isDrop);
  };

  const CarPark = async () => {
    if (isSelect === "Select") return notify("Vehicle Type is Emtpy");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleType: isSelect,
        status: "vacant",
        new_status: "occupied",
      }),
      redirect: "follow",
    };

    ActionType.FETCH_START();
    await fetch(import.meta.env.VITE_PARK_API, requestOptions)
      .then((response) => response.json())
      .then((result) => ActionType.FETCH_PARK())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`${CarParkCSS._cp_a} ${isPark && CarParkCSS._cp_k}`}>
      <div className={CarParkCSS._cp_b} ref={UnTogglePark}>
        <div className={CarParkCSS._cp_c}>Car Details</div>
        <div className={CarParkCSS._cp_d}>
          <div className={CarParkCSS._cp_e} onClick={() => setDrop(!isDrop)}>
            {isSelect}
          </div>
          <div className={`${CarParkCSS._cp_f} ${isDrop && CarParkCSS._cp_j}`}>
            <div className={CarParkCSS._cp_g} onClick={() => smallVehicle()}>
              Small Vehicle
            </div>
            <div className={CarParkCSS._cp_g} onClick={() => mediumVehicle()}>
              Medium Vehicle
            </div>
            <div className={CarParkCSS._cp_g} onClick={() => largeVehicle()}>
              Large Vehicle
            </div>
          </div>
        </div>
        <div className={CarParkCSS._cp_h}>
          <div className={CarParkCSS._cp_i} onClick={() => setPark(!isPark)}>
            Cancel
          </div>
          <div
            className={`${CarParkCSS._cp_i} ${
              isState.loading && CarParkCSS._cp_l
            }`}
            onClick={() => CarPark()}
          >
            {isState.loading ? (
              <ThreeDots
                height="32"
                width="32"
                radius="9"
                color="#51ACFA"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Park"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}