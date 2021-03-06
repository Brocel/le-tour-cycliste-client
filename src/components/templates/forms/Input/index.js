function Input(props) {
	return (
		<>
			<input
				className={`form-control-lg border-0 rounded-sm bg-white text-dark shadow rounded w-100`}
				id={props.id}
				pattern={props.pattern}
				type={props.type}
				placeholder={props.placeholder}
				list={props.list}
				onChange={props.onChange}
				onKeyDown={props.onKeyDown}
				defaultValue={props.defaultValue}
				value={props.value}
				maxLength={props.maxLength}
				autoComplete='off'
			/>
		</>
	);
}

export default Input;
