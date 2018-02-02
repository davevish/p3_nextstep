import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Task.css";

class Task extends Component {
	state = {
		book: {}
	};

	componentDidMount() {
		API.getAdventure(this.props.match.params.id)
			.then(res => this.setState({ adventure: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container fluid>
				<h1>Testing Task</h1>
			</Container>
		);
	}
}

export default Task;
