import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Copyright from "./copyright";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<Card /> 
			<Copyright /> 
		</>
	
	);
};

export default Home;
