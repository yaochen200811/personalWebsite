import React from "react";
import styled from "styled-components";

interface BubbleButtonProps {
	onClick: () => void;
	children: any;
	top?: string;
	left?: string;
	bottom?: string;
	right?: string;
}

const BubbleButton = ({ children, onClick, top, left, bottom, right }: BubbleButtonProps) => {
	return (
		<Bubble onClick={onClick} style={{ top: top, left: left, bottom: bottom, right: right }}>
			<Text>{children}</Text>
			<Highlight1 />
			<Highlight2 />
		</Bubble>
	);
};

export const BackButton = (onClick: () => void) => {
	return (
		<BackBubble onClick={onClick}>
			<Text>Back</Text>
			<Highlight1 />
			<Highlight2 />
		</BackBubble>
	);
};

export default BubbleButton;

const Bubble = styled.div`
	position: fixed;
	width: 10rem;
	height: 10rem;
	background: radial-gradient(#94d4f540, #94d4f5b0);
	border-radius: 50%;
	border: 0.15rem solid #40afddb0;
	cursor: pointer;
	transition: scale 0.2s;

	:hover {
		scale: 1.1;
	}

	@media (max-width: 900px) {
		scale: 0.7;
		:hover {
			scale: 0.8;
		}
	}
`;

const BackBubble = styled(Bubble)`
	left: calc(48px - 3rem);
	bottom: calc(48px - 3rem);
	scale: 0.6;
	font-size: 3rem;

	:hover {
		scale: 0.7;
	}
`;

const Text = styled.div`
	position: absolute;
	width: 100%;
	text-align: center;
	z-index: 1;
	top: 50%;
	transform: translateY(-50%);
	text-shadow: #0f917b 0 0 5px;
	font-weight: 500;
	color: #c9ebff;
`;

const Highlight1 = styled.div`
	position: absolute;
	top: 1rem;
	right: 2rem;
	width: 1.2rem;
	height: 2.5rem;
	background: radial-gradient(white 40%, transparent);
	border-radius: 50%;
	transform: rotateZ(134deg);
`;

const Highlight2 = styled.div`
	position: absolute;
	top: 2.8rem;
	right: 2.8rem;
	width: 1rem;
	height: 1.5rem;
	background: radial-gradient(white 40%, transparent);
	border-radius: 50%;
	transform: rotateZ(133deg);
`;
