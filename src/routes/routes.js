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
import ChatRoom from "../pages/chatroom";
import { getSessionStorage } from "../services/sessionStorageService";

function AppRoutes() {
	let isConnected = false;

	if (getSessionStorage("user")) {
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

					{/* ChatRoom */}
					<Route
						path={`/chatroom`}
						element={<ChatRoom />}
						exact
					/>
				</Routes>
			</Background>
		</Router>
	);
}

export default AppRoutes;
