import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Rules.css";

class Rules extends Component {
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
					<h1>How Does This Work?</h1>
					<p>We use your location to interact with your surroundings!</p>
					<p>When you go to a marker on the map, you will have to do a task to mark the location as complete.</p>
					<p>Once all tasks are done, you complete the adventure!</p>
					<p>Our hope is to pioneer a new way for you to explore your environment in a fun way.</p>
					<p>Enjoy!</p>
					<p><a className="btn btn-primary btn-lg" role="button" href="/Trips">Next</a></p>
				</div>
			</div>
		</Container>
		);
	}
}

export default Rules;
