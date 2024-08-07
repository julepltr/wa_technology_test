import Modal from './modal.tsx';
import { characterType } from '../../type/character.ts';

type characterModalPropsType = {
	open: boolean;
	onClose: () => void;
	character: null | characterType
}

const CharacterModal = ({ open, onClose, character }: characterModalPropsType) => {
	return (
		<Modal open={open} onClose={onClose} title={character?.name ?? ''}>
			<div className="character_info">
				<img src={`https://picsum.photos/seed/${character?.name}/200`} alt={`${character?.name} picture`}/>
				<div className="character_details">
					<div>
						{character?.birth_year &&
							<div className="character_detail"><span>Birth year : </span><p>{character.birth_year}</p></div>}
						{character?.mass && <div className="character_detail"><span>Mass : </span><p>{character.mass!== 'unknown' ? character.mass+' kg': character.mass}</p></div>}
						{character?.height &&
							<div className="character_detail"><span>Height : </span><p>{character.height!== 'unknown' ? Number(character.height)/100 +' m': character.height}</p></div>}
						{character?.films &&
							<div className="character_detail"><span>Number of films appearence: </span><p>{character.films.length}</p></div>}
					</div>
					{character?.created &&
						<div className="added"><span>Added to the api on  </span>
							<p>{new Date(character.created).toLocaleDateString().replaceAll('/', '-')}</p></div>}
				</div>
			</div>
		</Modal>
	);
};

export default CharacterModal;