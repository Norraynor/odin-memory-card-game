//card is created here
function Card(props) {
	return (
		<>
			<div className="card">
				<div className="image">
					<img src={props.imgUrl} alt={props.name} />
				</div>
				<div className="title">{props.name}</div>
			</div>
		</>
	);
}
export default Card;
