import { useMemo } from "react";

function About() {
    console.time("About component render");
    
    const content = useMemo(() => ({
        title: "À propos de nous",
        message: "Nous sommes une entreprise dédiée à fournir les meilleurs services à nos clients."
    }), []);
    
    console.timeEnd("About component render");
    
    return (
        <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>{content.title}</h1>
            <p>{content.message}</p>
        </div>
    );
}

export default About;