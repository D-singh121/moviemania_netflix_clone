import dotenv from "dotenv";
import app from "./app.js";
import dbConnection from "./src/database/dbConnection.js";

dotenv.config({ path: ".env" });

const port = process.env.PORT

dbConnection();
app.listen(port || 8080, () => {
	console.log(`Server is  running on port ${port}`);
});