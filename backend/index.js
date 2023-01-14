import dotenv from "dotenv";
import express from "express";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => {
	console.log(`The server is listening on ${port}`);
});
