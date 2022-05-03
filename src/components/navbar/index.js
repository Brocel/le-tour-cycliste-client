import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import bikeLogo from "../../assets/images/icons/bike-icon.png";
import classes from "./style.module.css";
import UserComp from "./user";

function NavBar(props) {
	const [user, setUser] = useState();

	useEffect(() => {
		if (props.user !== undefined) {
			setUser(props.user);
		}
	}, [props.user]);

	return (
		<>
			<Navbar
				bg='light'
				expand='lg'
				className={`${classes.navbar}`}
			>
				<Navbar.Brand
					href='/'
					style={{
						color: "var(--color-text-secondary)",
					}}
				>
					<img
						src={bikeLogo}
						alt='Logo'
						width='35'
						height='35'
						className='d-inline-block align-top'
					/>{" "}
					Le Tour Cycliste
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<UserComp user={user} />
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavBar;
