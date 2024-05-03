import { z } from "zod";

const authSchema = z.object({
	fullName: z
		.string({ required_error: "Name can't be empty !", invalid_type_error: "Name must be a string", })
		.trim()
		.min(4, { message: "FullName must be atleast of 4 characters!" })
		.max(255, { message: "FullName can not be more then 255 characters!" })
		.toLowerCase(),

	email: z
		.string({ required_error: "Email is required !" })
		.trim()
		.email()
		.toLowerCase()
		.min(5, { message: "Email must be of atleast 5 characters !" })
		.max(255, { message: "Email should not exceed 255 characters!" }),

	password: z
		.string({ required_error: "Password is madetory, please provide it !" })
		.min(6, { message: "Password must be atleast of 6 characters !" })
		.max(1024, { message: "Password can't be greater then 1024 characters!" }),


});

export default authSchema;