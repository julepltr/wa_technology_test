import { useMemo } from 'react';

export type usePaginationProps = {
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
	currentPage: number;
}

const DOTS = '...';
export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage
}: usePaginationProps) => {
	const maxPage = useMemo(() => {
		return Math.ceil(totalCount / pageSize);
	}, [totalCount, pageSize]);
	return useMemo(() => {
		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= maxPage) {
			return Array.from({ length: maxPage }, (_, idx) => idx + 1);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			maxPage
		);

		const showLeftDots = leftSiblingIndex > 2;
		const showRightDots = rightSiblingIndex < maxPage - 1;

		if (!showLeftDots && showRightDots) {
			const leftItemCount = 2 + 2 * siblingCount;
			const leftRange = Array.from({ length: leftItemCount }, (_, idx) => idx + 1);

			return [...leftRange, DOTS, maxPage];
		}

		if (showLeftDots && showRightDots) {
			const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, idx) => idx + leftSiblingIndex);
			return [1, DOTS, ...middleRange, DOTS, maxPage];
		}

		if (showLeftDots && !showRightDots) {
			const rightItemCount = 2 + 2 * siblingCount;
			const rightRange = Array.from({ length: rightItemCount }, (_, idx) => idx + maxPage - rightItemCount + 1);
			return [1, DOTS, ...rightRange];
		}


	}, [maxPage, siblingCount, currentPage]);
};