import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Permissions.css";

class Permissions extends Component {
	state = {
		adventure: {}
	};

	componentDidMount() {
		API.getAdventure(this.props.match.params.id)
			.then(res => this.setState({ adventure: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<div className="container col-12-sm">
					<div className="jumbotron">
						<h1>Permissions</h1>
						<p>Permission 1</p>
						<p>Permission 2</p>
						<p>Permission 3</p>
						<p>Permission 4</p>
						<p>Permission 5</p>
						<p><a className="btn btn-primary btn-lg" role="button">Next</a></p>
					</div>
				</div>

				<nav id="footer" className="navbar navbar-default navbar-fixed-bottom">
					<div className="container">
						<a id="signout" href="index.html">Sign out</a>
					</div>
				</nav>
			</Container>
		);
	}
}

export default Permissions;
