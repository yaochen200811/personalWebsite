import React from "react";
import styled from "styled-components";

import { State } from "../type/app.type";
import BubbleButton from "./BubbleButton";

interface HomeProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const Home = ({ setPage, displayPage }: HomeProps) => {
	return (
		<Container style={{ opacity: displayPage ? 1 : 0, visibility: displayPage ? "visible" : "hidden" }}>
			<Nanme>Chen Yao</Nanme>
			<NameShadow>Chen Yao</NameShadow>
			<BubbleButton onClick={() => setPage("work")} bottom="20vh" left="13vw">
				Work
			</BubbleButton>
			<BubbleButton onClick={() => setPage("about")} bottom="10vh" left="calc(50vw - 5rem)">
				About
			</BubbleButton>
			<BubbleButton onClick={() => setPage("project")} bottom="20vh" right="13vw">
				Projects
			</BubbleButton>
			<BubbleButton onClick={() => setPage("education")} bottom="50vh" left="8vw">
				Education
			</BubbleButton>
			<BubbleButton onClick={() => setPage("skill")} bottom="50vh" right="8vw">
				Skills
			</BubbleButton>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	transition: visibility 0s 0.2s, opacity 0.2s;
`;

const Nanme = styled.div`
	position: fixed;
	font-size: 9rem;
	bottom: 37vh;
	left: 50vw;
	transform: translateX(-50%);
	width: max-content;
	color: #5cd9ff;
	font-family: Aquino;
	line-height: 1.1;
`;

const NameShadow = styled(Nanme)`
	transform: translateX(-50%) scale(1, -1) translateY(-100%);
	background-image: linear-gradient(to top, #5cd9ff80 10%, #5cd9ff33 50%, #5cd9ff00 70%);
	-webkit-background-clip: text;
	color: transparent;
	text-shadow: none;
	user-select: none;
`;
