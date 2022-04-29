import React from "react";
import classes from "./style.module.css";
import Container from "../../components/templates/structures/container";
import Welcome from "../../components/home/welcome";
import Title from "../../components/templates/structures/title";
import ButtonEnter from "../../components/templates/buttons/ButtonEnter";

function Home() {
	const title = "Le Tour Cycliste";

	return (
		<Container styles={`${classes.homeContainer}`}>
			<div
				className={`${classes.homeElement} p-5 rounded`}
			>
				<div className={`col w-100`}>
					<div
						className={`row justify-content-center align-items-center`}
					>
						<Title
							styles={`${classes.title}`}
							title={title}
						/>
					</div>
					<div
						className={`row justify-content-center align-items-center`}
					>
						<Welcome />
					</div>
					<div
						className={`row justify-content-center align-items-center`}
					>
						<ButtonEnter />
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Home;
