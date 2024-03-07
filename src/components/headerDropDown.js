import React from "react";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

export default function App() {
	return (
		<Dropdown>
			<DropdownTrigger>
				<Button variant="bordered">
					<svg
						width="28"
						height="29"
						viewBox="0 0 28 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M4.01196 9.80613V7.52148H24.5738V9.80613H4.01196ZM4.01196 15.518H24.5738V13.2334H4.01196V15.518ZM4.01196 21.2299H24.5738V18.9452H4.01196V21.2299Z"
							fill="#0B182F"
						/>
					</svg>
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem key="new">Crypto Taxex</DropdownItem>
				<DropdownItem key="copy">Free Tools</DropdownItem>
				<DropdownItem key="edit">resource Center</DropdownItem>
				<DropdownItem key="delete" className="text-danger" color="danger">
					Get Started
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
