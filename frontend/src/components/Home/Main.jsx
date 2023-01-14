import React from "react";
import Banner from "./Banner";
import Slide from "./Slide";
import "./Home.css";
import { products } from "./productdata";

const Main = () => {
	return (
		<div className="home_section">
			<div className="banner_part">
				<Banner />
			</div>
			<Slide title="Today's Deal" products={products} />
		</div>
	);
};

export default Main;
