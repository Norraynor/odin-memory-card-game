//cards go here and all the clicking etc.
import Card from "./Card";
function Game(props) {
	function handleClick() {}
	return (
		<div className="game">
			<div className="board">
				{/*props.cards.map((card, index) => (
					<Card
						key={index}
						id={index}
						imgUrl={card.imgUrl}
						name={card.name}
						handleClick={handleClick}
					/>
				))*/}
			</div>
		</div>
	);
}

export default Game;
