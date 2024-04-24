import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login, Browse } from "./index.js";
import ForgetPassword from "./ForgetPassword.jsx";
import ResetPassword from "./ResetPassword.jsx";
import HomePage from "../pages/HomePage.jsx";

const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />
		},
		{
			path: "/browse",
			element: <Browse />
		},
		{
			path: "/forgetpassword",
			element: <ForgetPassword />
		},
		{
			path: "/resetPassword/:resetToken",
			element: <ResetPassword />
		},
		{
			path: "/home",
			element: <HomePage />
		}
	]);



	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}

export default Body;