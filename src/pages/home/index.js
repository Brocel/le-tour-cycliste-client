import React from "react";
import classes from "./style.module.css";
import Container from "../../components/templates/structures/container";
import Welcome from "../../components/home/welcome";
import ButtonEnter from "../../components/templates/buttons/ButtonEnter";

function Home() {
	return (
		<Container styles={`${classes.homeContainer}`}>
			<div
				className={`${classes.homeElement} p-3 rounded`}
			>
				<div className={`col w-100`}>
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
