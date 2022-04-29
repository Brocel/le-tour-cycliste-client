import React from "react";

function Title(props) {
	return (
		<h1 className={`${props.styles}`}>
			{props.title}
		</h1>
	);
}

export default Title;
