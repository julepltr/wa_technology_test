import CharacterList from '../components/characterList.tsx';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@tanstack/react-query';

const mockedData = {
	name: 'a',
	url : 'a',
	height: '120',
	mass: '30',
	birth_year: "123",
	created: "a day",
	films: ["film 1", "film 2"],
};

vi.mock('@tanstack/react-query');

describe('characterList', () => {
	afterEach(() => {
		vi.clearAllMocks();
		vi.resetAllMocks();
	});

	it('should display error', async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		vi.mocked(useQuery).mockReturnValue(({ data: {}, isLoading: false, isError: true }));

		render(<CharacterList/>);
		const error = await screen.findByTestId('character_list_error');
		expect(error).toBeInTheDocument();
	});
	it('should display loading placeholder', async () => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		vi.mocked(useQuery).mockReturnValue(({ data: {}, isLoading: true, isError: false }));

		render(<CharacterList/>);
		const loadings = screen.getAllByTestId('loading_character_card');
		expect(loadings.length).toBeGreaterThan(0);
	});
	it('should display number of card received', async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		vi.mocked(useQuery).mockReturnValue(({
			data: {
				count: 2,
				next: null,
				previous: null,
				results: [{...mockedData}, {...mockedData}]
			}, isLoading: false, isError: false
		}));

		render(<CharacterList/>);
		const cards = screen.getAllByTestId('character_card');
		expect(cards.length).toEqual(2);
	});
	it('should display modal', async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		vi.mocked(useQuery).mockReturnValue(({
			data: {
				count: 2,
				next: null,
				previous: null,
				results: [{...mockedData}, {...mockedData}]
			}, isLoading: false, isError: false
		}));

		render(<CharacterList/>);
		const cards = screen.getAllByTestId('character_card');
		fireEvent.click(cards[1].children[0]);
		const modal = screen.getByTestId('modal');
		expect(modal).toBeInTheDocument();
	});
});