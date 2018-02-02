import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Trips.css";
import Well from "../../components/Well";

class Trips extends Component {
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
				<h1>Lets Go On An Adventure!</h1>
				<div className="container col-sm-offset-2 col-sm-8 col-sm-offset-2">
					<Well />
				</div>
			</Container>
		);
	}
}

export default Trips;
