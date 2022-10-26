import React from "react";
import DashboardCSS from "./index.module.scss";
import {
  BlackOut,
  BlueStrip,
  GreenStrip,
  PinkStrip,
  RedStrip,
  WhiteStrip,
} from "../../assets/image/cars";

export default function ParkingLot({ entries }) {
  return (
    <div className={DashboardCSS._d_h}>
      {entries.map((item, index) => {
        return (
          <div key={index} className={DashboardCSS._d_i}>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s1}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s2}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s3}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s4}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s5}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s6}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s7}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s8}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>{item.smallParkingLot.s9}</div>
            </div>
            <div className={DashboardCSS._d_o_s}>
              <div className={DashboardCSS._d_r}>
                {item.smallParkingLot.s10}
              </div>
            </div>
          </div>
        );
      })}
      {entries.map((item, index) => {
        return (
          <div key={index} className={DashboardCSS._d_j}>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s1}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s2}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s3}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s4}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s5}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s6}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s7}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s8}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>{item.smallParkingLot.s9}</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>
                {item.largeParkingLot.s10}
              </div>
            </div>
          </div>
        );
      })}
      {entries.map((item, index) => {
        return (
          <div className={DashboardCSS._d_k}>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s1}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s2}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s3}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s4}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s5}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s6}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s7}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s8}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s9}
              </div>
            </div>
            <div className={DashboardCSS._d_q_m}>
              <div className={DashboardCSS._d_v}>
                {item.mediumParkingLot.s10}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
