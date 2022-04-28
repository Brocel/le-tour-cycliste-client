import React from "react";
import Container from "../../components/templates/structures/container";
import Header from "../../components/templates/structures/header";
import Title from "../../components/templates/structures/title";
import Login from "../../components/home/login";

function LoginPage() {
	const title = "Login";

	return (
		<Container>
			<Header>
				<Title styles='my-5' title={title} />
			</Header>
			<Login />
		</Container>
	);
}

export default LoginPage;
