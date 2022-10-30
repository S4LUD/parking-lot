import React, { useContext } from "react";
import UnParkCSS from "./index.module.scss";
import parkContext from "../../context/parkContext";
import { ThreeDots } from "react-loader-spinner";

export default function UnPark() {
  const {
    isUnPark,
    setUnPark,
    UnToggleUnPark,
    ActionType,
    isState,
    isFeeDetails,
  } = useContext(parkContext);

  return (
    <div className={`${UnParkCSS._up_a} ${isUnPark && UnParkCSS._up_k}`}>
      <div className={UnParkCSS._up_b} ref={UnToggleUnPark}>
        <div className={UnParkCSS._up_c}>Un Park a car</div>
        <div className={UnParkCSS._up_d}>
          <div className={UnParkCSS._up_e}>
            <div className={UnParkCSS._up_f}>Ref No.:</div>
            <div className={UnParkCSS._up_g}>{isFeeDetails.vehicleId}</div>
          </div>
          <div
            className={UnParkCSS._up_e}
            onClick={() => console.log(isFeeDetails)}
          >
            <div className={UnParkCSS._up_f}>Lot Type:</div>
            <div className={UnParkCSS._up_g}>{isFeeDetails.lotType}</div>
          </div>
          <div className={UnParkCSS._up_e}>
            <div className={UnParkCSS._up_f}>Hourly Fee:</div>
            <div className={UnParkCSS._up_g}>40Php</div>
          </div>
          <div className={UnParkCSS._up_e}>
            <div className={UnParkCSS._up_f}>24Hrs Fee:</div>
            <div className={UnParkCSS._up_g}>5000Php</div>
          </div>
          <div className={UnParkCSS._up_e}>
            <div className={UnParkCSS._up_f}>Total Fee:</div>
            <div className={UnParkCSS._up_g}>60Php</div>
          </div>
        </div>
        <div className={UnParkCSS._up_h}>
          <div className={UnParkCSS._up_i} onClick={() => setUnPark(!isUnPark)}>
            Cancel
          </div>
          <div
            className={`${UnParkCSS._up_i} ${
              isState.loading && UnParkCSS._up_j
            }`}
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
              "Pay"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
