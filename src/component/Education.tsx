import React from "react";

import ContentContainer from "./ContentContainer";
import { State } from "../type/app.type";
import { BackButton } from "./BubbleButton";

interface EducationProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const Education = ({ setPage, displayPage }: EducationProps) => {
	return (
		<>
			<ContentContainer displayPage={displayPage}>
				<h2>Honours Bachelor of Science | University of Toronto | 2017-2021</h2>
				<h3>Specialist in Computer Science</h3>
				Awards: <br />
				<li>Graduated with High Distinction </li>
				<li>Dean's List Scholar</li>
				<li>Mathematical and Computational Sciences Honour Roll</li>
				<li>University of Toronto Mississauga Entrance Scholarship</li>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

export default Education;
