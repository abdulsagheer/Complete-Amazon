const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose.set("strictQuery", true);
mongoose
	.connect(DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("connection is successfully done"))
	.catch((error) => console.log("error hai" + error.message));
