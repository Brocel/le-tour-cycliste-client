import React from "react";
import classes from "./style.module.css";

function Background(props) {
	return (
		<div
			className={`${classes.background} vw-100 mw-100 min-vh-100 mh-100 pb-2`}
		>
			{props.children}
		</div>
	);
}

export default Background;
