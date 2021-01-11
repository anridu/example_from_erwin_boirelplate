import React, { useEffect, useState } from "react";
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

let NewUserProfile = props => {
	const [avatarUrl, setAvatarUrl] = useState(
		props.avatarUrl ||
			"https://media.istockphoto.com/photos/mr-who-picture-id619400810"
	);
	const [name, setName] = useState(props.userPersonalData.name || "No name");
	const [lastName, setLastName] = useState(
		props.userPersonalData.lastName || "No lastname"
	);
	const [age, setAge] = useState(props.userPersonalData.age || 15);
	const [description, setDescription] = useState(
		props.description ||
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	);

	useEffect(() => {
		//Executed after each render without conditions
		alert("useEffect después de cada render!");
	});

	useEffect(() => {
		//Exectuted only once
		alert("Se ejecuta una sola vez! DidMount :) :)");
		return () => alert("Bye bye!"); //clearInterval(interval); //Clean up function executed after the component is not being use anymore.
	}, []);

	useEffect(
		() => {
			//Exectuted when the variable value changes.
			alert(`La edad aumentó nuevamente en ${5} y es ${age}`);
		},
		[age]
	);

	return (
		<div>
			<Avatar url={avatarUrl} />
			<UserName name={name} lastName={lastName} age={age} />
			<Bio description={description} />
			<button onClick={() => setAge(age + 5)}> Increase age by 5 </button>
		</div>
	);
};

NewUserProfile.propTypes = {
	avatarUrl: PropTypes.string,
	userPersonalData: PropTypes.object,
	description: PropTypes.string
};

export default NewUserProfile;
