import { memo } from "react";

function Home() {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<h1>Bienvenue sur le site</h1>
				<p>Découvrez ma super page d'exemple</p>
				<button type="button" className="cta-button">
					Commencer
				</button>
			</div>
		</section>
	);
}

export default memo(Home);