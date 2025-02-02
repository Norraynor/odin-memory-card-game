/* eslint-disable react/prop-types */
//card is created here
import "./Card.css";
function Card(props) {
	return (
		<>
			<div className="card" onClick={props.handleClick}>
				<div className="image">
					<img src={props.imgUrl} alt={props.name} />
				</div>
				<div className="title">{props.name}</div>
			</div>
		</>
	);
}
export default Card;
