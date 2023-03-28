import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";
import { State } from "../type/app.type";
import { BackButton } from "./BubbleButton";

interface SkillProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const languages = ["Python", "Java", "C", "C#", "C++", "JavaScript", "HTML", "CSS", "PHP", "SQL", "MongoDB"];
const tools = ["NodeJS", "Unix", "Git", "Bash", "Unity", "Docker", "Apache Spark"];
const packages = ["CUDA", "NumPy", "PyTorch", "React", "Redux", "WebGL", "TypeScrip", "SASS", "Material-UI", "Ant Design", "Google Analytics", "intl", "styled-components", "craco", "Mapbox"];

const Skill = ({ setPage, displayPage }: SkillProps) => {
	return (
		<>
			<ContentContainer displayPage={displayPage}>
				<h3>Programming Languages:</h3>
				<SkillContainer>
					{languages.map((skill) => (
						<SkillCell key={skill}>{skill}</SkillCell>
					))}
				</SkillContainer>
				<h3>Tools:</h3>
				<SkillContainer>
					{tools.map((skill) => (
						<SkillCell key={skill}>{skill}</SkillCell>
					))}
				</SkillContainer>
				<h3>Packages:</h3>
				<SkillContainer>
					{packages.map((skill) => (
						<SkillCell key={skill}>{skill}</SkillCell>
					))}
				</SkillContainer>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

const SkillContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const SkillCell = styled.li`
	max-width: 33%;
	width: 33%;
`;

export default Skill;
