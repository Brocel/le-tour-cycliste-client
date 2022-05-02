import React from "react";
import { getSessionStorage } from "../../../services/sessionStorageService";
import { User } from "../../../models/User";

function Welcome(props) {
	
	const user = getSessionStorage("user");

	return <h2>Bienvenue sur le Tour, {user.name} !</h2>;
}

export default Welcome;
