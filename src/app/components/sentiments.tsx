import React from "react";

export default function Sentiments() {
	return (
		<div className="flex flex-col w-full  bg-white rounded-md text-black p-6 gap-4">
			<h1 className="text-xl font-bold text-black" id='sentiments'>Sentiment</h1>
			<p className="text-lg font-bold text-gray-700">Key Events</p>

			<div className="flex gap-4 w-full overflow-scroll">
				{/* card 1 */}
				<div className="w-[456px] h-full p-4 flex bg-blue-100 rounded-xl">
					<div className="w-[15%] flex items-start justify-center">
						{/* <div className="bg-blue-500 w-12 h-12 rounded-full"></div> */}
						<svg
							width="44"
							height="45"
							viewBox="0 0 44 45"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								y="0.046875"
								width="44"
								height="44"
								rx="22"
								fill="#0082FF"
							/>
							<path
								d="M15 25.2569V22.4569H17.8V25.2569H15ZM29 14.7485C28.9978 14.193 28.7755 13.661 28.382 13.269C27.9884 12.877 27.4555 12.6569 26.9 12.6569H12.7922C12.2352 12.6569 11.7011 12.8781 11.3073 13.2719C10.9134 13.6658 10.6922 14.1999 10.6922 14.7569V27.3569C10.6922 28.2851 11.0609 29.1754 11.7173 29.8317C12.3737 30.4881 13.2639 30.8569 14.1922 30.8569H29.8078C30.7361 30.8569 31.6263 30.4881 32.2827 29.8317C32.939 29.1754 33.3078 28.2851 33.3078 27.3569V18.9569C33.3078 18.3999 33.0865 17.8658 32.6927 17.4719C32.2989 17.0781 31.7648 16.8569 31.2078 16.8569H30.4V26.9789C30.4 27.1645 30.3263 27.3426 30.195 27.4738C30.0637 27.6051 29.8857 27.6789 29.7 27.6789C29.5143 27.6789 29.3363 27.6051 29.205 27.4738C29.0737 27.3426 29 27.1645 29 26.9789V14.7485ZM13.6 17.5569C13.6 17.3712 13.6737 17.1932 13.805 17.0619C13.9363 16.9306 14.1143 16.8569 14.3 16.8569H25.5C25.6857 16.8569 25.8637 16.9306 25.995 17.0619C26.1262 17.1932 26.2 17.3712 26.2 17.5569C26.2 17.7425 26.1262 17.9206 25.995 18.0518C25.8637 18.1831 25.6857 18.2569 25.5 18.2569H14.3C14.1143 18.2569 13.9363 18.1831 13.805 18.0518C13.6737 17.9206 13.6 17.7425 13.6 17.5569ZM21.3 21.0569H25.5C25.6857 21.0569 25.8637 21.1306 25.995 21.2619C26.1262 21.3932 26.2 21.5712 26.2 21.7569C26.2 21.9425 26.1262 22.1206 25.995 22.2518C25.8637 22.3831 25.6857 22.4569 25.5 22.4569H21.3C21.1143 22.4569 20.9363 22.3831 20.805 22.2518C20.6737 22.1206 20.6 21.9425 20.6 21.7569C20.6 21.5712 20.6737 21.3932 20.805 21.2619C20.9363 21.1306 21.1143 21.0569 21.3 21.0569ZM20.6 25.9569C20.6 25.7712 20.6737 25.5932 20.805 25.4619C20.9363 25.3306 21.1143 25.2569 21.3 25.2569H25.5C25.6857 25.2569 25.8637 25.3306 25.995 25.4619C26.1262 25.5932 26.2 25.7712 26.2 25.9569C26.2 26.1425 26.1262 26.3206 25.995 26.4518C25.8637 26.5831 25.6857 26.6569 25.5 26.6569H21.3C21.1143 26.6569 20.9363 26.5831 20.805 26.4518C20.6737 26.3206 20.6 26.1425 20.6 25.9569ZM14.3 21.0569H18.5C18.6857 21.0569 18.8637 21.1306 18.995 21.2619C19.1263 21.3932 19.2 21.5712 19.2 21.7569V25.9569C19.2 26.1425 19.1263 26.3206 18.995 26.4518C18.8637 26.5831 18.6857 26.6569 18.5 26.6569H14.3C14.1143 26.6569 13.9363 26.5831 13.805 26.4518C13.6737 26.3206 13.6 26.1425 13.6 25.9569V21.7569C13.6 21.5712 13.6737 21.3932 13.805 21.2619C13.9363 21.1306 14.1143 21.0569 14.3 21.0569Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className="w-[85%] flex flex-col gap-2">
						<h1 className="text-base font-semibold text-black">
							Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
							mattis enim tincidunt.
						</h1>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
							faucibus metus quis. Amet sapien quam viverra adipiscing
							condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
							sit nisi viverra natoque lacinia libero enim.
						</p>
					</div>
				</div>
				{/* card 2 */}
				<div className="w-[456px] h-full p-4 flex bg-green-100 rounded-xl">
					<div className="w-[15%] flex items-start justify-center">
						{/* <div className="bg-green-500 w-12 h-12 rounded-full"></div> */}
						<svg
							width="44"
							height="45"
							viewBox="0 0 44 45"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								y="0.046875"
								width="44"
								height="44"
								rx="22"
								fill="#0FBA83"
							/>
							<path
								d="M26.2308 16.1238H33V22.893"
								stroke="white"
								stroke-width="1.69231"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M33 16.1238L23.4385 25.6853C23.2803 25.8404 23.0676 25.9272 22.8462 25.9272C22.6247 25.9272 22.412 25.8404 22.2538 25.6853L18.3615 21.793C18.2034 21.638 17.9907 21.5511 17.7692 21.5511C17.5477 21.5511 17.3351 21.638 17.1769 21.793L11 27.9699"
								stroke="white"
								stroke-width="1.69231"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div className="w-[85%] flex flex-col gap-2">
						<h1 className="text-base font-semibold text-black">
							Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
							mattis enim tincidunt.
						</h1>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
							faucibus metus quis. Amet sapien quam viverra adipiscing
							condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
							sit nisi viverra natoque lacinia libero enim.
						</p>
					</div>
				</div>
			</div>

			<p className="text-lg font-bold text-gray-700">Analyst Estimates</p>
			<div className="flex justify-start items-center gap-12 w-full">
				<div className="w-28 h-28 flex justify-center items-center bg-green-50 rounded-full text-3xl text-green-500 font-semibold">
					76 <span className="text-xl"> %</span>
				</div>
				<div className="flex flex-col gap-4 w-[70%]">
					<div className="flex justify-start items-center gap-4">
						<h2 className="text-sm">Buy</h2>
						<div className="w-[76%] h-[6px] rounded-xl bg-green-500" />
						<h2 className="text-sm">76%</h2>
					</div>
					<div className="flex justify-start items-center gap-4">
						<h2 className="text-sm">Hold</h2>
						<div className="w-[8%] h-[6px] rounded-xl bg-gray-300" />
						<h2 className="text-sm">8%</h2>
					</div>
					<div className="flex justify-start items-center gap-4">
						<h2 className="text-sm">Sell</h2>
						<div className="w-[16%] h-[6px] rounded-xl bg-red-500" />
						<h2 className="text-sm">16%</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
