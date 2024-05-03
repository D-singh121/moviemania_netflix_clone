// zod schema validator for future purposes

const authValidator = (schema) => async (req, res, next) => {
	try {
		const parseBody = await schema.parseAsync(req.body);
		req.body = parseBody;
		next();
	} catch (err) {
		console.log(err);
		console.log(err.errors[0].message);
	}
};


export default authValidator;