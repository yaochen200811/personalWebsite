import styled from "styled-components";

export const ContentContainer = styled.div`
	max-width: 1080px;
	width: max(100vw - 128px, 80vw);
	height: -webkit-fill-available;
	margin: 10vh 16px;
	padding: 48px;
	position: fixed;
	top: 0px;
	left: calc(50vw - 16px);
	transform: translateX(-50%);
	background-color: rgba(255, 255, 255, 0.565);
	border-radius: 48px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;
