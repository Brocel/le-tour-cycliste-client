import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate,
} from "react-router-dom";
import Background from "../components/templates/background";
import Home from "../pages/home";
import { useSelector } from "react-redux";

function AppRoutes() {
	const userId = useSelector(
		(state) => state.user.userId
	);

	return (
		<Router>
			{userId > 0 ? (
				<Background>
					<Routes>
						<Route
							path='/'
							element={<Navigate to='/home' />}
							exact
						></Route>

						{/* Home */}
						<Route
							path={`/home`}
							element={Home}
							exact
						/>

						{/* Login */}
					</Routes>
				</Background>
			) : (
				<Background>Login Component TODO</Background>
			)}
		</Router>
	);
}

export default AppRoutes;
