import React from "react";

function Header(props) {
	return (
		<header
			className={`${props.styles} row w-100 m-0 justify-content-between align-items-center`}
		>
			{props.children}
		</header>
	);
}

export default Header;
