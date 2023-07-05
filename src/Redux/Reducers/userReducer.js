import { INITIAL, SUCCESS, FAILURE } from "../Actions/actionTypes";

const initialUsers = {
  data: [],
  errMessage: "",
  status: INITIAL,
};

const userReducer = (state = initialUsers, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, data: action.data };
    case FAILURE:
      return { ...state, errMessage: action.errMessage };
    default:
      return { ...state };
  }
};

export default userReducer;
