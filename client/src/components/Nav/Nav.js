import React from "react";
import "./Nav.css";

const Nav = () =>
	<nav className="navbar navbar-inverse">
		<div className="container-fluid">
			<p> </p>
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"> </span>
					<span className="icon-bar"> </span>
					<span className="icon-bar"> </span>
				</button>
				<a className="navbar-brand" href="/">Footsteps</a>
			</div>
			<div className="collapse navbar-collapse" id="myNavbar">
				<ul className="nav navbar-nav navbar-right">
					<li><a href="/#">Home</a></li>
					<li><a href="/Rules">Rules</a></li>
					<li><a href="/Trips">Adventures</a></li>
					<li><a href="/Map">Map</a></li>
					<li><a href="/Task">Task</a></li>
					<li><a href="/Contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>;

export default Nav;
