import React from "react";
import UserProfile from "./UserProfile";
import BasicUserProfile from "./BasicUserProfile";
import NewUserProfile from "./NewUserProfile";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Hello there! Welcome to first functional component! </h1>
			<NewUserProfile
				avatarUrl={rigoImage}
				userPersonalData={{
					name: "Erwin",
					lastName: "Aguero",
					age: 0
				}}
				description={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
				}
			/>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
