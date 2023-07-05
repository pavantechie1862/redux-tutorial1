import { BUY_MOBILES } from "../Actions/actionTypes";

const initialState = {
  noOfMobiles: 277,
};

export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOBILES:
      return { noOfMobiles: state.noOfMobiles - 1 };
    default:
      return state;
  }
};
