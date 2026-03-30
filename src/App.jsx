import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";

function App() {
	console.time("App component render");
	
	const appConfig = useMemo(() => ({
		version: "1.0.0",
		name: "Navigation App"
	}), []);
	
	console.log("App mounted", appConfig);
	console.timeEnd("App component render");
	
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
