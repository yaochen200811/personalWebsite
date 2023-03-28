import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";
import { State } from "../type/app.type";
import { BackButton } from "./BubbleButton";

interface AboutProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const About = ({ setPage, displayPage }: AboutProps) => {
	return (
		<>
			<ContentContainer displayPage={displayPage}>
				<CenterContainer>
					<br />
					<br />
					Cell
					<br /> <a href={`tel:416-821-1762`}>416-821-1762</a> <br />
					<br />
					Email
					<br /> <a href={`mailto:yaochen200811@gmail.com`}>yaochen200811@gmail.com</a> <br />
					<br />
					Linkdin
					<br /> <a href="https://www.linkedin.com/in/chen-yao-196814204">linkedin.com/in/chen-yao-196814204</a> <br /> <br />
					Github
					<br /> <a href="https://www.github.com/yaochen200811">github.com/yaochen200811</a>
					{BackButton(() => setPage("home"))}
				</CenterContainer>
			</ContentContainer>
		</>
	);
};

const CenterContainer = styled.div`
	text-align: center;
	font-size: 2rem;
	word-break: break-word;

	@media (max-width: 900px) {
		font-size: 1.5rem;
	}
`;

export default About;
