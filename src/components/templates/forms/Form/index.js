import React from "react";

function Form(props) {
	function formHandler(event) {
		event.preventDefault();
	}

	return (
		<form
			onSubmit={formHandler}
			className={`row mb-1 mt-1`}
		>
			{props.children}
		</form>
	);
}

export default Form;
