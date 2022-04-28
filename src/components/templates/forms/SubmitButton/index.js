function SumbitButton(props) {
	return (
		<button
			className={`input-group-text bg-transparent border-left-0 rounded-right`}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
}

export default SumbitButton;
