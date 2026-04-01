import { useState, useEffect } from "react";

export default function UserSearch({ users }) {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (!query) {
			setResults([]);
			return;
		}
		const filtered = users.filter((u) =>
			u.username.toLowerCase().includes(query.toLowerCase()),
		);
		setResults(filtered);
	}, [query, users]);

	return (
		<div>
			<input
				type="text"
				placeholder="Recherche par utilisateur..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul>
				{results.map((user) => (
					<li key={user.id}>@{user.username}</li>
				))}
			</ul>
		</div>
	);
}
