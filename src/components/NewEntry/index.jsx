import React, { useContext } from "react";
import NewEntryCSS from "./index.module.scss";
import parkContext from "../../context/parkContext";
import { ThreeDots } from "react-loader-spinner";

export default function NewEntry({}) {
  const { isEntry, setEntry, UnToggleEntry, ActionType, isState } =
    useContext(parkContext);

  const createNewEntry = async () => {
    ActionType.FETCH_START();
    await fetch(import.meta.env.VITE_ENTRY_API, {
      method: "POST",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => ActionType.FETCH_NEW_ENTRY())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`${NewEntryCSS._ne_a} ${isEntry && NewEntryCSS._ne_g}`}>
      <div className={NewEntryCSS._ne_b} ref={UnToggleEntry}>
        <div className={NewEntryCSS._ne_c}>New Entry Point</div>
        <div className={NewEntryCSS._ne_f} />
        <div className={NewEntryCSS._ne_d}>
          <div className={NewEntryCSS._ne_e} onClick={() => setEntry(!isEntry)}>
            Cancel
          </div>
          <div
            className={`${NewEntryCSS._ne_e} ${
              isState.loading && NewEntryCSS._ne_h
            }`}
            onClick={() => createNewEntry()}
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
              "Create"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
