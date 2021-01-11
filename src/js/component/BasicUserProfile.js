import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	return <img src={props.url} />;
}

Avatar.propTypes = {
	url: PropTypes.string
};

function UserName(props) {
	return (
		<div>
			<dl>
				<dt>Name</dt>
				<dd>{props.name}</dd>

				<dt>Last Name</dt>
				<dd>{props.lastName}</dd>

				<dt>Age</dt>
				<dd>{props.age}</dd>

				<dt>¿Permitido manejar?</dt>
				<dd>{props.age > 18 ? "Yes" : "No"} </dd>
			</dl>
		</div>
	);
}

UserName.propTypes = {
	name: PropTypes.string,
	lastName: PropTypes.string,
	age: PropTypes.number
};

function Bio(props) {
	return <div>{props.description}</div>;
}

Bio.propTypes = {
	description: PropTypes.string
};

class BasicUserProfile extends React.Component {
	constructor(props) {
		// Required step: always call the parent class' constructor
		super(props);
		alert("Primer método que se ejecuta en la etapa de montaje!");
		this.state = {
			avatarUrl: props.avatarUrl
				? props.avatarUrl
				: "https://media.istockphoto.com/photos/mr-who-picture-id619400810",
			name: props.userPersonalData.name
				? props.userPersonalData.name
				: "No Name",
			lastName: props.userPersonalData.lastName
				? props.userPersonalData.lastName
				: "No Lastname",
			age: props.userPersonalData.age ? props.userPersonalData.age : 31,
			description: props.description ? props.description : "Default text"
		};

		//In JavaScript, class methods are not bound by default. Therefore, it’s necessary to bind functions to the class instance.
		//Source: https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
		//Explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
		//https://www.w3schools.com/js/js_this.asp
		this.increaseAge = this.increaseAge.bind(this);
	}

	componentDidMount() {
		alert(
			"Esta una función que ocurre luego del constructor en la etapa de montaje!"
		);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.age > this.state.age) {
			alert("Soy Benjamin Button!");
		} else {
			alert("Estoy envejeciendo de modo natural!");
		}
	}

	componentWillUnmount() {
		alert("Un gusto, adiós!");
	}

	increaseAge(event) {
		alert("The age was increased by 5");

		this.setState({
			age: this.state.age + 5
		});
	}

	render() {
		return (
			<div>
				<Avatar url={this.state.avatarUrl} />
				<UserName
					name={this.state.name}
					lastName={this.state.lastName}
					age={this.state.age}
				/>
				<Bio description={this.state.description} />

				<button onClick={this.increaseAge}> Increase age by 5 </button>
			</div>
		); // Return statement to deliver a JSX expression
	}
}

BasicUserProfile.propTypes = {
	avatarUrl: PropTypes.string,
	userPersonalData: PropTypes.object,
	description: PropTypes.string
};

export default BasicUserProfile;
