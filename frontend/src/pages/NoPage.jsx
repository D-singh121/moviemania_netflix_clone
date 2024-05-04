// for future use purposes.
import { Link } from "react-router-dom"


const NoPage = () => {
	return (
		<section className=" h-screen bg-gray-300 flex justify-center items-center flex-col bg-gradient-to-r from-sky-500 to-indigo-700">
			<h1 className="text-[8rem] mb-5 ">404</h1>
			<h2 className="text-3xl">
				Oops..! We Could't Found Page Please go back to Home page
			</h2>
			<Link to="/">
				<button className="bg-red-600 p-4 text-white rounded-full w-56 shadow-2xl mt-10">
					Go to Homepage..
				</button>
			</Link>
		</section>
	)
}

export default NoPage;