import React, { useContext } from "react";
import HeaderCSS from "./index.module.scss";
import { TbParking, AiFillCar, RiParkingBoxLine } from "react-icons/all";
import parkContext from "../../context/parkContext";

export default function Header({}) {
  const { isEntry, setEntry, isPark, setPark } = useContext(parkContext);

  return (
    <div className={HeaderCSS._h_a}>
      <div className={HeaderCSS._h_f}>
        <div className={HeaderCSS._h_g}>
          <RiParkingBoxLine size={32} />
        </div>
        <span className={HeaderCSS._h_h}>Parking Lot</span>
      </div>
      <div className={HeaderCSS._h_b}>
        <div className={HeaderCSS._h_c} onClick={() => setEntry(!isEntry)}>
          <div className={HeaderCSS._h_d}>
            <TbParking size={18} />
          </div>
          <span className={HeaderCSS._h_e}>New Entry</span>
        </div>
        <div className={HeaderCSS._h_c} onClick={() => setPark(!isPark)}>
          <div className={HeaderCSS._h_d}>
            <AiFillCar size={18} />
          </div>
          <span className={HeaderCSS._h_e}>Car Park</span>
        </div>
      </div>
    </div>
  );
}
