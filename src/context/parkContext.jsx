import { createContext, useReducer, useMemo } from "react";
import { Reducer, InitialState } from "./parkReducer";
import { ACTION_TYPES } from "./actionType";

const ParkingLotContext = createContext();

export function ParkingLotProvider({ children }) {
  const [isState, setDispatch] = useReducer(Reducer, InitialState);

  const ActionType = useMemo(
    () => ({
      FETCH_START: async (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_START });
      },
      FETCH_ENTRIES: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_ENTRIES, payload: data });
      },
      signUp: async (data) => {
        setDispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <ParkingLotContext.Provider value={{ isState, ActionType }}>
      {children}
    </ParkingLotContext.Provider>
  );
}

export default ParkingLotContext;
