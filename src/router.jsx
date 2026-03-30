import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Lazy loading des routes pour optimiser les performances
const HomePage = lazy(() => import("./Home.jsx"));
const Users = lazy(() => import("./Users.jsx"));
const About = lazy(() => import("./About.jsx"));

// Composant de chargement
const LoadingFallback = () => (
	<div style={{ padding: "40px", textAlign: "center" }}>
		<p>Chargement...</p>
	</div>
);

const HomePageContent = () => (
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
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<HomePageContent />
					</Suspense>
				),
			},
			{
				path: "users",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<Users />
					</Suspense>
				),
			},
			{
				path: "about",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "home",
				element: (
					<Suspense fallback={<LoadingFallback />}>
						<HomePage />
					</Suspense>
				),
			},
		],
	},
]);

console.time("Router initialization");
console.log("Router initialized with lazy loading");
console.timeEnd("Router initialization");
