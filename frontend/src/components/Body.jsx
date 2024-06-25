import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login, Browse } from "./index.js";
import ForgetPassword from "./ForgetPassword.jsx";
import ResetPassword from "./ResetPassword.jsx";
// import NoPage from "../pages/NoPage.jsx";

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
			path: "*",
			element: <Login />
		}
	]);



	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}

export default Body;