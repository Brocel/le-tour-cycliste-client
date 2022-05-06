import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveSessionStorage } from "../../../services/sessionStorageService";
import { User } from "../../../models/User";
import FormContainer from "../../templates/structures/container/formContainer";
import Form from "../../templates/forms/Form";
import Input from "../../templates/forms/Input";
import SumbitButton from "../../templates/buttons/SubmitButton";

function Login(props) {
	let navigate = useNavigate();

	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");

	const userIsConnected = useSelector(
		(state) => state.user.userIsConnected
	);

	useEffect(() => {
		if (userIsConnected !== 0) {
			navigate("/home");
		}
	}, [userIsConnected, navigate]);

	const saveUserState = () => {

		if(inputValue !== "") {
			let id = Math.floor(Math.random() * 100 + 1);

			dispatch({
				type: "USER_IS_CONNECTED",
				userName: inputValue,
				userId: id,
			});
	
			let user = new User(id, inputValue);
	
			saveSessionStorage("user", user);
		}
		
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
