import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const Home = lazy(() => import("../views/Home.jsx"));
const Users = lazy(() => import("../views/Users.jsx"));
const UserDetails = lazy(() => import("../views/UserDetails.jsx"));
const About = lazy(() => import("../views/About.jsx"));

function Loading() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <p>⏳ Chargement...</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )
      },
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