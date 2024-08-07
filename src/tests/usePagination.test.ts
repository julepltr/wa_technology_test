import { renderHook } from '@testing-library/react';
import { usePagination, usePaginationProps } from '../hooks/usePagination.ts';
import { expect } from 'vitest';

describe('usePagination', () => {
	it('should return a default value', () => {
		const initialValue: usePaginationProps = {
			totalCount:50,
			pageSize: 10,
			siblingCount:2,
			currentPage:4
		};
		const { result } = renderHook(() => usePagination(initialValue));

		expect(result.current).toEqual([1,2,3,4,5]);
	});
	it('should return a middle pagination', () => {
		const initialValue: usePaginationProps = {
			totalCount: 124,
			pageSize: 12,
			siblingCount:2,
			currentPage:6
		};
		const { result } = renderHook(() => usePagination(initialValue));

		expect(result.current).toEqual([1,"...",4,5,6,7,8,"...",11]);
	});
	it('should return max pagination', () => {
		const initialValue: usePaginationProps = {
			totalCount: 124,
			pageSize: 12,
			siblingCount:2,
			currentPage:14
		};
		const { result } = renderHook(() => usePagination(initialValue));

		expect(result.current).toEqual([1,"...",6,7,8,9,10,11]);
	});
});