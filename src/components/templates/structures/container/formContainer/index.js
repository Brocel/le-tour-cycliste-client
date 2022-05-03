function FormContainer(props) {
	return (
		<div
			className={`form-group ${props.styles}`}
		>
			{props.children}
		</div>
	);
}

export default FormContainer;
