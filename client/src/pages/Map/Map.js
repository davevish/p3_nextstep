import React, { Component } from "react";
import {Container } from "../../components/Grid";
import "./Map.css";
const google = window.google;

class Map extends Component {

	constructor(props){
		super(props);
		this.state = {
			adventure: [],
			location: "",
			checkpoints: "",
			x: document.getElementById("demo"),
		};
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
		} else {
			// this.state.x.innerHTML = "Geolocation is not supported by this browser.";
			this.setState({x: document.getElementById("demo").innerHTML("Geolocation is not supported by this browser.")})
		}
	}

	componentDidMount(){
		// window.map = new window.google.maps.Map(document.getElementById('map'), {
		// 	center: { lat: 33.753746, lng: -84.386330 },
		// 	zoom: 10,
		// 	mapTypeId: 'roadmap',
		// 	zoomControl: true
		// });
		//
		let marker = new window.google.maps.Marker({
			position: { lat: 34.037435, lng: -84.068132},
			map: window.map
		});

		this.getLocation();
	}

	// window.map

	showPosition(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var latlon = new window.google.maps.LatLng(lat, lon);
		var mapholder = document.getElementById('map');

		var myOptions = {
			center:latlon,zoom:17,
			zoomControl: true,
			mapTypeId: window.google.maps.MapTypeId.ROADMAP,
			mapTypeControl:true,
			navigationControlOptions:{style:window.google.maps.NavigationControlStyle.SMALL}
		}

		var map = new window.google.maps.Map(document.getElementById("map"), myOptions);
		var marker = new window.google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	}

	showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				// this.state.x.innerHTML = "User denied the request for Geolocation.";
				this.setState({x: document.getElementById("demo").innerHTML("User denied the request for Geolocation.")});
				break;
			case error.POSITION_UNAVAILABLE:
				// this.state.x.innerHTML = "Location information is unavailable.";
				this.setState({x: document.getElementById("demo").innerHTML("Location information is unavailable.")});
				break;
			case error.TIMEOUT:
				// this.state.x.innerHTML = "The request to get user location timed out.";
				this.setState({x: document.getElementById("demo").innerHTML("The request to get user location timed out.")});
				break;
			case error.UNKNOWN_ERROR:
				// this.state.x.innerHTML = "An unknown error occurred.";
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
