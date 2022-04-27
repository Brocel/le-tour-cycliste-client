import React from "react";

function Title(props) {
	return (
		<h1
			className={`${props.styles} col p-0 h2 font-weight-light`}
		>
			{props.title}
		</h1>
	);
}

export default Title;
