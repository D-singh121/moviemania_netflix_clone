import { Header } from "./index.js";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { API_URL_POINT } from "../utils/constants.js";
import { useParams, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";



const ResetPassword = () => {
	const [newPassword, setnewPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	const { resetToken } = useParams();
	// console.log(resetToken);

	const getNewPassword = async (e) => {
		e.preventDefault();
		const updatedPassword = newPassword
		console.log(resetToken, updatedPassword);
		try {
			const res = await axios.put(`${API_URL_POINT}/resetPassword/${resetToken}`, { newPassword: updatedPassword })
			if (res.status === 201) {
				navigate("/")
			} else {
				console.log("Please type the password !", res.data);
			}

			toast.success(res.data.message)
			console.log(res);

		} catch (error) {
			toast.error(error.response.data.message, { position: "top-right" })
			console.log(error);

		}

		setnewPassword("");
		console.log(newPassword);
	}

	//hide-unhide password	
	const togglePassword = () => {
		setShowPassword(!showPassword)
	}

	return (

		<div>
			<Header />
			<div className="w-full -z-40 absolute" >
				<img className="w-[100vw] h-[100vh] -z-40" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp" alt="netflix bg" />
			</div>
			<form onSubmit={getNewPassword} className='flex absolute z-10 flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center  rounded-md bg-black opacity-90'>
				<h3 className='text-3xl text-white mb-5 font-bold'>Reset Password </h3>
				<div className='flex flex-col relative'>
					<input
						type={showPassword ? "text" : "password"}
						value={newPassword}
						onChange={(e) => setnewPassword(e.target.value)}
						autoComplete="false"
						placeholder='Password'
						className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white '
					/>
					{showPassword ? (
						<IoEyeOff
							onClick={togglePassword}
							className="text-white size-7 cursor-pointer absolute right-2 bottom-20 mb-3 opacity-40"
						/>
					) : (
						<IoEye
							onClick={togglePassword}
							className="text-white size-7 cursor-pointer absolute right-2 bottom-20 mb-3 opacity-40"
						/>
					)}

					<button
						type='submit'
						className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'
					> Reset Password
					</button>
				</div>
			</form>
		</div>

	)
}

export default ResetPassword;