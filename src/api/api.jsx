const API_BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Récupère la liste de tous les utilisateurs
 * @returns {Promise<Array>} Liste des utilisateurs
 */
export const fetchAllUsers = async () => {
	const response = await fetch(`${API_BASE_URL}/users`);
	if (!response.ok) throw new Error("API Error");
	return response.json();
};

/**
 * Récupère les détails d'un utilisateur spécifique
 * @param {number} id - ID de l'utilisateur
 * @returns {Promise<Object>} Détails de l'utilisateur
 */
export const fetchUserById = async (id) => {
	const response = await fetch(`${API_BASE_URL}/users/${id}`);
	if (!response.ok) throw new Error("API Error");
	return response.json();
};
