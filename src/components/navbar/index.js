import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	getSessionStorage,
	removeSessionStorage,
} from "../../services/sessionStorageService";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import bikeLogo from "../../assets/images/icons/bike-icon.png";
import classes from "./style.module.css";
import UserComp from "./user";

function NavBar(props) {
	let navigate = useNavigate();

	const dispatch = useDispatch();

	const isConnected = useSelector(
		(state) => state.user.userIsConnected
	);

	const storedUser = getSessionStorage("user");
	const [user, setUser] = useState();

	const navigateHome = () => {
		navigate("/");
	};

	const navigateLogin = () => {
		navigate("/login");
	};

	const logout = () => {
		dispatch({
			type: "USER_IS_NOT_CONNECTED",
		});
		removeSessionStorage("user");
		navigateLogin();
	};

	useEffect(() => {
		if (isConnected === 1) {
			console.log("isConnected: " + isConnected);
			setUser(storedUser);
		}
	}, [isConnected]); // eslint-disable-line

	return (
		<>
			<Navbar
				bg='light'
				expand='lg'
				className={`${classes.navbar}`}
			>
				<Navbar.Brand>
					<Nav.Link
						onClick={navigateHome}
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
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				{storedUser ? (
					<Navbar.Collapse className='justify-content-end'>
						<UserComp
							user={storedUser}
							onClick={logout}
						/>
					</Navbar.Collapse>
				) : (
					<Navbar.Collapse className='justify-content-end'>
						<img
							src={bikeLogo}
							alt='Logo'
							width='35'
							height='35'
							className='d-inline-block align-top'
						/>
					</Navbar.Collapse>
				)}
			</Navbar>
		</>
	);
}

export default NavBar;
