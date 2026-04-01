import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
	const [users, setUsers] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	if (loading) return <p>Chargement des utilisateurs...</p>;

	const filtered = users.filter((u) =>
		u.username.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
			<h1>Liste des utilisateurs</h1>
			<input
				type="text"
				placeholder="Recherche par username..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
			/>
			<ul>
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
