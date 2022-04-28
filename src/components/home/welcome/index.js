import React from "react";
import { useSelector } from "react-redux";

function Welcome(props) {
	const userName = useSelector(
		(state) => state.user.name
	);

	return <h2>Bienvenue sur le Tour, {userName} !</h2>;
}

export default Welcome;
