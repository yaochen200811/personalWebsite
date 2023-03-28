import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";
import { State } from "../type/app.type";
import { BackButton } from "./BubbleButton";

interface ProjectProps {
	setPage: (page: State) => void;
	displayPage: boolean;
}

const Project = ({ setPage, displayPage }: ProjectProps) => {
	return (
		<>
			<ContentContainer displayPage={displayPage}>
				<h2>LD48- Treasure | 2021.4</h2>
				<a href="https://ldjam.com/events/ludum-dare/48/treasure">website</a> <br /> <br />
				<li>A game developed for Ludum Dare 48, 72-hour game development Jam. The game was developed with one teammate. All the code and assets were completed in 72 hours</li>
				<li>Developed with Unity as the game engine, graphic assets drawn with Adobe PS, and sound effects made with sfxr. Handled problems such as 2D sprites shader, and web server setup</li>
				<br />
				<h2>SlideChat | 2020.8</h2>
				<a href="https://github.com/larryyueli/slidechat">github</a> <br /> <br />
				<li>Slidechat is an online content publishing platform used by professors and students at U of T</li>
				<li>Allows Professors to upload course slides with audios, and students can comment on each page</li>
				<li>Developed with MongoDB, Express, NodeJS, React and various web developing tools and libraries</li>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

export default Project;
