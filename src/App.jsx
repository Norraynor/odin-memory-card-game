import { useState } from "react";
import "./App.css";
import TopBar from "./TopBar";
import Game from "./Game";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<TopBar />
			<Game />
		</>
	);
}

export default App;
