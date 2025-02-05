/* eslint-disable react/prop-types */
//cards go here and all the clicking etc.
import Card from "./Card";
import "./Game.css";
function Game(props) {
	let currentScore = props.getScore;
	let cards = [...props.cards];
	cards.map((card) => {
		card.isClicked = false;
	});
	function handleClick(card) {
		props.setScore(currentScore + 1);
		console.log(card.target.getAttribute("pokeID"));
		//check if clicked
		let selectedCard = cards.filter(
			(c) => c.id == card.target.getAttribute("pokID")
		);
		console.log(selectedCard);
		//shuffle
	}
	console.log(cards);
	return (
		<div className="game">
			<div className="board">
				{props.loaded ? (
					cards.map((card, index) => (
						<Card
							key={index}
							id={index}
							pokeID={card.id}
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
