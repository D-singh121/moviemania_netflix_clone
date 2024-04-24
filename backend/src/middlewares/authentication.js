import {User} from "../modals/userModel.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return res.status(401).json({
			message: "User is not authorised!",
			success: false
		})
	}

	const decodedToken = jwt.verify(token, process.env.JWTSECRET);
	req.user = await User.findById(decodedToken.id);
	next();
}