import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSessionStorage } from "../../services/sessionStorageService";
import Navbar from "react-bootstrap/Navbar";
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

	const logout = () => {
		dispatch({
			type: "USER_IS_NOT_CONNECTED",
		});
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
				<Navbar.Brand
					onClick={() => {
						navigate("/");
					}}
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
					{storedUser ? (
						<UserComp
							user={storedUser}
							onClick={logout}
						/>
					) : (
						<img
							src={bikeLogo}
							alt='Logo'
							width='35'
							height='35'
							className='d-inline-block align-top'
						/>
					)}
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavBar;
