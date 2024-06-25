import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const MONGO_URI = process.env.MONGO_URI

const dbConnection = async () => {
	try {
		// const connectionInstance = await mongoose.connect(`${MONGO_URI}`)
		const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
		console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
	} catch (error) {
		console.log(`MONGODB connection FAILED : ${error}`);
		process.exit(1)
	}
};

export default dbConnection;