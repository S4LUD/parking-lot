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
  const [isUnPark, setUnPark] = useState(false);
  const [isFeeDetails, setFeeDetails] = useState([]);
  const [isGetFeeDetails, setGetFeeDetails] = useState([]);

  const notify = (comment) => {
    toast.success(comment, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "light",
    });
  };

  const notifyError = (comment) => {
    toast.error(comment, {
      position: "top-right",
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

  const getCarDetails = async () => {
    ActionType.FETCH_START();
    await fetch(import.meta.env.VITE_PARK_DETAILS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleId: isFeeDetails.vehicleId,
        lotType: isFeeDetails.lotType,
      }),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => ActionType.FETCH_PARK_DETAILS(result))
      .catch((error) => console.log("error", error));
  };

  const ActionType = useMemo(
    () => ({
      FETCH_START: async () => {
        setDispatch({ type: ACTION_TYPES.FETCH_START });
      },
      FETCH_ENTRIES: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_ENTRIES, payload: data });
      },
      FETCH_PARK_DETAILS: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_PARK_DETAILS });
        setGetFeeDetails(data);
      },
      FETCH_NEW_ENTRY: () => {
        setDispatch({ type: ACTION_TYPES.FETCH_NEW_ENTRY });
        updateParkingLotData();
        setEntry(false);
      },
      FETCH_PARK: () => {
        setDispatch({ type: ACTION_TYPES.FETCH_PARK });
        updateParkingLotData();
        notify("parked successfully");
        setPark(false);
      },
      FETCH_PARK_ERROR: (data) => {
        setDispatch({ type: ACTION_TYPES.FETCH_PARK_ERROR });
        notifyError(data.message);
      },
      FETCH_UNPARK: () => {
        setDispatch({ type: ACTION_TYPES.FETCH_UNPARK });
        updateParkingLotData();
        notify("unparked successfully");
        setUnPark(false);
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

  const useClickOutsideUnPark = (handler) => {
    const unparkRef = useRef();

    useEffect(() => {
      const maybeHandler = (event) => {
        if (!unparkRef.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, []);

    return unparkRef;
  };

  const UnToggleEntry = useClickOutside(() => {
    setEntry(false);
  });

  const UnTogglePark = useClickOutsidePark(() => {
    setPark(false);
  });

  const UnToggleUnPark = useClickOutsideUnPark(() => {
    setUnPark(false);
  });

  const ToggleFee = (FeeDetails) => {
    setGetFeeDetails([]);
    setUnPark(!isUnPark);
    setFeeDetails(FeeDetails);
  };

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
        isUnPark,
        setUnPark,
        UnToggleUnPark,
        ToggleFee,
        isFeeDetails,
        isGetFeeDetails,
        getCarDetails,
      }}
    >
      {children}
    </ParkingLotContext.Provider>
  );
}

export default ParkingLotContext;
