import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const Home = lazy(() => import("./Home.jsx"));
const Users = lazy(() => import("./Users.jsx"));
const UserDetails = lazy(() => import("./UserDetails.jsx"));
const About = lazy(() => import("./About.jsx"));

function Loading() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <p>⏳ Chargement...</p>
    </div>
  );
}

const HomePage = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Bienvenue sur le site</h1>
      <p>Découvrez ma super page d'exemple</p>
      <button type="button" className="cta-button">
        Commencer
      </button>
    </div>
  </section>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: (
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "users/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);