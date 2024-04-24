const SendMail = async (mailDetails, callback) => {
	try {
		const info = await transporter.sendMail(mailDetails)
		callback(info);
	} catch (error) {
		console.log(error);
	}
}

export default SendMail;