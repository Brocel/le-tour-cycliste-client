import React from "react";
import AppRoutes from "./routes/routes";
import "./assets/styles/general.css";
import { Provider } from "react-redux";
import store from "./stores";

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}

export default App;
