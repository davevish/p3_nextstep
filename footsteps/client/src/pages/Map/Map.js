import React, { Component } from "react";
import {Container } from "../../components/Grid";

class Map extends Component {
	state = {
		adventure: [],
		location: "",
		checkpoints: ""
	};

	render() {
		return (
			<Container fluid>
				<div className="row">
					<div>
						{/*<button onClick="getLocation()">Find Me</button>*/}
						{/*<div id="mapholder"> </div>*/}
					</div>
				</div>
			</Container>
		);
	}
}

export default Map;