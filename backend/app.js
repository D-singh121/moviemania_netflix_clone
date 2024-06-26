import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./src/routes/userRoutes.js"
import bodyParser from "body-parser";

const app = express();


app.use(cookieParser());

dotenv.config({ path: ".env" });
const FRONTEND_URL = process.env.FRONTEND_URL


const corsOptions = {
	origin: FRONTEND_URL ? FRONTEND_URL : "http://localhost:5173",
	method: ["GET", "POST", "DELETE", "PUT", "PATCH"],
	credentials: true
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send("we are ready")
})

// route splitting
app.use("/api/v1/user", userRoutes)

export default app;