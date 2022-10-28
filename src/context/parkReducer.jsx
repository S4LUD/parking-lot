import { ACTION_TYPES } from "./actionType";

export const InitialState = {
  entries: [],
  cars: {},
  loading: false,
};

export const Reducer = (prevState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...prevState,
        loading: true,
      };
    case ACTION_TYPES.FETCH_PARK_ERROR:
      return { ...prevState, loading: false };
    case ACTION_TYPES.FETCH_PARK:
      return { ...prevState, loading: false };
    case ACTION_TYPES.FETCH_UNPARK:
      return {
        ...prevState,
        isSignedIn: true,
        data: action.payload,
      };
    case ACTION_TYPES.FETCH_NEW_ENTRY:
      return { ...prevState, loading: false };
    case ACTION_TYPES.FETCH_ENTRIES:
      return {
        ...prevState,
        entries: action.payload,
        loading: false,
      };
    case ACTION_TYPES.FETCH_CARS:
      return {
        ...prevState,
        cars: action.payload,
      };
    default:
      return prevState;
  }
};
