import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Container } from "../../components/Grid";
import "./Home.css";
import foot from "../../images/f.png";

class Home extends Component {
	state = {
	adventure: [],
	location: "",
	checkpoints: ""
	};

	componentDidMount() {
		API.getAdventure(this.props.match.params.id)
			.then(res => this.setState({ adventure: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<div className="container col-sm-12" id="stuff">
					<h1>Footsteps</h1>

					<h4>A new way to interact with your surroundings!</h4>

					<img id="logo" src={foot} alt={"Logo"}/>

					<div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark">Signin</div>

				</div>
			</Container>
		);
	}
}

export default Home;
