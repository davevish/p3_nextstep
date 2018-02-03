import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Grid";
import API from "../../utils/API";
import "./Contact.css";
import "./formAction.PHP";

class Contact extends Component {
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
				<div>
					<div className="container">
						<form className="well form-horizontal" action=" " method="post"  id="contact_form">
							<fieldset>
								 {/*Form Name*/}
								<legend>Contact Us  Today!</legend>

								{/*Text input*/}
								<div className="form-group">
									<label className="col-md-4 control-label">First Name</label>
									<div className="col-md-4 inputGroupContainer">
										<div className="input-group">
											<span className="input-group-addon"><i className="glyphicon glyphicon-user"> </i></span>
											<input  name="first_name" placeholder="First Name" className="form-control"  type="text" />
										</div>
									</div>
								</div>

								{/*Text input*/}
								<div className="form-group">
									<label className="col-md-4 control-label" >Last Name</label>
									<div className="col-md-4 inputGroupContainer">
										<div className="input-group">
											<span className="input-group-addon"><i className="glyphicon glyphicon-user"> </i></span>
											<input name="last_name" placeholder="Last Name" className="form-control"  type="text" />
										</div>
									</div>
								</div>

								{/*Text input*/}
								<div className="form-group">
									<label className="col-md-4 control-label">Message</label>
									<div className="col-md-4 inputGroupContainer">
										<div className="input-group">
											<span className="input-group-addon"><i className="glyphicon glyphicon-pencil"> </i></span>
											<textarea className="form-control" name="comment" placeholder="Type Your Message Here"> </textarea>
										</div>
									</div>
								</div>

								{/*Success message*/}
								<div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"> </i> Thanks for contacting us, we will get back to you shortly.</div>

								{/*Button*/}
								<div className="form-group">
									<label className="col-md-4 control-label"> </label>
									<div className="col-md-4" id="send">
										<button type="submit" className="btn btn-warning" >Send<span className="glyphicon glyphicon-send"> </span></button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</Container>
		);
	}
}

export default Contact;
