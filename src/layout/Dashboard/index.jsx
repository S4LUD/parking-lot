import React, { useState, useContext, useLayoutEffect, Suspense } from "react";
import DashboardCSS from "./index.module.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";
import ParkingLot from "../../components/ParkingLot";
import parkContext from "../../context/parkContext";
import NewEntry from "../../components/NewEntry";
import CarPark from "../../components/CarPark";
import { ToastContainer } from "react-toastify";
import UnPark from "../../components/UnPark";
import { TailSpin } from "react-loader-spinner";

export default function Dashboard({}) {
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

  const entries = isState.entries;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  const pageNumbers = [];

  const indexOfLastFloor = currentPage * postsPerPage;
  const indexOfFirstFloor = indexOfLastFloor - postsPerPage;
  const currentFloor = entries.slice(indexOfFirstFloor, indexOfLastFloor);

  const paginate = (pageNumber) => {
    if (pageNumber <= 0) return;
    if (pageNumber >= pageNumbers.length + 1) return;
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= Math.ceil(isState.entries.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={DashboardCSS._d_a}>
      <ToastContainer />
      <CarPark />
      <NewEntry />
      <UnPark />
      {/* {!isState.loading ? (
        <>
          <div className={DashboardCSS._d_f}>
            <div className={DashboardCSS._d_b}>
              <div className={DashboardCSS._d_c}>Floor</div>
              <div className={DashboardCSS._d_d}>
                <div
                  className={DashboardCSS._d_e}
                  onClick={() => paginate(currentPage - 1)}
                >
                  <AiOutlineLeft />
                  <span className={DashboardCSS._d_g}>Back</span>
                </div>
                <input type="text" placeholder={currentPage} />
                <div
                  className={DashboardCSS._d_e}
                  onClick={() => paginate(currentPage + 1)}
                >
                  <span className={DashboardCSS._d_g}>Next</span>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
          <ParkingLot currentFloor={currentFloor} />
        </>
      ) : (
        <div className={DashboardCSS._d_h}>
          <TailSpin
            height="22"
            width="22"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
          Refreshing data, Please wait...
        </div>
      )} */}
      <Suspense
        fallback={
          <div className={DashboardCSS._d_h}>
            <TailSpin
              height="22"
              width="22"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
            />
            Refreshing data, Please wait...
          </div>
        }
      >
        <>
          <div className={DashboardCSS._d_f}>
            <div className={DashboardCSS._d_b}>
              <div className={DashboardCSS._d_c}>Floor</div>
              <div className={DashboardCSS._d_d}>
                <div
                  className={DashboardCSS._d_e}
                  onClick={() => paginate(currentPage - 1)}
                >
                  <AiOutlineLeft />
                  <span className={DashboardCSS._d_g}>Back</span>
                </div>
                <input type="text" placeholder={currentPage} />
                <div
                  className={DashboardCSS._d_e}
                  onClick={() => paginate(currentPage + 1)}
                >
                  <span className={DashboardCSS._d_g}>Next</span>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
          <ParkingLot currentFloor={currentFloor} />
        </>
      </Suspense>
    </div>
  );
}
