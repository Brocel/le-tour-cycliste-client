import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import bikeLogo from "../../assets/images/icons/bike-icon.png";
import { getSessionStorage } from "../../services/sessionStorageService";
import classes from "./style.module.css";
import UserComp from "./user";

function NavBar(props) {
	const [isConnected, setIsConnected] =
		useState(false);
	const [showMenu, setShowMenu] = useState(false);
	let user;

	useEffect(() => {
		if (getSessionStorage("user")) {
			user = getSessionStorage("user");
			setIsConnected(true);
		} else {
			setIsConnected(false);
		}
	}, [user]);

	function menuButtonHandler() {
		setShowMenu(showMenu ? false : true);
	}

	return (
		<>
			<Navbar
				bg='light'
				expand='lg'
				className={`${classes.navbar}`}
			>
				<Navbar.Brand href='/'>
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
		</>
	);
}

export default NavBar;
