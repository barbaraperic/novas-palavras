"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
	const router = useRouter();

	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState("");
	const [context, setContext] = useState("");
	const [difficulty, setDifficulty] = useState("low");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		const newTicket = {
			word,
			translation,
			context,
			difficulty,
		};

		const res = await fetch("http://localhost:4000/words", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTicket),
		});

		if (res.status === 201) {
			router.refresh();
			router.push("/words");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col space-y-4 items-center">
			<label className="w-full">
				<span>Word:</span>
				<input
					className="w-full"
					required
					type="text"
					onChange={(e) => setWord(e.target.value)}
					value={word}
				/>
			</label>
			<label className="w-full">
				<span>Translation:</span>
				<input
					className="w-full"
					required
					type="text"
					onChange={(e) => setTranslation(e.target.value)}
					value={translation}
				/>
			</label>
			<label className="w-full">
				<span>Title:</span>
				<textarea
					className="w-full"
					required
					onChange={(e) => setContext(e.target.value)}
					value={context}
				/>
			</label>
			<label className="w-full">
				<span>Difficulty:</span>
				<select
					className="w-full"
					onChange={(e) => setDifficulty(e.target.value)}
					value={difficulty}>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</label>
			<button className="btn-primary" disabled={isLoading}>
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	);
}
