import { useMemo } from "react";

function Home() {
    console.time("Home component render");
    
    const content = useMemo(() => ({
        title: "Page d'accueil",
        message: "Bienvenue sur la page d'accueil de notre site !"
    }), []);
    
    console.timeEnd("Home component render");
    
    return (
        <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", color: "#333"}}>
            <h1>{content.title}</h1>
            <p>{content.message}</p>
        </div>
    );
}

export default Home;