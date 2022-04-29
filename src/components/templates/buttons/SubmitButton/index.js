import classes from "./style.module.css";

function SumbitButton(props) {
	return (
		<button
			className={`${classes.button} input-group-text`}
			onClick={props.onClick}
		>
			{props.buttonText}
		</button>
	);
}

export default SumbitButton;
