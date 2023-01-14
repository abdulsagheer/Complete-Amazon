import "./SignUp.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Divider } from "@mui/material";

const SignUp = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		mobile: "",
		password: "",
		cpassword: "",
	});
	console.log(data);
	const addData = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};
	return (
		<section>
			<div className="sign_container">
				<div className="sign_header">
					<Link to="/">
						<img src="./blacklogoamazon.png" alt="signupimg" />
					</Link>
				</div>
				<div className="sign_form">
					<form method="POST">
						<h1>Create account</h1>
						<div className="form_data">
							<label htmlFor="name">Your name</label>
							<input
								type="text"
								onChange={addData}
								value={data.name}
								name="name"
								id="name"
							/>
						</div>
						<div className="form_data">
							<label htmlFor="email">email</label>
							<input
								type="email"
								onChange={addData}
								value={data.email}
								name="email"
								id="email"
							/>
						</div>
						<div className="form_data">
							<label htmlFor="mobile">Mobile number</label>
							<input
								type="number"
								onChange={addData}
								value={data.mobile}
								name="mobile"
								id="mobile"
							/>
						</div>
						<div className="form_data">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								onChange={addData}
								value={data.password}
								name="password"
								id="password"
								placeholder="At least 6 characters"
							/>
						</div>
						<div className="form_data">
							<label htmlFor="passwordg">Password again</label>
							<input
								type="password"
								onChange={addData}
								value={data.cpassword}
								name="cpassword"
								id="passwordg"
							/>
						</div>
						<button type="submit" className="signin_btn">
							Continue
						</button>

						<Divider />

						<div className="signin_info">
							<p>Already have an account?</p>
							<NavLink to="/login">Sign in</NavLink>
						</div>
					</form>
				</div>
				<ToastContainer />
			</div>
		</section>
	);
};

export default SignUp;
