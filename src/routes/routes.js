import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate,
} from "react-router-dom";
import Background from "../components/templates/background";
import NavBar from "../components/navbar";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import { getSessionStorage } from "../services/sessionStorageService";
import { User } from "../models/User";

function AppRoutes() {
	let user = new User(0, "");
	let isConnected = false;

	if (getSessionStorage("user")) {
		user = getSessionStorage("user");
		isConnected = true;
	}

	return (
		<Router>
			<Background>
				<NavBar />
				<Routes>
					{isConnected ? (
						<Route
							path='/'
							element={<Navigate to='/home' />}
							exact
						/>
					) : (
						<Route
							path='/'
							element={<Navigate to='/login' />}
							exact
						/>
					)}
					<Route
						path='/'
						element={<Navigate to='/login' />}
						exact
					/>

					{/* Home */}
					<Route
						path={`/home`}
						element={<Home />}
						exact
					/>

					{/* Login */}
					<Route
						path={`/login`}
						element={<LoginPage />}
						exact
					/>
				</Routes>
			</Background>
		</Router>
	);
}

export default AppRoutes;
