/* eslint-disable react/prop-types */
//cards go here and all the clicking etc.
import Card from "./Card";
import "./Game.css";
function Game(props) {
	let currentScore = props.getScore;
	function handleClick() {
		props.setScore(currentScore + 1);
	}
	let cards = [...props.cards];
	console.log(cards);
	return (
		<div className="game">
			<div className="board">
				{cards.map((card, index) => (
					<Card
						key={index}
						id={index}
						imgUrl={card?.imgUrl}
						name={card?.name}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
}

export default Game;
