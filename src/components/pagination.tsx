import { usePagination } from '../hooks/usePagination.ts';
import dots from "../assets/icons/dots.svg";

type paginationProps = {
	currentPage: number;
	totalCount: number;
	itemsPerPage: number;
	onPageChange: (arg0: number) => void;
}
const Pagination = ({ totalCount, itemsPerPage, currentPage, onPageChange }: paginationProps) => {
	const paginationRange = usePagination({ totalCount, pageSize: itemsPerPage, currentPage });

	return (
		<div className="pagination">{paginationRange?.map((item, index) => {
			if (item !== '...')
				return <button disabled={item === currentPage} key={index} onClick={() => onPageChange(item as number)}>{item}</button>;
			return <img key={index} className="dots" src={dots} alt=""/>;
		})}</div>
	);
};
export default Pagination;