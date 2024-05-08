import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "../backend/src/routes/userRoutes.js"
import bodyParser from "body-parser";

const app = express();

app.use(cookieParser());
const corsOptions = {
	origin: 'https://moviemania-netflix-clone-git-main-devesh-choudharys-projects.vercel.app',
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