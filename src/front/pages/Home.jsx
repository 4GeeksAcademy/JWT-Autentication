import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {


	return (
		<div className="container mt-5">
					<h1>Home</h1>
			<div className="row">
				<div className="col-md-1">
					<Link to="/signup">Signup</Link>
				</div>
				<div className="col-md-1">
					<Link to="/login">Login</Link>
				</div>
				<div className="col-md-1">
					<Link to="/private">Private</Link>
				</div>
			</div>
		</div>
	);
}; 