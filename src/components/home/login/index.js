import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FormContainer from "../../templates/structures/container/formContainer";
import Form from "../../templates/forms/Form";
import Input from "../../templates/forms/Input";
import SumbitButton from "../../templates/forms/SubmitButton";

function Login() {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const userIsConnected = useSelector(
		(state) => state.user.userIsConnected
	);
	const userId = useSelector((state) => state.user.id);
	const userName = useSelector(
		(state) => state.user.name
	);

	const updateInputValue = (event) => {
		const inputGoal = event.target.validity.valid
			? event.target.value
			: inputValue;
		setInputValue(inputGoal);
	};

	const handleOnKeyDown = (event) => {
		var code = event.keyCode || event.charCode;
		if (code === 13) {
			dispatch({
				type: "USER_IS_CONNECTED",
				userName: inputValue,
				userId: Math.floor(Math.random() * 100 + 1),
			});
		}
	};

	const handleOnClick = () => {
		dispatch({
			type: "USER_IS_CONNECTED",
			userName: inputValue,
			userId: Math.floor(Math.random() * 100 + 1),
		});
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
					<div className={`col w-100 input-group`}>
						<label>User Name: </label>
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
						<SumbitButton
							onClick={handleOnClick}
							buttonText='Login'
						/>
					</div>
				</Form>
			</FormContainer>
		</>
	);
}

export default Login;
