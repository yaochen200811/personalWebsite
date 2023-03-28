import React from "react";
import styled from "styled-components";

interface ContentContainerProps {
	displayPage: boolean;
	children: any;
}

const ContentContainer = ({ displayPage, children }: ContentContainerProps) => {
	return (
		<OuterContainer style={{ opacity: displayPage ? 1 : 0, visibility: displayPage ? "visible" : "hidden" }}>
			<InnerContainer>{children}</InnerContainer>
		</OuterContainer>
	);
};

export default ContentContainer;

const InnerContainer = styled.div`
	overflow-y: scroll;
	margin: 48px;
	height: calc(100% - 96px - 7rem);
	font-size: 1.5rem;
	overflow-x: hidden;

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #fff0;
	}

	::-webkit-scrollbar-thumb {
		background-color: #bef9f170;
		border-radius: 8px;
		transition: background-color 0.2s;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #bef9f1;
	}

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: #78f7bd;
	}
`;

const OuterContainer = styled.div`
	max-width: 1080px;
	width: max(100vw - 32px, 80vw);
	height: -webkit-fill-available;
	margin: 10vh 16px;
	position: fixed;
	top: 0px;
	left: calc(50vw - 16px);
	transform: translateX(-50%);
	border-radius: 48px;
	transition: visibility 0s 0.2s, opacity 0.2s;
	border: 5px solid #0042a1;
	background: linear-gradient(180deg, #c7e8ff80, #00457480);
	color: #abefff;
	text-shadow: black 1px 0 3px, black 0 1px 3px, black -1px 0 3px, black 0 -1px 3px;
`;
