function Container(props) {
	return (
		<main className={`${props.styles} h-100 m-0`}>
			{props.children}
		</main>
	);
}

export default Container;
