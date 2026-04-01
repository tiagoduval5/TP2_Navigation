import { useMemo } from "react";
import "../style/About.css";

function About() {
	// Mémoriser les données pour ne pas les recalculer à chaque rendu
	const pageData = useMemo(
		() => ({
			title: "À propos de nous",
			message:
				"Nous sommes une entreprise dédiée à fournir les meilleurs services à nos clients.",
		}),
		[],
	);

	return (
		<div className="about-container">
			<h1>{pageData.title}</h1>
			<p>{pageData.message}</p>
		</div>
	);
}

export default About;
