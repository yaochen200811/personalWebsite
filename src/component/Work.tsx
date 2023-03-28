import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";
import { State } from "../type/app.type";
import { BackButton } from "./BubbleButton";

interface WorkProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const Work = ({ setPage, displayPage }: WorkProps) => {
	return (
		<>
			<ContentContainer displayPage={displayPage}>
				<h2>FULL-STACK SOFTWARE DEVELOPER | MANORLEAD | 2021.5 – PRESENT</h2>
				<a href="https://www.manorlead.com">website</a> <br /> <br />
				<li>Working as the major developer of web front-end. Website built with JavaScript, React, and various web developing tools and libraries. Features include location maps, 3D models, and AI real estate price prediction · Helps with website design and gives back-end suggestions </li>
				<li>Lead developer of a mobile AR APP. Build with Unity AR with geolocation, surface detection and more </li>
				<li>Lead developer of a openAI based WhatsApp and website chatbot. Features include helping customers find residential listings, making appointments, and getting notifications </li>
				<li>Actively participated in team meetings to update the workflow to contribute to the progress of the project </li>
				<li>Earned positive feedback from the team manager about my strong work ethic </li>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

export default Work;
