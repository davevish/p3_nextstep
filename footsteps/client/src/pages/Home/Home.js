import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import {Container } from "../../components/Grid";
import "./Home.css";

class Home extends Component {
	state = {
	adventure: [],
	location: "",
	checkpoints: ""
	};

	render() {
		return (
			<Container fluid>

				<h1>Footsteps</h1>

				<h4>A new way to interact with your surroundings!</h4>

				<div className="row">
					<div className="g-signin2" id="google" data-onsuccess="onSignIn" data-theme="dark">Signin</div>
				</div>
				<div className="row" id="logo"> </div>
			</Container>
		);
	}
}

export default Home;
