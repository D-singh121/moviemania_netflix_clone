import { useState } from "react"
import { Header } from "./index.js"
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // for api call
import { API_URL_POINT } from "../utils/constants.js"
import toast from "react-hot-toast";

import { IoEyeOff, IoEye } from "react-icons/io5";


const Login = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [showPassword, setShowPassword] = useState(false);// for password hide-unhide
	const togglePassword = () => {
		setShowPassword(!showPassword)
	}


	// for redirecting
	const navigate = useNavigate();

	// handle login button
	const loginHandler = () => {
		setIsLogin(!isLogin);
	}


	// get the all form field value and proceed for db oprations;
	const getInputData = async (e) => {
		e.preventDefault(); // it will stop the default submit behaviour.//

		if (isLogin) {
			try {
				const userLoginData = { email, password }
				// console.log(userLoginData);
				const loginRes = await axios.post(`${API_URL_POINT}/login`, userLoginData, {
					headers: {
						'Content-Type': 'application/json'
					},
					withCredentials: true

				});
				// if (loginRes.status === 200) {
				// 	navigate("/home")
				// } else {
				// 	console.log('Login failed:', loginRes.data);
				// }
				if (loginRes.data.success) {
					toast.success(loginRes.data.message, { position: "top-right" });
				}
				console.log(loginRes)
			} catch (error) {
				toast.error(error.response.data.message, { position: 'top-right', })
				console.log(error);
			}
		} else {
			try {
				const userRegisterData = { fullName, email, password } // getting from form ;
				console.log(userRegisterData);
				const registerRes = await axios.post(`${API_URL_POINT}/register`, userRegisterData);

				if (registerRes.data.success) {
					toast.success(registerRes.data.message, { position: 'top-right', });
				}

			} catch (error) {
				console.log(error);
				toast.error(error.response.data.message, { position: 'top-right', })
			}
		}

		// after submitting form , clear the input field;
		setFullName("");
		setEmail("");
		setPassword("");
	}



	return (
		<div>
			<Header />
			<div className="w-full -z-40 absolute" >
				<img className="w-[100vw] h-[100vh] -z-40" src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp" alt="netflix bg" />
			</div>

			<form onSubmit={getInputData} className='flex absolute z-10 flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center  rounded-md bg-black opacity-90'>
				<h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "LogIn" : "SignUp"}</h1>
				<div className='flex flex-col relative'>
					{
						!isLogin &&
						<input
							type='text'
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder='FullName'
							className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
						/>
					}

					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="false"
						placeholder='Email'
						className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
					/>

					<input
						type={showPassword ? "text" : "password"}
						value={password}
						autoComplete="false"
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						className={`outline-none p-3 my-2 rounded-sm bg-gray-800 text-white ${showPassword ? 'border-red-500' : 'border-gray-500'}`}
					/>

					{/* password hide-unhide part */}
					{showPassword ? (
						<IoEyeOff
							onClick={togglePassword}
							className={`text-white size-7 cursor-pointer absolute right-2 bottom-20 mb-10 opacity-40 ${isLogin ? 'bottom-20 mb-16' : 'bottom-20'}`}
						/>
					) : (
						<IoEye
							onClick={togglePassword}
							className={`text-white size-7 cursor-pointer absolute right-2 bottom-20 mb-10 opacity-40 ${isLogin ? 'bottom-20 mb-16' : 'bottom-20'}`}
						/>
					)}

					<button
						type='submit'
						className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'
					>{isLogin ? "Login" : "SignUp"}
					</button>

					<p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
					{
						isLogin ? <p onClick={() => navigate("/forgetpassword")} className=' text-blue-900 font-medium cursor-pointer hover:underline'>forget Password</p> : ""
					}
				</div>
			</form>
		</div>
	)
}

export default Login;