import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
	const openMenu = () => {
		document.querySelector(".sidebar").classList.add("open");
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	};
	const closeMenu = () => {
		document.querySelector(".sidebar").classList.remove("open");
		document.body.style.backgroundColor = "white";
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
					<div className="content">content</div>
				</main>
				<footer className="footer">All rights reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
