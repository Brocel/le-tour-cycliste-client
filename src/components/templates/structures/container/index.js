function Container(props) {
	return (
		<main className={`w-100 h-100 m-0`}>
			{props.children}
		</main>
	);
}

export default Container;
