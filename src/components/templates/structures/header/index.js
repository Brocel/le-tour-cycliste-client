import React from "react";

function Header(props) {
	return (
		<div className={`row w-100 ${props.styles}`}>
			<div className={``}>{props.children}</div>
		</div>
	);
}

export default Header;
