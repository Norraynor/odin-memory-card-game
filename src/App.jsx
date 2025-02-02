import { useState } from "react";
import "./App.css";
import TopBar from "./TopBar";
import Game from "./Game";

function App() {
	const [score, setScore] = useState(0);
	const cardsArray = new Array(10);
	return (
		<>
			<TopBar getScore={score} />
			<Game cards={cardsArray} getScore={score} setScore={setScore} />
		</>
	);
}

export default App;
