import {
	Routes,
	Route,
	BrowserRouter as Router,
	Navigate,
} from "react-router-dom";
import Background from "../components/templates/background";
import Home from "../pages/home";
import LoginPage from "../pages/login";

function AppRoutes() {
	return (
		<Router>
			<Background>
				<Routes>
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
