import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { saveSessionStorage } from "../../../services/sessionStorageService";
import { User } from "../../../models/User";
import FormContainer from "../../templates/structures/container/formContainer";
import Form from "../../templates/forms/Form";
import Input from "../../templates/forms/Input";
import SumbitButton from "../../templates/buttons/SubmitButton";

function Login(props) {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const userIsConnected = useSelector(
		(state) => state.user.userIsConnected
	);
	const userId = useSelector((state) => state.user.id);
	const userName = useSelector(
		(state) => state.user.name
	);

	const saveUserState = () => {
		let id = Math.floor(Math.random() * 100 + 1);

		dispatch({
			type: "USER_IS_CONNECTED",
			userName: inputValue,
			userId: id,
		});

		let user = new User(id, inputValue);

		saveSessionStorage("user", user);
	};

	const updateInputValue = (event) => {
		const inputGoal = event.target.validity.valid
			? event.target.value
			: inputValue;
		setInputValue(inputGoal);
	};

	const handleOnKeyDown = (event) => {
		var code = event.keyCode || event.charCode;
		if (code === 13) {
			saveUserState();
		}
	};

	const handleOnClick = () => {
		saveUserState();
	};

	if (
		userIsConnected !== 0 &&
		userId !== 0 &&
		userName !== ""
	) {
		console.log("userIsConnected: " + userIsConnected);
		console.log("userId: " + userId);
		console.log("userName: " + userName);
		return <Navigate to='/home' />;
	}

	return (
		<>
			<FormContainer>
				<Form>
					<div className={`col w-100`}>
						<div
							className={`row justify-content-center align-items-center`}
						>
							<Input
								id='name'
								pattern='[a-zA-z0-9]*'
								maxLength='10'
								type='text'
								placeholder='Enter Your Name'
								onChange={updateInputValue}
								onKeyDown={handleOnKeyDown}
								value={inputValue}
							/>
						</div>
						<div
							className={`row justify-content-center align-items-center`}
						>
							<SumbitButton
								onClick={handleOnClick}
								buttonText='Login'
							/>
						</div>
					</div>
				</Form>
			</FormContainer>
		</>
	);
}

export default Login;
