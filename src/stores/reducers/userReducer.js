const INITIAL_STATE = {
	userIsConnected: 0,
	id: 0,
	name: "",
};

function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "USER_IS_CONNECTED":
			return {
				...state,
				userIsConnected: 1,
				id: action.userId,
				name: action.userName,
			};
		case "USER_IS_NOT_CONNECTED":
			return {
				...state,
				userIsConnected: 0,
				id: 0,
				name: "",
			};
		default:
			return state;
	}
}

export default userReducer;
