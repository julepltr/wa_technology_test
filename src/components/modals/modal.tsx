import ReactDOM from 'react-dom';
import { ReactNode, useEffect } from 'react';
import Close from "../../assets/icons/close.svg";

type modalPropsType = {
	open: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
}

const Modal = ({ open, onClose, title, children }: modalPropsType) => {
	useEffect(()=> {
		if(open)
			document.body.style.overflow = "hidden";
		else
			document.body.style.overflow = "";
	}, [open])

	if (!open) {
		return null;
	}


	return ReactDOM.createPortal(
		<div className="modal_wrapper" onClick={onClose}>
			<div className="modal" data-testid="modal" onClick={(e)=> e.stopPropagation()}>
				<div className="modal_header">
					<h2 className="modal_title">{title}</h2>
					<button onClick={onClose} aria-label={"close details"}>
						<img src={Close} alt=""/>
					</button>
				</div>
				<div className="modal_body">
					{children}
				</div>
			</div>
		</div>
		, document.body
	);
};

export default Modal;