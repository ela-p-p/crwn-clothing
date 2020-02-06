import { UPDATE_COLLECTIONS } from "../constants";

const initalState = {
  collections: null
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
