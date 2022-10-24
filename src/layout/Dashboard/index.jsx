import React, { useEffect, useLayoutEffect } from "react";
import DashboardCSS from "./index.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";
import {
  BlackOut,
  BlueStrip,
  GreenStrip,
  PinkStrip,
  RedStrip,
  WhiteStrip,
} from "../../assets/image/cars";

export default function Dashboard(params) {
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
      <div className={DashboardCSS._d_h}>
        <div className={DashboardCSS._d_i}>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS1</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS2</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS3</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS4</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS5</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS6</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS7</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS8</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS9</div>
          </div>
          <div className={DashboardCSS._d_o_s}>
            <div className={DashboardCSS._d_r}>LS10</div>
          </div>
        </div>
        <div className={DashboardCSS._d_j}>
          <div className={DashboardCSS._d_l}>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>LLS1</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>LLS2</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>LLS3</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>LLS4</div>
            </div>
            <div className={DashboardCSS._d_p_l}>
              <div className={DashboardCSS._d_u}>LLS5</div>
            </div>
          </div>
          <div className={DashboardCSS._d_m} />
          <div className={DashboardCSS._d_n}>
            <div className={DashboardCSS._d_q_l}>
              <div className={DashboardCSS._d_s}>RLS1</div>
            </div>
            <div className={DashboardCSS._d_q_l}>
              <div className={DashboardCSS._d_s}>RLS2</div>
            </div>
            <div className={DashboardCSS._d_q_l}>
              <div className={DashboardCSS._d_s}>RLS3</div>
            </div>
            <div className={DashboardCSS._d_q_l}>
              <div className={DashboardCSS._d_s}>RLS4</div>
            </div>
            <div className={DashboardCSS._d_q_l}>
              <div className={DashboardCSS._d_s}>RLS5</div>
            </div>
          </div>
        </div>
        <div className={DashboardCSS._d_k}>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS1</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS2</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS3</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS4</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS5</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS6</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS7</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS8</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS9</div>
          </div>
          <div className={DashboardCSS._d_q_m}>
            <div className={DashboardCSS._d_v}>MS10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
