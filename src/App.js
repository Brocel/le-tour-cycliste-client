import React from "react";
import Routes from "./routes/routes";
import "./assets/styles/general.css";
import { Provider } from "react-redux";
import store from "./stores";

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;