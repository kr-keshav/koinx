import HeaderDropDown from "./headerDropDown";
export default function Header() {
	return (
		<div className="bg-white">
			<div className="container mx-auto flex justify-between">
				<img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"></img>
				<div className="sm:flex flex-grow  text-center space-x-6 place hidden ">
					<button className="ml-auto text-center place-self-center font-medium">
						Crypto Taxes
					</button>
					<button className="text-center place-self-center font-medium">
						Free Tools
					</button>
					<button className="place-self-center font-medium">
						Resource Center
					</button>
					<button className="place-self-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-md p-2 text-white px-6 font-medium">
						Get Started
					</button>
				</div>
				<div className=" text-center space-x-6 place sm:hidden ml-auto place-items-center place-self-center">
					<HeaderDropDown />
				</div>
			</div>
		</div>
	);
}
