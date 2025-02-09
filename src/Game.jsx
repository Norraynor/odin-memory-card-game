/* eslint-disable react/prop-types */
//cards go here and all the clicking etc.
import Card from "./Card";
import { useEffect, useState } from "react";
import "./Game.css";
function Game(props) {
	let currentScore = props.getScore;
	const [cards, setCards] = useState([...props.cards]);
	function resetCards() {
		let newCards = [...cards];
		newCards.map((card) => {
			card.isClicked = false;
		});
		setCards(newCards);
	}
	useEffect(() => {
		resetCards();
	}, []);

	function shuffle(array) {
		let currentIndex = array.length;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {
			// Pick a remaining element...
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
	}
	function handleClick(card) {
		//check if clicked
		let selectedCardIndex = cards.findIndex((c) => {
			return c.id == card.target.getAttribute("pokeid");
		});

		if (cards[selectedCardIndex].isClicked == true) {
			props.setScore(0);
			resetCards();
		} else {
			props.setScore(currentScore + 1);
			let newCards = [...cards];
			newCards[selectedCardIndex].isClicked = true;
			setCards(newCards);
		}
		//shuffle
		let shuffleArray = [...cards];
		shuffle(shuffleArray);
		setCards(shuffleArray);
	}
	return (
		<div className="game">
			<div className="board">
				{props.loaded ? (
					cards.map((card, index) => (
						<Card
							key={index}
							id={index}
							pokeid={card?.id}
							imgUrl={card?.sprite}
							name={card?.name}
							handleClick={handleClick}
						/>
					))
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
}

export default Game;
