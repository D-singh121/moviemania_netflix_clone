import { User } from "../modals/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer"

const registerUser = async (req, res, next) => {
	try {
		const { fullName, email, password } = req.body; // get the form values

		if (!fullName || !email || !password) {
			return res.status(401).json({
				message: "Please fill all required field!",
				success: false,
			});
		}

		const isEmailexists = await User.findOne({ email }); // is user already registered.

		if (isEmailexists) {
			return res.status(401).json({
				message: "Email already exist , Please go for login !",
				success: false
			})
		}

		const hashedPassword = await bcrypt.hash(password, 16); // hashing the password before saving in database;

		// saving the user in database with hashed password;
		await User.create({
			fullName,
			email,
			password: hashedPassword
		});

		// console.log(user);

		return res.status(201).json({
			message: "User created successfully...!",
			success: true
		})

	} catch (error) {
		console.log(error);
	};
};


const loginUser = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(401).json({
			message: " Please fill all required fields! ",
			success: false,
		})
	}

	const isUserRegistered = await User.findOne({ email }); // checking is User registered or not if not then redirect to register.

	if (!isUserRegistered) {
		return res.status(401).json({
			message: "Invalid email or password!",
			success: false
		})
	};

	const isPasswordMatched = await bcrypt.compare(password, isUserRegistered.password); // matching the  password entered and hashed password from database.

	if (!isPasswordMatched) {
		return res.status(401).json({
			message: "Invalid email or password",
			success: false
		});
	};

	// getting registered user Id fetched from database;
	const tokendata = {
		id: isUserRegistered._id
	}

	// generating the jwt token with userId , jwt secret and expiry time and sending in cookies with response ;
	const token = await jwt.sign(tokendata, process.env.JWTSECRET, { expiresIn: "1d" });

	return res.status(200).cookie("token", token, { httpOnly: true }).json({
		message: `Welcome back ${isUserRegistered.fullName}`,
		isUserRegistered,
		success: true,
	})

}


const logoutUser = (req, res) => {
	// return res.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
	// 	message: "User logged out  successfully!",
	// 	success: true
	// });

	if (req.cookies.token) {
		// If the user is authenticated, clear the token
		return res.status(200)
			.clearCookie("token", { httpOnly: true })
			.json({
				message: "User logged out successfully!",
				success: true
			});
	} else {
		return res.status(401).json({
			message: "User is already logged out",
			success: false
		});
	}
}


const getUser = async (req, res, next) => {
	const user = req.user;
	res.status(200).json({
		success: true,
		user,
	});
}


// forget and reset password 

const forgetPassword = async (req, res, next) => {
	try {
		const { email } = req.body;
		if (!email || "") {
			return res.status(401).json({
				message: "Please provide email",
				success: false
			})
		};

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({
				message: "Please enter valid email , this is not registered !",
				success: false
			})
		}

		const userId = user._id;
		console.log(userId);
		// Generate a unique JWT token for the user that contains the user's id
		const resetToken = jwt.sign({ userId }, process.env.JWTSECRET, { expiresIn: "1h", });
		// console.log(resetToken);

		// Send the token to the user's email
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.ADMIN_EMAIL,
				pass: process.env.ADMIN_EMAIL_PASSWORD,
			},
		});

		// Email configuration
		const mailOptions = {
			from: process.env.ADMIN_EMAIL,
			to: email,
			subject: "Reset Password",
			html: `<h1>Reset Your Password</h1>
           	<p>Click on the following link to reset your password:</p>
		    <p><a href="http://localhost:5173/resetPassword/${resetToken}">Reset Password</a></p>

   			<a href="http://localhost:5173/resetPassword/${resetToken}">http://localhost:5173/resetPassword/${resetToken}</a>
    		<p>The link will expire in 10 minutes.</p>
    		<p>If you didn't request a password reset, please ignore this email.</p>`,
		};


		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
				// do something useful
			}
		});


		res.status(200).json({
			message: `Reset Token has been sent to ${user.email}`,
			success: true
		})
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: err.message });
	}
};

const resetPassword = async (req, res, next) => {
	try {
		const { resetToken } = req.params; // url param se token ko get kar lenge 
		const { newPassword } = req.body; // user se new password input lenge;
		// console.log(resetToken, newPassword);

		const decodedToken = await jwt.verify(resetToken, process.env.JWTSECRET); // token ko verify karke usme se user ko nikal lenge.

		const userId = decodedToken.userId // user ki id ko get kar rahe hai decoded token se 
		console.log(userId);

		const hashedNewPassword = await bcrypt.hash(newPassword, 16) // hashing the new password entered by user.

		const result = await User.findOneAndUpdate(
			{ _id: userId }, // Match the document by user ID
			{ $set: { password: hashedNewPassword } }, // Set the new password
			{ new: true } // Return the updated document
		); // new hashed password ko database me update kar denge .

		if (!result) {
			return res.status(404).json({
				status: false,
				message: "User not found"
			});
		}

		res.status(201).json({
			status: true,
			message: "Password Updated successfully.. !"
		});
		// res.redirect('/login');
	} catch (error) {
		console.error("Error updating password:", error);
		return res.status(500).json({
			status: false,
			message: "Internal server error.. !"
		})
	}
}


export { registerUser, loginUser, logoutUser, getUser, forgetPassword, resetPassword };