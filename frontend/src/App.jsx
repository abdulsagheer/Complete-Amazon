import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Menubar from "./components/Menubar/Menubar";
import Main from "./components/Home/Main";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SIgnUp_SignIn/SignIn";
import SignUp from "./components/SIgnUp_SignIn/SignUp";
import Cart from "./components/Cart/Cart";
import BuyNow from "./components/BuyNow/BuyNow";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Menubar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<SignIn />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/getproductsone/:id" element={<Cart />} />
				<Route path="/buynow" element={<BuyNow />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
