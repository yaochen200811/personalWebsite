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
				<h2>FULL-STACK SOFTWARE DEVELOPER | Manorlead | Richmond Hill, ON | May 2021 - Present </h2>
				<a href="https://www.manorlead.com">website</a> <br /> <br />
				<li>Working as the major developer of web front-end. Website building with JavaScript, React, and various libraries. Features include location maps, 3D models, and AI real estate price prediction </li>
				<li>Made improvements that increased the website home page loading speed by 20%</li>
				<li>Engaging in website design and giving back-end suggestions</li>
				<li>Introducing the website structure to interns. Answering their questions when they are working on tasks</li>
				<li>Building mobile AR APP with Unity AR with geolocation, surface detection as the lead developer</li>
				<li>Managing the openAI based WhatsApp and website chatbot project. Features include helping customers find residential listings,making appointments, and getting notifications</li>
				<li>Actively participate in team meetings to update the workflow to contribute to the progress of the project.</li>
				<li>Earned positive feedback from the team manager about my strong work ethic</li>
				<br />
				<h2>Customer Support Agent | Qianmi | Jiangsu, China | May 2017 – July 2017</h2>
				<li>Communicated with customers to get the requirements of their ideal home page then built and maintained the home page with the Qianmi WeChat Mini Programs</li>
				<li>Designed event posters for customers using Adobe Photoshop </li>
				<li>Addressed the needed new features and improvable points to developers and discussed which points are worth to implement and how to achieve the goal</li>
				<li>Serviced a total of over five customers and earned positive feedback</li>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

export default Work;
