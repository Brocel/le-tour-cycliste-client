import React from "react";

function ButtonEnter(props) {
	return (
		<div>
			<button
				onClick={props.onclick}
				className={`btn m-1 text-uppercase text-center`}
			>
				Entrer
			</button>
		</div>
	);
}

export default ButtonEnter;
