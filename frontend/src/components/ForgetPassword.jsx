import { useState } from "react"
import { Header } from "./index.js"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";
import { API_URL_POINT } from "../utils/constants.js";

import toast from "react-hot-toast";


const ForgetPassword = () => {
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const getForgetRecoveryEmail = async (e) => {
		e.preventDefault();
		try {
			const recoveryEmail = { email }
			const res = await axios.post(`${API_URL_POINT}/forgetpassword`, recoveryEmail);

			if (res.status === 200) {
				navigate("/")
			} else {
				console.log("Invalid email! ", res.data);
			}
			toast.success(res.data.message , {position:"top-right"});
			console.log(res);
		} catch (error) {
			toast.error(error.response.data.message , {position:"top-right"})
			console.log(error);
		}
		setEmail("")
		// console.log(email);
	}

	return (
		<div>
			<Header />
			<div className="w-full -z-40 absolute" >
				<img className="w-[100vw] h-[100vh] -z-40" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp" alt="netflix bg" />
			</div>
			<form onSubmit={getForgetRecoveryEmail} className='flex absolute z-10 flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center  rounded-md bg-black opacity-90'>
				<h3 className='text-3xl text-white mb-5 font-bold'>Forget Password </h3>
				<div className='flex flex-col'>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="false"
						placeholder='Email'
						className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
					/>

					<button
						type='submit'
						className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'
					> Send
					</button>

					<Link to="/">
						<span className="text-blue-900 font-medium  hover:underline mt-4 cursor-pointer">Go back to Homepage.<span><AiOutlineHome className="font-bold" /></span></span>
					</Link>

				</div>
			</form>
		</div>
	)
}

export default ForgetPassword