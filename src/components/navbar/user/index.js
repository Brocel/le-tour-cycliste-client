import React, { useState } from "react";
import classes from "./style.module.css";

function UserComp(props) {
	var user = props.user;
	var id;
	var name;
	var firstLetter;

	if (user !== undefined) {
		name = user.name;
		id = user.id;
		firstLetter = name.split("", 1);
	}

	return (
		<div className={`${classes.user}`}>
			<button
				className='btn justify-content-center shadow-none'
				type='button'
				data-toggle='dropdown'
				aria-haspopup='true'
				aria-expanded='false'
			>
				{firstLetter}
			</button>
			<div
				className={`${classes.menu} dropdown-menu dropdown-menu-right border-0`}
			>
				<h4>{name}</h4>
				<h5>
					<small>Dernière Visite: </small>
				</h5>
				<h5>
					<small>Date</small>
				</h5>
				<h5>
					<small>Profil</small>
				</h5>
			</div>
		</div>
	);
}

export default UserComp;
