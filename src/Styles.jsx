import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	& :nth-child(n) {
		margin: 1rem 0;
	}
	.search-cep {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		justify-content: flex-start;
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-weight: 200;
`;

export const Input = styled.input`
	height: 50px;
	min-width: 20vw;
	padding: 0 1rem;
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.text};
	font-size: 1.2em;

	&:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	height: 50px;
	width: 40px;
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.text};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5em;
`;

export const Modal = styled.div`
	background: ${(props) => props.theme.colors.secundary};
	border-radius: 10px;
	/* position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 1rem 2rem;

	.modal-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 30px;
	}

	.button-close_modal :first-child {
		cursor: pointer;
		color: #fa6f6f;
		font-size: 3em;
		transition: 0.5s;
	}

	.button-close_modal :first-child:hover {
		color: red;
	}

	.modal-info {
		min-height: 50vh;
		min-width: 30vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 1.3em;
		text-transform: uppercase;
	}

	.modal-info :nth-child(n) {
		margin: 10px 0;
	}

	@media screen and (max-width: 768px) {
		.modal-info {
			min-height: 60vh;
			min-width: 60vw;
		}
	}
`;
