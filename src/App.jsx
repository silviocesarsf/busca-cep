import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, Input, Title, Wrapper } from "./Styles";
import { AiOutlineSearch } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import ModalComp from "./components/ModalComp/ModalComp";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [data, setData] = useState({});
	const [textCep, setTextCep] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleCepNumber = (e) => {
		setTextCep(e.target.value);
	};

	const requestApi = async () => {
		try {
			if (!textCep) {
				throw new Error("Verifique as informações digitadas");
			}
			const response = await fetch(
				`https://viacep.com.br/ws/${textCep}/json/`
			);
			const data = await response.json();
			if (data.erro) {
				throw new Error("Nenhum endereço encontrado");
			}
			setData(data);
			setIsModalOpen(true);
		} catch (err) {
			setIsError(true);
			toast.error(err.message);
		}
	};

	return (
		<Wrapper>
			<ToastContainer
				position="bottom-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			{isModalOpen && (
				<ModalComp
					setIsModalOpen={setIsModalOpen}
					data={data}
					textCep={textCep}
					setTextCep={setTextCep}
				/>
			)}
			{!isModalOpen && (
				<div className="container-search">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Title>Busca CEP</Title>
						<div className="search-cep">
							<Input
								onChange={handleCepNumber}
								type="number"
							/>
							<Button onClick={requestApi}>
								<AiOutlineSearch />
							</Button>
						</div>
					</motion.div>
				</div>
			)}
		</Wrapper>
	);
}

export default App;
