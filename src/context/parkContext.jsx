import React, {
  createContext,
  useReducer,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Reducer, InitialState } from "./parkReducer";
import { ACTION_TYPES } from "./actionType";
import { toast } from "react-toastify";

const ParkingLotContext = createContext();

export function ParkingLotProvider({ children }) {
  const [isState, setDispatch] = useReducer(Reducer, InitialState);
  const [isEntry, setEntry] = useState(false);
  const [isPark, setPark] = useState(false);

  const notify = (comment) => {
    toast.success(comment, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  const notifyError = (comment) => {
    toast.error(comment, {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  const updateParkingLotData = async () => {
    ActionType.FETCH_START();
    await fetch(import.meta.env.VITE_ENTRY_API, {
      method: "GET",
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => ActionType.FETCH_ENTRIES(result))
      .catch((error) => console.log("error", error));
  };

  const ActionType = useMemo(
    () => ({
      FETCH_START: async (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_START });
      },
      FETCH_ENTRIES: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_ENTRIES, payload: data });
      },
      FETCH_NEW_ENTRY: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_NEW_ENTRY });
        updateParkingLotData();
        setEntry(false);
      },
      FETCH_PARK: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_PARK });
        updateParkingLotData();
        notify("successful car parking");
      },
      FETCH_PARK_ERROR: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_PARK_ERROR });
        notifyError(data.message);
      },
    }),
    []
  );

  const useClickOutside = (handler) => {
    const entryRef = useRef();

    useEffect(() => {
      const maybeHandler = (event) => {
        if (!entryRef.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, []);

    return entryRef;
  };

  const useClickOutsidePark = (handler) => {
    const parkRef = useRef();

    useEffect(() => {
      const maybeHandler = (event) => {
        if (!parkRef.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, []);

    return parkRef;
  };

  const UnToggleEntry = useClickOutside(() => {
    setEntry(false);
  });

  const UnTogglePark = useClickOutsidePark(() => {
    setPark(false);
  });

  return (
    <ParkingLotContext.Provider
      value={{
        isState,
        ActionType,
        isEntry,
        setEntry,
        UnToggleEntry,
        isPark,
        setPark,
        UnTogglePark,
      }}
    >
      {children}
    </ParkingLotContext.Provider>
  );
}

export default ParkingLotContext;
