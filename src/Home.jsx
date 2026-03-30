import { useMemo } from "react";

function Home() {
	// Mémoriser les données pour ne pas les recalculer à chaque rendu
	const pageData = useMemo(() => ({
		title: "Page d'accueil",
		message: "Bienvenue sur la page d'accueil de notre site !"
	}), []);

	return (
		<div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>{pageData.title}</h1>
			<p>{pageData.message}</p>
		</div>
	);
}

export default Home;