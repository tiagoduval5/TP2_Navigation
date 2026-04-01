import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UserDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [id]);

	if (loading) return <p>Chargement des détails...</p>;
	if (!user) return <p>Utilisateur non trouvé</p>;

	return (
		<div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
			<button type="button" onClick={() => navigate("/users")}>← Retour à la liste</button>
			<h1>{user.name}</h1>
			<p>@{user.username}</p>
			<p>Email: {user.email}</p>
			<p>Téléphone: {user.phone}</p>
			<p>Site Web: {user.website}</p>
			<p>
				Adresse: {user.address.street}, {user.address.suite},{" "}
				{user.address.city} ({user.address.zipcode})
			</p>
			<p>Entreprise: {user.company.name}</p>
			<p>Slogan: {user.company.catchPhrase}</p>
		</div>
	);
}

export default UserDetails;
