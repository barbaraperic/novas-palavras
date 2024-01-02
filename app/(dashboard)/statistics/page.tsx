import { Heading3 } from "@/app/components/texts/Texts";
import { getAllCollections, getAllCurrentCollections } from "@/utils/actions";
import React from "react";
import Graph from "./graph";

export default async function Dashboard() {
	const collection = await getAllCurrentCollections();

	console.log(collection);

	// randomise collection

	return (
		<main className="flex flex-col flex-1 h-full">
			<Heading3 className="text-text-highlight">Statistics</Heading3>
			<div className="relative mb-6 rounded-lg space-y-10 flex-1 flex flex-col justify-center items-center">
				<Graph collection={collection.data} />
			</div>
		</main>
	);
}