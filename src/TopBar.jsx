/* eslint-disable react/prop-types */
// game name goes here and score
import "./TopBar.css";
function TopBar(props) {
	return (
		<>
			<div className="top-bar">
				<div className="left">
					<div className="name">Pokemon Memory Game</div>
					<div className="rules">
						Click cards that haven`t been clicked in this round for score
					</div>
				</div>
				<div className="right">
					<div className="score">Score: {props.getScore}</div>
					<div className="best">Best Score: {props.getBestScore}</div>
				</div>
			</div>
		</>
	);
}

export default TopBar;
