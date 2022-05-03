import React from "react";
import classes from "./style.module.css";
import Container from "../../components/templates/structures/container";
import Title from "../../components/templates/structures/title";
import Login from "../../components/home/login";

function LoginPage() {
	const title = "Login";

	return (
		<Container styles={`${classes.loginContainer}`}>
			<div className={`${classes.loginElement} p-2 rounded`}>
				<Title
					styles={`${classes.title}`}
					title={title}
				/>
				<Login />
			</div>
		</Container>
	);
}

export default LoginPage;
