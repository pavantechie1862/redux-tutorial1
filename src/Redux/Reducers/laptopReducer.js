import { BUY_LAPTOPS } from "../Actions/actionTypes";

const initialState = {
  noOfLaptops: 100,
};

export const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOPS:
      return { noOfLaptops: state.noOfLaptops - 1 };
    default:
      return state;
  }
};
