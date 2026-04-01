import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar-nav">
			<NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				Accueil
			</NavLink>
			<span className="nav-separator">|</span>
			<NavLink to="/users" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				Users
			</NavLink>
			<span className="nav-separator">|</span>
			<NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				About
			</NavLink>
			<span className="nav-separator">|</span>
			<NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
				Home
			</NavLink>
		</nav>
	);
}

export default Navbar;
