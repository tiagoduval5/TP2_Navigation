import './App.css'

function App() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue sur le site</h1>
          <p>Découvrez ma super page d'exemple</p>
          <button className="cta-button">Commencer</button>
        </div>
      </section>

      <section className="main-content">
        <div className="content-container">
          <h3>Nos Services</h3>
          <div className="cards-grid">
            <div className="card">
              <h3>Service 1</h3>
              <p>Carte exemple</p>
            </div>
            <div className="card">
              <h3>Service 2</h3>
              <p>Carte exemple</p>
            </div>
            <div className="card">
              <h3>Service 3</h3>
              <p>Carte exemple</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
