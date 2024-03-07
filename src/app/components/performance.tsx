import React from "react";

export default function Performance() {
  return (
    <div className="flex flex-col w-[881px] h-[632px] bg-white rounded-md text-black p-6 gap-6">
      <h1 className="text-2xl font-medium text-black">Performance</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-8">
          <div className="flex flex-col gap-2 w-1/5">
            <h2 className="text-sm">Todays Low</h2>
            <p>46,930.22</p>
          </div>
          <div className="w-full h-[4px] rounded-xl bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68]" />
          <div className="flex flex-col gap-2 w-1/5">
            <h2 className="text-sm">Todays High</h2>
            <p>49,343.83</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="flex flex-col gap-2 w-1/5">
            <h2 className="text-sm">52W Low</h2>
            <p>46,930.22</p>
          </div>
          <div className="w-full h-[4px] rounded-xl bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68]" />
          <div className="flex flex-col gap-2 w-1/5">
            <h2 className="text-sm">52W High</h2>
            <p>49,343.83</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium text-gray-700">Fundamentals</h1>
        <div className="flex gap-20 w-full">
          <div className="flex flex-col gap-4 w-1/2 ">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                Bitcoin Price
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
              24h Low / 24h High
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
              7d Low / 7d High
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
              Trading Volume
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
              Market Cap Rank
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-4 w-1/2 ">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                Market Cap
              </h2>
              <p>$323,507,290,047</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                Bitcoin Price
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                Bitcoin Price
              </h2>
              <p>$16,815.46</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                All Time High
              </h2>
              <div className="flex flex-col">
                <p className="text-base text-black">
                  $69,044.77 <span className="text-red-500 ">-75.6%</span>
                </p>
                <p className="text-xs text-gray-600">
                  Nov 10, 2021 (about 1 year)
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-medium text-gray-400">
                All Time Low
              </h2>
              <div className="flex flex-col">
                <p className="text-base text-black">
                  $67.81 <span className="text-green-500 ">24729.1%</span>
                </p>
                <p className="text-xs text-gray-600">
                  Jul 06, 2013 (over 9 years)
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
