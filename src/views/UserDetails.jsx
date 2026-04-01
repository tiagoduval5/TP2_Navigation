import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserById } from "../api/api.jsx";
import "../style/UserDetails.css";

function UserDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const startTime = performance.now();
		
		fetchUserById(id)
			.then((data) => {
				const duration = (performance.now() - startTime).toFixed(2);
				console.log(`✅ Détails de l'utilisateur chargés en ${duration}ms`);
				setUser(data);
				setError(false);
				setLoading(false);
			})
			.catch((error) => {
				const duration = (performance.now() - startTime).toFixed(2);
				console.error("❌ Erreur de chargement:", error.message, `(${duration}ms)`);
				setError(true);
				setUser(null);
				setLoading(false);
			});
	}, [id]);

	if (loading) return <p>Chargement des détails...</p>;
	
	if (error)
		return (
			<div className="error-container">
				<button type="button" onClick={() => navigate("/users")} className="back-button">
					← Retour à la liste
				</button>
				<div className="error-box">
					<h2>⚠️ Impossible de charger</h2>
					<p>Une erreur est survenue. Veuillez réessayer.</p>
				</div>
			</div>
		);
	
	if (!user) return <p>Utilisateur non trouvé</p>;

	return (
		<div className="user-details-container">
			<button type="button" onClick={() => navigate("/users")} className="back-button">
				← Retour à la liste
			</button>
			<div className="user-info">
				<h1>{user.name}</h1>
				<p className="user-username">@{user.username}</p>
				<p><strong>Email :</strong> {user.email}</p>
				<p><strong>Téléphone :</strong> {user.phone}</p>
				<p><strong>Site Web :</strong> {user.website}</p>
				<p>
					<strong>Adresse :</strong> {user.address.street}, {user.address.suite},{" "}
					{user.address.city} ({user.address.zipcode})
				</p>
				<p><strong>Entreprise :</strong> {user.company.name}</p>
				<p><strong>Slogan :</strong> {user.company.catchPhrase}</p>
			</div>
		</div>
	);
}

export default UserDetails;
