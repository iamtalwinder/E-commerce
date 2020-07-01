import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
	const openMenu = () => {
		document.querySelector(".sidebar").classList.add("open");
	};
	const closeMenu = () => {
		document.querySelector(".sidebar").classList.remove("open");
	};

	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="header">
					<div className="brand">
						<button onClick={openMenu}>&#9776;</button>
						<Link className="nav-link" to="/">
							amazon
						</Link>
					</div>
					<div className="header-links">
						<Link className="nav-link" to="/cart">
							Cart
						</Link>
						<Link className="nav-link" to="/sign-in">
							Sign In
						</Link>
					</div>
				</header>
				<aside className="sidebar">
					<h3>Shopping Categories</h3>
					<button className="sidebar-close-button" onClick={closeMenu}>
						x
					</button>
					<ul>
						<li>
							<Link className="side-link" to="/pants">
								Pants
							</Link>
						</li>

						<li>
							<Link className="side-link" to="/shirts">
								Shirts
							</Link>
						</li>
					</ul>
				</aside>
				<main className="main">
					<Route exact path="/" component={HomeScreen} />
				</main>
				<footer className="footer">All rights reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
