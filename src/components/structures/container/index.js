function Container(props) {
	return (
		<main
			stryle={props.padding}
			className={`${props.styles} w-100 h-100 m-0`}
		>
			{props.children}
		</main>
	);
}
