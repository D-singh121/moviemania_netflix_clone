import mongoose from "mongoose";
import validator from "validator";
// import crypto from "crypto"


const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
		trim: true,
		index: true,
		lowercase: true,
		minLength: [3, "Name must contain at least 3 characters!"],
		maxLength: [30, "Name can not exceed  30 characters!"]
	},
	email: {
		type: String,
		required: [true, "Please provide your email!"],
		unique: true,
		lowercase: true,
		validate: [validator.isEmail, "Please provide a valid email!"],
	},

	password: {
		type: String,
		required: [true, "Please provide password"],
		// minLength: [8, "Password must containe atleast 8 characters!"],
		// maxLength: [16, "Password can not more than 16 characters!"],
		Select: false
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},

});


export const User = mongoose.model("User", userSchema);