import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import About from "./About.jsx";

const HomePage = () => (
	<>
		<section className="hero-section">
			<div className="hero-content">
				<h1>Bienvenue sur le site</h1>
				<p>Découvrez ma super page d'exemple</p>
				<button type="button" className="cta-button">
					Commencer
				</button>
			</div>
		</section>

		<section className="main-content">
			<div className="content-container">
				<h3>Nos Services</h3>
				<div className="cards-grid">
					<div className="card">
						<h3>Service 1</h3>
						<p>Carte exemple</p>
					</div>
					<div className="card">
						<h3>Service 2</h3>
						<p>Carte exemple</p>
					</div>
					<div className="card">
						<h3>Service 3</h3>
						<p>Carte exemple</p>
					</div>
				</div>
			</div>
		</section>
	</>
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "home",
				element: <Home />,
			},
		],
	},
]);
