import React from "react";
import classes from "./style.module.css";
import Title from "../../templates/structures/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function Join(props) {
	const joinTitle = "Rejoindre la partie";
	const joinLogo = (
		<FontAwesomeIcon
			icon={faRightToBracket}
			color={`var(--bkg-mid2-color)`}
      size="5x"
		/>
	);

	return (
		<div className={`${classes.joinContainer}`}>
			<Title
				styles={`${classes.joinTitle}`}
				title={joinTitle}
			/>
			{joinLogo}
		</div>
	);
}

export default Join;
