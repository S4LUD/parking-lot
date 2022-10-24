import React from "react";
import SidebarCSS from "./index.module.scss";

export default function Sidebar(params) {
  return (
    <div className={SidebarCSS._s_a}>
      <div className={SidebarCSS._s_b}>
        <div className={SidebarCSS._s_c}>Parking Rates</div>
        <div className={SidebarCSS._s_d}>
          <div className={SidebarCSS._s_e}>
            40 PHP fixed cost for the first 3 hours
          </div>
          <div className={SidebarCSS._s_f}>
            <div className={SidebarCSS._s_h}>3+ hours rates</div>
            <div className={SidebarCSS._s_i}>
              <div className={SidebarCSS._s_g}>20 PHP/hour in SP</div>
              <div className={SidebarCSS._s_g}>60 PHP/hour in MP</div>
              <div className={SidebarCSS._s_g}>100 PHP/hour in LP</div>
            </div>
            <div className={SidebarCSS._s_j}>Full 24hrs fee of 5,000 PHP</div>
            <div className={SidebarCSS._s_k}>
              The remaining hours are billed at the hourly rates determined by
              where you parked.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
