import React from "react";
import classes from "./style.module.css";

function ButtonEnter(props) {
	return (
		<div>
			<button
				className={`${classes.button} input-group-text text-uppercase`}
				onClick={props.onClick}
			>
				Entrer
			</button>
		</div>
	);
}

export default ButtonEnter;
