/* import React from "react";
import {useParams, useNavigate, useLocation, BrowserRouter as Router} from "react-router-dom";


function About() {
	const {location} = useLocation();
	const {history} = useNavigate();
	const {match} = useParams();

	return (
		<Router>
			<div>
				<h1>About</h1>
				<pre>{JSON.stringify(match, null, 2)}</pre>
				<pre>{JSON.stringify(location, null, 2)}</pre>
				<pre>{JSON.stringify(history, null, 2)}</pre>
			</div>
		</Router>
	);
}

export default About; */

import React from "react";

function About() {
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}

export default About;