import { characterResponseType } from '../type/character.ts';

export const getCharacters = async (page = 1): Promise<characterResponseType> => {
	const res = await fetch(`https://swapi.dev/api/people?page=${page}`)
	return await res.json()
}