const LoadingCharacterCard = () => {
	return (
		<li className="character_card is_loading" data-testid="loading_character_card">
			<div aria-label={`Character card placeholder`}>
				<div className="img"/>
				<div className="character_name"></div>
			</div>
		</li>
	);
};

export default LoadingCharacterCard;