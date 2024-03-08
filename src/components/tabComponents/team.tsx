import React from "react";
import vercel from "../../../public/vercel.svg";
import Image from "next/image";
import solid from "../../../public/solid.svg";
export default function Team() {
	return (
		<div className="rounded-md  p-8 bg-white w-full">
			<div className="text-2xl font-medium" id="team">
				Team
			</div>
			<div className="w-full pt-6">
				<div className="pt-2">
					Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
					nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
					quam. Facilisis purus convallis quam augue.
				</div>
			</div>
			<div className="w-full bg-blue-100 rounded-md sm:flex mt-4 p-4">
				<div className="flex-shrink-0">
					<Image
						src={solid}
						width={96}
						height={96}
						alt="img"
						className="p-4 mx-auto"
					></Image>
					<div className="text-center">John Smith</div>
					<div className="text-center text-xs text-gray-600">
						Designation here
					</div>
				</div>
				<div className='p-6'>
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</div>
			</div>
            <div className="w-full bg-blue-100 rounded-md sm:flex mt-4 p-4">
				<div className="flex-shrink-0">
					<Image
						src={solid}
						width={96}
						height={96}
						alt="img"
						className="p-4 mx-auto"
					></Image>
					<div className="text-center">John Smith</div>
					<div className="text-center text-xs text-gray-600">
						Designation here
					</div>
				</div>
				<div className='p-6'>
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</div>
			</div>
            <div className="w-full bg-blue-100 rounded-md sm:flex mt-4 p-4">
				<div className="flex-shrink-0">
					<Image
						src={solid}
						width={96}
						height={96}
						alt="img"
						className="p-4 mx-auto"
					></Image>
					<div className="text-center">John Smith</div>
					<div className="text-center text-xs text-gray-600">
						Designation here
					</div>
				</div>
				<div className='p-6'>
					Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
					fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
					nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
					neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
					quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
					dolor est ipsum. Malesuada etiam mi gravida praesent interdu
				</div>
			</div>
		</div>
	);
}
