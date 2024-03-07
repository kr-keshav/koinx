"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer(coinList) {
	console.log(coinList);
	return (
		<div className="flex overflow-x-auto">
			{/* <Image src='https://www.coingecko.com/coins/33511/sparkline.svg' alt="coinChart" width={52} height={52}/> */}
			{coinList?.coinList?.map((coin, index) => (
				<div
					key={coin.item.coin_id}
					className="border-2 border-gray-200 rounded-md p-4 mx-4"
				>
					<div className="flex ">
						<img
							src={coin.item.thumb}
							alt={coin.item.name}
							className="h-8 w-8"
						/>
						<h2 className="px-2 place-self-center">{coin.item.symbol}</h2>
						<div
							className={` place-self-center px-3 py-0.5 rounded-sm text-xs mr-8 ml-4 ${
								coin.item.data.price_change_percentage_24h.usd >= 0
									? "bg-green-100 text-green-600"
									: "bg-red-100 text-red-600"
							}`}
						>
							{coin.item.data.price_change_percentage_24h.usd >= 0 ? "▲" : "▼"}
							{parseFloat(
								coin.item.data.price_change_percentage_24h.usd
							).toFixed(2)}
							%
						</div>
					</div>
                    <div className="pt-2 text-lg">
                        {coin.item.data.price}
                        </div>
					<Image
						src={coin.item.data.sparkline}
						alt="coinChart"
						width={500}
						height={50}
					/>
				</div>
			))}
		</div>
	);
}
