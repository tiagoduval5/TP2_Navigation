import { useMemo } from "react";

function About() {
	// Mémoriser les données pour ne pas les recalculer à chaque rendu
	const pageData = useMemo(() => ({
		title: "À propos de nous",
		message: "Nous sommes une entreprise dédiée à fournir les meilleurs services à nos clients."
	}), []);

	return (
		<div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>{pageData.title}</h1>
			<p>{pageData.message}</p>
		</div>
	);
}

export default About;