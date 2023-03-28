import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { State } from "../type/app.type";
import BubbleButton from "./BubbleButton";

interface HomeProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const Home = ({ setPage, displayPage }: HomeProps) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth > 900) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);

	const MobileButtons = (
		<>
			<BubbleButton onClick={() => setPage("work")} bottom="20vh" left="16px">
				Work
			</BubbleButton>
			<BubbleButton onClick={() => setPage("about")} bottom="5vh" left="calc(50vw - 5rem)">
				About
			</BubbleButton>
			<BubbleButton onClick={() => setPage("project")} bottom="20vh" right="16px">
				Projects
			</BubbleButton>
			<BubbleButton onClick={() => setPage("education")} bottom="50vh" left="16px">
				Education
			</BubbleButton>
			<BubbleButton onClick={() => setPage("skill")} bottom="50vh" right="16px">
				Skills
			</BubbleButton>
		</>
	);

	const DeskButtons = (
		<>
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
		</>
	);

	return (
		<Container style={{ opacity: displayPage ? 1 : 0, visibility: displayPage ? "visible" : "hidden" }}>
			<Nanme>Chen Yao</Nanme>
			<NameShadow>Chen Yao</NameShadow>
			{isMobile ? MobileButtons : DeskButtons}
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

	@media (max-width: 900px) {
		font-size: 3rem;
		bottom: 43vh;
	}
`;

const NameShadow = styled(Nanme)`
	transform: translateX(-50%) scale(1, -1) translateY(-100%);
	background-image: linear-gradient(to top, #5cd9ff80 10%, #5cd9ff33 50%, #5cd9ff00 70%);
	-webkit-background-clip: text;
	color: transparent;
	text-shadow: none;
	user-select: none;
`;
