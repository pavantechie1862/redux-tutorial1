import {
  BUY_LAPTOPS,
  BUY_MOBILES,
  SUCCESS,
  LOADING,
  FAILURE,
} from "./actionTypes";

import axios from "axios";

export const buyLaptops = () => {
  return {
    type: BUY_LAPTOPS,
  };
};

export const buyMobile = () => {
  return {
    type: BUY_MOBILES,
  };
};

const loading = () => {
  return {
    type: LOADING,
  };
};

const success = (list) => {
  return {
    type: SUCCESS,
    data: list,
  };
};

const failure = (errMsg) => {
  return {
    type: FAILURE,
    errMessage: errMsg,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(loading());
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => {
        const list = response.data;
        dispatch(success(list));
      })
      .catch((err) => dispatch(failure(err)));
  };
};
