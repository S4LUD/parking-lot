import React, { useContext } from "react";
import UnParkCSS from "./index.module.scss";
import parkContext from "../../context/parkContext";
import { ThreeDots } from "react-loader-spinner";

export default function UnPark() {
  const {
    isUnPark,
    setUnPark,
    UnToggleUnPark,
    isState,
    isFeeDetails,
    isGetFeeDetails,
    getCarDetails,
    ActionType,
  } = useContext(parkContext);

  const unpark = async (id) => {
    ActionType.FETCH_START();
    await fetch(import.meta.env.VITE_UNPARK_API, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => ActionType.FETCH_UNPARK())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`${UnParkCSS._up_a} ${isUnPark && UnParkCSS._up_k}`}>
      <div className={UnParkCSS._up_b} ref={UnToggleUnPark}>
        {isFeeDetails.status === "vacant" ? (
          <div className={UnParkCSS._up_n}>NO DATA</div>
        ) : (
          <>
            <div className={UnParkCSS._up_c}>Un Park a car</div>
            <div className={UnParkCSS._up_d}>
              <div className={UnParkCSS._up_e}>
                <div className={UnParkCSS._up_f}>Ref No.:</div>
                <div className={UnParkCSS._up_g}>{isFeeDetails.vehicleId}</div>
              </div>
              <div className={UnParkCSS._up_e}>
                <div className={UnParkCSS._up_f}>Lot type:</div>
                <div className={UnParkCSS._up_g}>{isFeeDetails.lotType}</div>
              </div>
              <div className={UnParkCSS._up_e}>
                <div className={UnParkCSS._up_f}>Vehicle type:</div>
                <div className={UnParkCSS._up_g}>
                  {isFeeDetails.vehicleType}
                </div>
              </div>
              {isGetFeeDetails.length !== 0 && (
                <>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>TimeIn:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.TimeIn}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>TimeOut:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.TimeOut}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>Total hours:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.totalHours}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>Flat fee:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.fixedRate}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>Exceeding Fee:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.hourlyRate}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>Full hours Fee:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.fullHoursRate}
                    </div>
                  </div>
                  <div className={UnParkCSS._up_e}>
                    <div className={UnParkCSS._up_f}>Total Fee.:</div>
                    <div className={UnParkCSS._up_g}>
                      {isGetFeeDetails.totalFee}
                    </div>
                  </div>
                </>
              )}
            </div>
            {isGetFeeDetails.length !== 0 ? (
              <div className={UnParkCSS._up_h}>
                <div
                  className={`${UnParkCSS._up_i} ${
                    isState.loading && UnParkCSS._up_j
                  }`}
                  onClick={() => setUnPark(!isUnPark)}
                >
                  {isState.loading ? (
                    <ThreeDots
                      height="32"
                      width="32"
                      radius="9"
                      color="#000000"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  ) : (
                    "Cancel"
                  )}
                </div>
                <div
                  className={`${UnParkCSS._up_i} ${
                    isState.loading && UnParkCSS._up_j
                  }`}
                  onClick={() => unpark(isFeeDetails.vehicleId)}
                >
                  {isState.loading ? (
                    <ThreeDots
                      height="32"
                      width="32"
                      radius="9"
                      color="#000000"
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
            ) : (
              <div className={UnParkCSS._up_l} onClick={() => getCarDetails()}>
                <div className={UnParkCSS._up_m}>
                  {isState.loading ? (
                    <ThreeDots
                      height="32"
                      width="32"
                      radius="9"
                      color="#000000"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                    />
                  ) : (
                    "Get Fee"
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
