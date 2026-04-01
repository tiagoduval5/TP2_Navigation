import { NavLink } from "react-router-dom";
import { useMemo, memo } from "react";

function Navbar() {
	const navItems = useMemo(() => [
		{ path: "/", label: "Accueil" },
		{ path: "/users", label: "Users" },
		{ path: "/about", label: "About" },
		{ path: "/home", label: "Home" },
	], []);

	return (
		<nav className="navbar-nav">
			{navItems.map((item, index) => (
				<div key={item.path}>
					<NavLink to={item.path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
						{item.label}
					</NavLink>
					{index < navItems.length - 1 && <span className="nav-separator">|</span>}
				</div>
			))}
		</nav>
	);
}

export default memo(Navbar);
