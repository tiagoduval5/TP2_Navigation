import { useMemo } from "react";

function Users() {
    console.time("Users component render");
    
    const users = useMemo(() => [
        "Utilisateur 1",
        "Utilisateur 2",
        "Utilisateur 3"
    ], []);
    
    console.timeEnd("Users component render");
    
    return (
        <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>Page des utilisateurs</h1>
            <p>Voici la liste de nos utilisateurs :</p>
            <ul>
                {users.map((user, idx) => (
                    <li key={idx}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;