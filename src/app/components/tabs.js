import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function TabsOptions() {

	return (
		<div className="flex flex-wrap gap-4">
			<Tabs
				key="underlined"
				variant="underlined"
				aria-label="Tabs variants"
				color="primary"
			>
				<Tab key="Fundamentals" title="Fundamentals"></Tab>
				<Tab key="News Insights" title="News Insights" />
				<Tab key="Sentiments" title="Sentiments" />
				<Tab key="vidTeameos" title="Team" />
				<Tab key="Technicals" title="Technicals" />
				<Tab key="Tokenomics" title="Tokenomics" />
			</Tabs>
		</div>
	);
}
