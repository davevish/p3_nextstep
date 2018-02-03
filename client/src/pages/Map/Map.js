import React, { Component } from "react";
import {Container } from "../../components/Grid";
import "./Map.css";
const google = window.google;
const marker = window.marker;
let uluru = {lat: 34.037435, lng: -84.068132};

class Map extends Component {
	constructor(props){
		super(props);
		this.state = {
			adventure: [],
			location: "",
			checkpoints: "",
			x: document.getElementById("demo")
		};
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
		} else {
			this.setState({x: document.getElementById("demo").innerHTML("Geolocation is not supported by this browser.")})
		}
	}

	componentDidMount(){

		let marker = new window.google.maps.Marker({
			position: { lat: 34.037435, lng: -84.068132},
			map: window.map
		});

		this.getLocation();
	}
	// window.map

	showPosition(position) {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		let latlon = new window.google.maps.LatLng(lat, lon);
		// let map = document.getElementById('map');
		// let uluru = {lat: 34.037435, lng: -84.068132};

		let myOptions = {
			center:latlon,zoom:17,
			zoomControl: true,
			mapTypeId: window.google.maps.MapTypeId.ROADMAP,
			mapTypeControl:true,
			navigationControlOptions:{style:window.google.maps.NavigationControlStyle.SMALL}
		};

		let map = new window.google.maps.Map(document.getElementById("map"), myOptions);
		let marker = new window.google.maps.Marker({
			position:latlon, uluru,
			map:map,
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				scale: 5
			},
			title:"You are here!"
		});
	}

	showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				this.setState({x: document.getElementById("demo").innerHTML("User denied the request for Geolocation.")});
				break;
			case error.POSITION_UNAVAILABLE:
				this.setState({x: document.getElementById("demo").innerHTML("Location information is unavailable.")});
				break;
			case error.TIMEOUT:
				this.setState({x: document.getElementById("demo").innerHTML("The request to get user location timed out.")});
				break;
			case error.UNKNOWN_ERROR:
				this.setState({x: document.getElementById("demo").innerHTML("User denied the request for Geolocation.")});
				break;
		}
	}

	render() {
		return (
			<Container fluid>
				<div className="row">
					<div className="container col-sm-12">
						<div id="map"> </div>
					</div>
				</div>
			</Container>
		);
	}
}

export default Map;

// https://jsfiddle.net/api/post/library/pure/
