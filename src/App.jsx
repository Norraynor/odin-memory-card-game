import { useState } from "react";
import "./App.css";
import TopBar from "./TopBar";
import Game from "./Game";

function App() {
	const [score, setScore] = useState(0);
	// const cardsArray = new Array(10);
	const pokeArray = [
		{
			name: "bulbasaur",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			name: "charmander",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		},
		{
			name: "squirtle",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		},
		{
			name: "pidgey",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		},
		{
			name: "gyarados",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
		},
		{
			name: "magikarp",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
		},
		{
			name: "pikachu",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		},
		{
			name: "zapdos",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
		},
		{
			name: "moltres",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
		},
		{
			name: "articuno",
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
		},
	];
	return (
		<>
			<TopBar getScore={score} />
			<Game cards={pokeArray} getScore={score} setScore={setScore} />
		</>
	);
}

export default App;
