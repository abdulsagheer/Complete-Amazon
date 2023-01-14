import { Divider } from "@mui/material";
import React from "react";
import "./Cart.css";

const Cart = () => {
	return (
		<div className="cart_section">
			<div className="cart_container">
				<div className="left_cart">
					<img
						src="https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70"
						alt="product"
					/>
					<div className="cart_btn">
						<button className="cart_btn1">Add to Cart</button>
						<button className="cart_btn2">Buy Now</button>
					</div>
				</div>
				<div className="right_cart">
					<h3>Home & Kitchen</h3>
					<h4>Pigeon FAVOURITE Electric Kettle (!.5 L, Silver, Black)</h4>
					<Divider />
					<p className="mrp">
						M.R.P. : <del>₹1195</del>
					</p>
					<p>
						Deal of the Day :<span style={{ color: "#B12704" }}>₹625.00</span>
					</p>
					<p>
						You save :<span style={{ color: "#B12704" }}>₹570 ( 47% )</span>
					</p>

					<div className="discount_box">
						<h5>
							Discount :<span style={{ color: "#111" }}>Extra 10% Off</span>
						</h5>
						<h4>
							FREE Delivery :
							<span style={{ color: "#111", fontWeight: "600" }}>
								Oct 8 - 21
							</span>
							Details
						</h4>
						<p style={{ color: "#111" }}>
							Fastest delivery:
							<span style={{ color: "#111", fontWeight: "600" }}>
								Tomorrow 11AM
							</span>
						</p>
					</div>
					<p className="description">
						About the Iteam :
						<span
							style={{
								color: "#565959",
								fontSize: "14px",
								fontWeight: "500",
								letterSpacing: "0.4px",
							}}>
							This electric kettle from Pigeon will soon become travelers best
							friend, a hostellite saviour and an answer to all the midnight
							cravings. With this handy appliance, you can boil water and use it
							to make instant noodles, pocket soup, coffee and green tea.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cart;
