import React from "react";
import "./Footer.css";

const Nav = () =>
	<nav id="footer" className="navbar navbar-default navbar-fixed-bottom">
		<div className="container">
			<div className="row">
				<a id="signout" href="/">Sign Out | </a>
				<a id="contact" href="/contact">Contact</a>
			</div>
		</div>
	</nav>;

export default Nav;
