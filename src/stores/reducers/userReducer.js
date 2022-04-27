import { getSessionStorage } from "../../services/sessionStorageService";

let userId;

if (getSessionStorage("user")) {
  userId = getSessionStorage("user").id;
} else {
  userId = 0;
}

const INITIAL_STATE = {
  userIsConnected: 0,
  userId: userId,
};

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "USER_IS_CONNECTED":
      return {...state, userIsConnected: 1, userId: action.userId};
    case "USER_IS_NOT_CONNECTED":
      return {...state, userIsConnected: 0, userId: 0};
    default:
      return state;
  }
}

export default userReducer;