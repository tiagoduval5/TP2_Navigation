import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers } from "../api/api.jsx";
import "../style/Users.css";

function Users() {
	const [users, setUsers] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchUsers = () => {
		setLoading(true);
		setError(false);
		const startTime = performance.now();
		
		fetchAllUsers()
			.then((data) => {
				const duration = (performance.now() - startTime).toFixed(2);
				console.log(`✅ ${data.length} utilisateurs chargés en ${duration}ms`);
				setUsers(data);
				setError(false);
				setLoading(false);
			})
			.catch((error) => {
				const duration = (performance.now() - startTime).toFixed(2);
				console.error("❌ Erreur de chargement:", error.message, `(${duration}ms)`);
				setError(true);
				setUsers([]);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading) return <p>Chargement des utilisateurs...</p>;

	if (error)
		return (
			<div className="error-container">
				<div className="error-box">
					<h2>⚠️ Impossible de charger</h2>
					<p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
					<button onClick={fetchUsers} className="retry-button">
						🔄 Réessayer
					</button>
				</div>
			</div>
		);

	const filtered = users.filter((u) =>
		u.username.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<div className="users-container">
			<h1>Liste des utilisateurs</h1>
			<input
				type="text"
				placeholder="Recherche par username..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="users-search"
			/>
			<ul className="users-list">
				{filtered.map((user) => (
					<li key={user.id}>
						<Link to={`/users/${user.id}`}>@{user.username}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Users;
