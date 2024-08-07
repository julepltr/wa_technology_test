import { characterType } from '../type/character.ts';

type characterCardProps = {
	character: characterType;
	onClick: () => void;
}

const CharacterCard = ({ character, onClick }: characterCardProps) => {
	return (
		<li className="character_card" data-testid="character_card">
			<button onClick={onClick} aria-label={`Click to have more info about ${character.name}`}>
					<img src={`https://picsum.photos/seed/${character.name}/200`} alt={`${character.name} picture`}/>
				<div className="character_name"><h2>{character.name}</h2></div>
			</button>
		</li>
	);
};

export default CharacterCard;