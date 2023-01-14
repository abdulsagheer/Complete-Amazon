/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<header>
			<nav>
				<div className="left">
					<div className="navlogo">
						<Link to="/">
							<img src="./amazon_PNG25.png" alt="logo" />
						</Link>
					</div>
					<div className="nav_searchbaar">
						<input type="text" name="" id="" />
						<div className="search_icon">
							<SearchIcon />
						</div>
					</div>
				</div>
				<div className="right">
					<div className="nav_btn">
						<a href="#">Sign In</a>
					</div>
					<div className="cart_btn">
						<NavLink to="/getproductsone/product1">
							<Badge badgeContent={4} color="secondary">
								<i className="fas fa-shopping-cart" id="icon"></i>
								{/* <ShoppingCartIcon /> */}
							</Badge>
						</NavLink>
						<p>Cart</p>
					</div>
					<Avatar className="avtar"></Avatar>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
