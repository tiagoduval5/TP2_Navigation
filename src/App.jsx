import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Users from "./Users.jsx";
import About from "./About.jsx";

function App() {
	return (
		<BrowserRouter>
			<nav style={{ padding: "1rem", background: "#f4f4f4" }}>
				<Link to="/">Accueil</Link> | <Link to="/users"> Users</Link> |{" "}
				<Link to="/about"> About</Link>
			</nav>

			<Routes>
				<Route
					path="/"
					element={
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
					}
				/>

				<Route path="/users" element={<Users />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
