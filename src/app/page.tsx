"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import TradingViewWidget from "./components/chart";
import bitcoin from "../../public/bitcoin.svg";
import card from "../../public/card.png";

export default function Home() {
	const [coinData, setCoinDatad] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
				);
				const jsonData = await response.json();
				setCoinDatad(jsonData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	const { inr, inr_24h_change, usd, usd_24h_change } = coinData?.bitcoin || {};

  // if()
	// const bitcoinInr = coinData.bitcoin.inr;
	// const bitcoinUsdt = coinData.bitcoin.usd;
	console.log(coinData, inr);
	return (
		<div className="bg-gray-200">
			<Header />
			<div className="container mx-auto ">
				<div className="flex text-sm py-4">
					<div className="text-gray-600">
						Cryptocurrencies &gt;&gt; {/* Renders >> */}
					</div>
					<div>Bitcoin</div>
				</div>

				<div className="flex space-x-4">
					<div className="bg-white px-5 pt-2 rounded-md">
						{/* //left side */}
						<div className="flex space-x-2 py-4">
							<Image src={bitcoin} alt="bitcoin" className="h-8 w-8"></Image>
							<div className="place-self-center text-2xl font-semibold">
								Bitcoin
							</div>
							<div className="place-self-center pr-6">BTC</div>
							<div className="bg-gray-500 place-self-center rounded-md p-2 px-3 text-white">
								Rank #1
							</div>
						</div>
						<div className="flex mt-6 space-x-4">
							<div className="text-3xl font-medium pr-4">$ {usd} </div>
							<div className={ `place-self-center px-3 py-0.5 rounded-sm ${usd_24h_change>=0?'bg-green-200 text-green-600':'bg-red-200 text-red-600'}`} >{usd_24h_change>=0?'▲':'▼'}{parseFloat(usd_24h_change).toFixed(2)}%</div><div className="place-self-center text-sm text-gray-500">(24H)</div>
						</div>
						<div className="text-base mt-2">₹ {inr}</div>
						<div className="mt-2">
							<TradingViewWidget />
						</div>

            <div>
              
            </div>
					</div>

					<div className="bg-red-100 w-2/6">
						{/* //right side */}
						<div className="bg-cardBlue text-white container rounded-xl px-12 py-8 pb-12 space-y-4 text-center">
							{/* //component1 */}
							<div className=" text-2xl font-semibold break-normal px-4 leading-relaxed">
								Get Started With KoinX for FREE
							</div>
							<div className="text-sm leading-relaxed">
								With our range of features that you can equip for free, KoinX
								allows you to be more educated and aware of your tax reports.
							</div>
							<Image src={card} alt="card"></Image>
							<button className="font-medium p-4 bg-white text-black rounded-md ">Get started for FREE ➔</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// function MyComponent() {

// }
