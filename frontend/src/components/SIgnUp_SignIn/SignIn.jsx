import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
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
						<h1>Sign-In</h1>

						<div className="form_data">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								onChange={addData}
								value={data.email}
								name="email"
								id="email"
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
						<button type="submit" className="signin_btn">
							Continue
						</button>
					</form>
					<ToastContainer />
				</div>
				<div className="create_accountinfo">
					<p>New to Amazon?</p>
					<button>
						{" "}
						<NavLink to="/register">Create your Amazon Account</NavLink>
					</button>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
