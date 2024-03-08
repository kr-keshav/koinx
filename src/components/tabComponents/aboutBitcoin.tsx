import React from "react";
import vercel from "../../../public/vercel.svg";
import Image from "next/image";
import solid from "../../../public/solid.svg";
export default function AboutBitcoin() {
	return (
		<div className="rounded-md  p-8 bg-white w-full">
			<div className="text-2xl font-medium" id="aboutBitcoin">
				About Bitcoin
			</div>
			<div className="w-full pt-6">
				<div className="font-semibold text-lg">What is Bitcoin?</div>
				<div className="pt-2">
					Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
					of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
					-7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
					7-day all-time low of $16,394.75. BTC has a circulating supply of
					19.24 M BTC and a max supply of 21 M BTC.
				</div>
			</div>
			<div className="h-[1px]  m-4 my-6 bg-slate-300"></div>
			<div className="w-full ">
				<div className="font-semibold text-lg">Lorem ipsum dolor sit amet</div>
				<div className="pt-2">
					Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
					tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
					at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
					scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
					urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
					fermentum sapien morbi sodales odio sed rhoncus. <br />
					<br />
					Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
					vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
					felis pellentesque interdum. Odio cursus phasellus velit in senectus
					enim dui. Turpis tristique placerat interdum sed volutpat. Id
					imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
					nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
					quis lobortis phasellus. Integer pellentesque enim convallis ultricies
					at.
					<br />
					<br />
					Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
					massa vel convallis duis ac. Mi adipiscing semper scelerisque
					porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
					congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
					eget. Ullamcorper dui
				</div>
			</div>
			<div className="h-[1px]  m-4 my-6 bg-slate-300"></div>
			<div>
				<div className="text-2xl font-medium pb-3">
					Already Holding Bitcoin?
				</div>
				<div className="xl:flex xl:space-x-6 space-y-6 xl:space-y-0">
					<div className="sm:w-[388px] h-[151px] rounded-md bg-gradient-to-br from-green-500 to-blue-500  ">
						<div className="flex">
							<Image
								src={solid}
								alt="img"
								className="p-4 sm:w-32 sm:h-36 w-24 h-24"
							></Image>
							<div className="p-4 px-6 pr-8">
								<div className="text-white font-medium sm:text-xl">
									Calculate your Profits
								</div>

								<button className="place-self-center bg-white rounded-md py-1.5 mt-3 px-6 font-medium hidden sm:block">
									Check Now ->
								</button>
							</div>
						</div>
						<div className="w-full flex justify-center">
							<button className="bg-white rounded-md py-1.5 mt-3 px-6 font-medium sm:hidden">
								Check Now ->
							</button>
						</div>
					</div>
					<div className="sm:w-[388px] h-[151px] rounded-md bg-gradient-to-br from-orange-500 to-red-500  ">
						<div className="flex">
							<Image
								src={solid}
								alt="img"
								className="p-4 sm:w-32 sm:h-36 w-24 h-24"
							></Image>
							<div className="p-4 px-6 pr-8">
								<div className="text-white font-medium sm:text-xl">
									Calculate your Profits
								</div>

								<button className="place-self-center bg-white rounded-md py-1.5 mt-3 px-6 font-medium hidden sm:block">
									Check Now ->
								</button>
							</div>
						</div>
						<div className="w-full flex justify-center">
							<button className="bg-white rounded-md py-1.5 mt-3 px-6 font-medium sm:hidden">
								Check Now ->
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[1px]  m-4 my-6 bg-slate-300"></div>
			<div>
				Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
				vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
				pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
				fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
				dui
			</div>
		</div>
	);
}
