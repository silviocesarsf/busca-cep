import React from "react";
import { Modal } from "../../Styles";
import { AiFillCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";

export default function ModalComp({
	data,
	setIsModalOpen,
	textCep,
	setTextCep,
}) {
	const closeModal = () => {
		setTextCep(null);
		setIsModalOpen(false);
	};

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
			}}
		>
			<Modal>
				<div className="modal-header">
					<div className="title-header_modal">
						<h2>{textCep}</h2>
					</div>
					<div
						onClick={closeModal}
						className="button-close_modal"
					>
						<AiFillCloseSquare />
					</div>
				</div>
				<div className="modal-info">
					<div className="logradouro">
						<p>{data.logradouro}</p>
					</div>
					<div className="bairro">
						<p>{data.bairro}</p>
					</div>
					<div className="cidade">
						<p>
							{data.localidade} - {data.uf}
						</p>
					</div>
					<div className="ddd">
						<p>DDD {data.ddd}</p>
					</div>
				</div>
			</Modal>
		</motion.div>
	);
}
