import { useMemo } from "react";

function Users() {
	// Mémoriser la liste des utilisateurs pour ne pas la recalculer à chaque rendu
	const usersList = useMemo(() => [
		"Utilisateur 1",
		"Utilisateur 2",
		"Utilisateur 3"
	], []);

	return (
		<div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>Page des utilisateurs</h1>
			<p>Voici la liste de nos utilisateurs :</p>
			<ul>
				{usersList.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</div>
	);
}

export default Users;