// for future use purposes
const errorHandler = async (err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "BACKEND ERROR";
	const extraDetails = err.extraDetails || "Error from backend ";

	return res.status(status).json({ message, extraDetails });
}

export default errorHandler;