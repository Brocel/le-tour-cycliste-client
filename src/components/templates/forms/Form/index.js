import React from "react";

function Form(props) {
	function formHandler(event) {
		event.preventDefault();
	}

	return (
		<form onSubmit={formHandler}>
			{props.children}
		</form>
	);
}

export default Form;
