import React, { useEffect, useContext, useLayoutEffect } from "react";
import DashboardCSS from "./index.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";
import ParkingLot from "../../components/ParkingLot";
import parkContext from "../../context/parkContext";

export default function Dashboard(params) {
  const { isState, ActionType } = useContext(parkContext);

  useLayoutEffect(() => {
    (async () => {
      ActionType.FETCH_START();
      await fetch(import.meta.env.VITE_ENTRY_API, {
        method: "GET",
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => ActionType.FETCH_ENTRIES(result))
        .catch((error) => console.log("error", error));
    })();
  }, []);

  return (
    <div className={DashboardCSS._d_a}>
      <div className={DashboardCSS._d_f}>
        <div className={DashboardCSS._d_b}>
          <div className={DashboardCSS._d_c}>Floor</div>
          <div className={DashboardCSS._d_d}>
            <div className={DashboardCSS._d_e}>
              <AiOutlineLeft />
              <span className={DashboardCSS._d_g}>Back</span>
            </div>
            <input type="text" placeholder="1" />
            <div className={DashboardCSS._d_e}>
              <span className={DashboardCSS._d_g}>Next</span>
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
      <ParkingLot entries={isState.entries} />
    </div>
  );
}
