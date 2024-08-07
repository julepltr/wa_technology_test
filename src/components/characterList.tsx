import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../services/swapi.ts';
import CharacterModal from './modals/characterModal.tsx';
import Pagination from './pagination.tsx';
import CharacterCard from './characterCard.tsx';
import LoadingCharacterCard from './loadingCharacterCard.tsx';
import Error from './error.tsx';

const CharacterList = () => {
	const [page, setPage] = useState(1);
	const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number | null>(null);
	const { data, isLoading, isError } = useQuery({
		queryKey: ['characters', page],
		queryFn: () => getCharacters(page),
	});

	if (isError) return <Error data-testid="character_list_error"/>;
	return (
		<>
			<ul className="character_list" data-testid="character_list">
				{isLoading ?
					[...Array(10).keys()].map((i) => <LoadingCharacterCard key={i} data-testid={`loading_character_card_${i}`}/> )
					: data?.results?.map((character, index) =>
						<CharacterCard key={index} character={character} onClick={() => setSelectedCharacterIndex(index)}/>
					)}
			</ul>
			<Pagination currentPage={page} totalCount={data?.count ?? 0} itemsPerPage={10}
									onPageChange={(newPage) => setPage(newPage)}/>
			<CharacterModal open={selectedCharacterIndex !== null} onClose={() => setSelectedCharacterIndex(null)}
											character={selectedCharacterIndex !== null && data? data.results[selectedCharacterIndex] : null}/>
		</>
	)
		;
};

export default CharacterList;