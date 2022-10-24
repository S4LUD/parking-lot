import React from "react";
import HeaderCSS from "./index.module.scss";
import { TbParking, AiFillCar, RiParkingBoxLine } from "react-icons/all";

export default function Header(params) {
  return (
    <div className={HeaderCSS._h_a}>
      <div className={HeaderCSS._h_f}>
        <div className={HeaderCSS._h_g}>
          <RiParkingBoxLine size={32} />
        </div>
        <span className={HeaderCSS._h_h}>Parking Lot</span>
      </div>
      <div className={HeaderCSS._h_b}>
        <div className={HeaderCSS._h_c}>
          <div className={HeaderCSS._h_d}>
            <TbParking size={18} />
          </div>
          <span className={HeaderCSS._h_e}>New Entry Point</span>
        </div>
        <div className={HeaderCSS._h_c}>
          <div className={HeaderCSS._h_d}>
            <AiFillCar size={18} />
          </div>
          <span className={HeaderCSS._h_e}>Park a Car</span>
        </div>
      </div>
    </div>
  );
}
