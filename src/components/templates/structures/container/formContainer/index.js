function FormContainer(props) {
	return (
		<div
			className={`form-group p-0 ${props.styles}`}
		>
			{props.children}
		</div>
	);
}

export default FormContainer;
