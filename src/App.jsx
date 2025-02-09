import { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./TopBar";
import Game from "./Game";

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	// const cardsArray = new Array(10);
	const [imgsLoaded, setImgsLoaded] = useState(false);
	const pokeArray = [
		{
			name: "bulbasaur",
			id: 1,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		},
		{
			name: "charmander",
			id: 4,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		},
		{
			name: "squirtle",
			id: 7,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		},
		{
			name: "pidgey",
			id: 16,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		},
		{
			name: "gyarados",
			id: 130,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
		},
		{
			name: "magikarp",
			id: 129,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
		},
		{
			name: "pikachu",
			id: 25,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		},
		{
			name: "zapdos",
			id: 145,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
		},
		{
			name: "moltres",
			id: 146,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
		},
		{
			name: "articuno",
			id: 144,
			sprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
		},
	];

	useEffect(() => {
		const loadImage = (image) => {
			return new Promise((resolve, reject) => {
				const loadImg = new Image();
				loadImg.src = image.sprite;

				loadImg.onload = () => resolve(image.sprite);
				loadImg.onerror = (err) => reject(err);
			});
		};

		Promise.all(pokeArray.map((image) => loadImage(image)))
			.then(() => setImgsLoaded(true))
			.catch((err) => console.log("Failed to load images", err));
	}, []);
	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
		}
	}, [score]);

	return (
		<>
			<TopBar getScore={score} getBestScore={bestScore} />
			<Game
				cards={pokeArray}
				getScore={score}
				setScore={setScore}
				loaded={imgsLoaded}
			/>
		</>
	);
}

export default App;
