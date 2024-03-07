"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import TradingViewWidget from "./components/chart";
import TabsOptions from "./components/tabs";
import Footer from "./components/footer";
import bitcoin from "../../public/bitcoin.svg";
// import card from "../../public/card.png";
import cardImage from "../../public/cardImage.svg";


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

	const [trendingData, setTrendingData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.coingecko.com/api/v3/search/trending"
				);
				const jsonData = await response.json();
				setTrendingData(jsonData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const topCoins = trendingData?.coins?.slice(0, 3);

	console.log(coinData, inr, trendingData, "234", trendingData?.coins);

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

				<div className="flex space-x-4 flex-wrap md:flex-nowrap container">
					<div>
						<div className="bg-white px-5 pt-2 rounded-md">
							{/* //left side */}
							<div className="flex space-x-2 py-4 ">
								<Image
									src={bitcoin}
									alt="bitcoin"
									className="h-8 w-8 place-self-center"
								></Image>
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
								<div
									className={`place-self-center px-3 py-0.5 rounded-sm ${
										usd_24h_change >= 0
											? "bg-green-100 text-green-600"
											: "bg-red-100 text-red-600"
									}`}
								>
									{usd_24h_change >= 0 ? "▲" : "▼"}
									{parseFloat(usd_24h_change).toFixed(2)}%
								</div>
								<div className="place-self-center text-sm text-gray-500">
									(24H)
								</div>
							</div>
							<div className="text-base mt-2">₹ {inr}</div>
							{/* <div className="w-full" style={{ width: '60vw', height: '66.6667vh' }}> */}
              {/* <div className="w-[2/3vh] h-2/3 relative" > */}
              <div className="chart-container">

								<TradingViewWidget />

							</div>

						</div>
							<div className="mt-4">
								{/* <TabsOptions /> */}
							</div>
					</div>

					<div className="md:w-2/6 w-full space-y-5">
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
							<Image src={cardImage} alt="card" className="mx-auto"></Image>
							<button className="font-medium px-4 py-3 bg-white text-black rounded-md ">
								Get started for FREE ➔
							</button>
						</div>
						<div className="bg-white container p-6 rounded-md ">
							<div className="font-medium text-2xl">Trending Coins (24h)</div>
							<div className="space-y-4 pt-8">
								{topCoins?.map((coin, index) => (
									<div key={coin.item.coin_id} className="flex ">
										<img
											src={coin.item.thumb}
											alt={coin.item.name}
											className="h-8 w-8"
										/>
										<h2 className="pl-2 place-self-center">
											{coin.item.name} ({coin.item.symbol})
										</h2>
										<p
											className={`ml-auto place-self-center px-3 py-0.5 rounded-sm ${
												coin.item.data.price_change_percentage_24h.usd >= 0
													? "bg-green-100 text-green-600"
													: "bg-red-100 text-red-600"
											}`}
										>
											{coin.item.data.price_change_percentage_24h.usd >= 0
												? "▲"
												: "▼"}
											{parseFloat(
												coin.item.data.price_change_percentage_24h.usd
											).toFixed(2)}
											%
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white my-14">
				<div className="container mx-auto py-8">
					<div className="text-2xl font-medium ml-4">You May Also Like</div>
					<div className="flex  mx-auto my-4">
						<Footer coinList={trendingData?.coins} />
					</div>

					<div className="text-2xl font-medium ml-4 mt-8">Trending Coins</div>
					<div className="flex  mx-auto my-4">
						<Footer coinList={trendingData?.coins} />
					</div>
				</div>
			</div>
		</div>
	);
}

// function MyComponent() {

// }
