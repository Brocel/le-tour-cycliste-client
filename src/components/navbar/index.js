import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory } from "react-router-dom";
import bikeLogo from "../../assets/images/icons/bike-icon.png";
import { getSessionStorage } from "../../services/sessionStorageService";
import { User } from "../../models/User";
import classes from "./style.module.css";
import UserComp from "./user";

function NavBar(props) {
	const [isEnabled, setIsEnabled] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [user, setUser] = useState(new User());

	useEffect(() => {
		if (getSessionStorage("user")) {
			setUser(getSessionStorage("user"));
			setIsEnabled(true);
		} else {
			setIsEnabled(false);
		}
	}, []);

	console.log("isEnabled: " + isEnabled);

	function menuButtonHandler() {
		setShowMenu(showMenu ? false : true);
	}

	return (
		<>
			{isEnabled ? (
				<Navbar
					bg='light'
					expand='lg'
					className={`${classes.navbar}`}
				>
					<Navbar.Brand href='/home'>
						<img
							src={bikeLogo}
							alt='Logo'
							width='35'
							height='35'
							className='d-inline-block align-top'
						/>{" "}
						Le Tour Cycliste
					</Navbar.Brand>
				</Navbar>
			) : (
				<Navbar
					bg='light'
					expand='lg'
					className={`${classes.navbar}`}
				>
					<Navbar.Brand href='/login'>
						<img
							src={bikeLogo}
							alt='Logo'
							width='35'
							height='35'
							className='d-inline-block align-top'
						/>{" "}
						Le Tour Cycliste
					</Navbar.Brand>
				</Navbar>
			)}
		</>
	);
}

export default NavBar;
