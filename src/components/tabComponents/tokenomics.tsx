import React from "react";

export default function Tokenomics() {
	return (
		<div className="rounded-md  p-8 bg-white w-full">
			<div className="text-2xl font-medium" id="tokenomics">
				Tokenomics
			</div>
			<div className="text-xl font-medium pt-4">Initial Distribution</div>
			<div className="flex-row space-x-12  space-y-6 pt-4 w-full md:flex">
				<div className='place-self-center pl-8'>
					<svg
						width="179"
						height="180"
						viewBox="0 0 179 180"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="89.5"
							cy="89.7969"
							r="74.5"
							stroke="#0082FF"
							strokeWidth="30"
						/>
						<mask id="path-2-inside-1_1_922" fill="white">
							<path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z" />
						</mask>
						<path
							d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z"
							stroke="#FAA002"
							strokeWidth="60"
							mask="url(#path-2-inside-1_1_922)"
						/>
						<circle cx="89.5" cy="89.5" r="59.5" fill="white" />
						<circle cx="89.5" cy="89.5" r="59.5" stroke="#0082FF" />
					</svg>
				</div>
				<div className="place-self-center">
					<div className="flex place-content-center mb-4">
						<div className="rounded-full bg-blue-700 h-2 w-2 place-self-center mr-2"></div>{" "}
						Crowdsale investors: 80%
					</div>
					<div className="flex  place-content-start">
						<div className="rounded-full bg-yellow-400 h-2 w-2 place-self-center mr-2"></div>{" "}
						Foundation: 20%
					</div>
				</div>
			</div>
			<div className="mt-6 w-full">
				Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
				vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
				amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
				eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
				felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
				aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
				curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
				ut. Vulputate ipsum aliquet odio nisi eu ac risus.
			</div>
		</div>
	);
}
