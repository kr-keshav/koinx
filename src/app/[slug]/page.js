"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/header";
import TradingViewWidget from "../../components/chart";
import TabsOptions from "../../components/tabs";
import Footer from "../../components/footer";
import bitcoin from "../../../public/bitcoin.svg";
import cardImage from "../../../public/cardImage.svg";

export default function Page({ params }) {
	const coin = params.slug;
	const [coinData, setCoinDatad] = useState(null);
	const [currCoin, setCurrCoin] = useState(null);
	const [trendingData, setTrendingData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/simple/price?ids=${params.slug}&vs_currencies=inr%2Cusd&include_24hr_change=true`
				);
				const jsonData = await response.json();
				setCoinDatad(jsonData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	// console.log("currCoin", currCoin?.image?.thumb);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/${params.slug}`
				);
				const jsonData = await response.json();
				setCurrCoin(jsonData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	// console.log("coinData?.coin", coinData?.[coin]);
	const { inr, inr_24h_change, usd, usd_24h_change } = coinData?.[coin] || {};

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

	// console.log(
	// 	"bottom",
	// 	coinData,
	// 	inr,
	// 	trendingData,
	// 	"234",
	// 	trendingData?.coins
	// );

	return (
		<div className="bg-gray-200">
			<Header />
			<div className="p-4 sm:px-8 mx-auto w-full">
				<div className="flex text-sm py-4">
					<div className="text-gray-600">
						Cryptocurrencies &gt;&gt; {/* Renders >> */}
					</div>
					<div>Bitcoin</div>
				</div>

				<div className="flex lg:space-x-4 flex-wrap lg:flex-nowrap w-full">
					<div className="w-full">
						<div className="bg-white px-5 pt-2 rounded-md w-full">
							{/* //left side */}
							<div className="flex space-x-2 py-4 ">
								<Image
									src={currCoin?.image?.thumb}
									alt="bitcoin"
									className=" place-self-center"
									width={32}
									height={32}
								></Image>
								<div className="place-self-center text-2xl font-semibold">
									{coin.toUpperCase()}
								</div>
								<div className="place-self-center pr-6">{currCoin?.symbol}</div>
								<div className="bg-gray-500 place-self-center rounded-md p-2 px-3 text-white">
									Rank #{currCoin?.market_cap_rank}
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
							<div className="text-base my-2">₹ {inr}</div>
							<div className="chart-container w-full h-24vh">
								{currCoin?.symbol ? (
									<TradingViewWidget symbol={currCoin?.symbol?.toUpperCase()} />
								) : (
									""
								)}
							</div>
						</div>
						<div className="flex overflow-x-scroll space-x-4 mt-4">
							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#overview"
							>
								Overview
							</a>

							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#fundamentals"
							>
								Fundamentals
							</a>
							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#aboutBitcoin"
							>
								News Insights
							</a>
							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#sentiments"
							>
								Sentiments
							</a>
							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#team"
							>
								Team
							</a>
							<a className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent">
								Technicals
							</a>
							<a
								className="hover:text-blue-600 hover:border-b-blue-600 border-3 border-b-transparent"
								href="#tokenomics"
							>
								Tokenomics
							</a>
						</div>
						<div className="mt-4 w-full">
							<TabsOptions />
						</div>
					</div>

					<div className="lg:w-5/12 w-full space-y-5 lg:mt-0 mt-8 ">
						{/* //right side */}
						<div className="bg-cardBlue text-white rounded-xl px-12 py-8 pb-12 space-y-4 text-center">
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
						<div className="bg-white  p-6 rounded-md ">
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

			<div className="bg-white my-14 p-4 sm:px-8 mx-auto w-full">
				<div className=" mx-auto py-8">
					<div className="text-2xl font-medium ml-4">You May Also Like</div>
					<div className="flex  mx-auto my-4">
						<Footer coinList={trendingData?.coins} />
					</div>

					<div className="text-2xl font-medium ml-4 mt-8">Trending Coins</div>
					<div className="flex mx-auto my-4">
						<Footer coinList={trendingData?.coins} />
					</div>
				</div>
			</div>
		</div>
	);
}

// function MyComponent() {

// }
