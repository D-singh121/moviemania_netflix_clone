
const Footer = () => {
	return (
		<div className="w-full bg-black text-white pt-8 bottom-0 px-5 opacity-95 ">
			<h2 className="pl-28 opacity-60 text-xl mt-5">Questions? call 000-216-131-142</h2>
			<div className="flex justify-around opacity-60 underline pb-16 ">
				<div className="py-10 cursor-pointer">
					<div className="py-6">FAQ</div>
					<div>Cookie Preferences</div>
				</div>
				<div className="py-10 cursor-pointer">
					<div className="py-6" >Help Centre</div>
					<div >Corporate Information</div>
				</div>
				<div className="py-10 cursor-pointer">
					<div className="py-6">Terms of Use</div>
					<div>About Us </div>
				</div>

				<div className="py-10 cursor-pointer">
					<div className="py-6">Privacy</div>
					<div>know more..</div>
				</div>

			</div>
		</div>
	);
}

export default Footer;