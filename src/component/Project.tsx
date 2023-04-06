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
				<h2>LD48- Treasure | April 2021</h2>
				<a href="https://ldjam.com/events/ludum-dare/48/treasure">website</a> <br /> <br />
				<li>A game developed for Ludum Dare 48, 72-hour game development Jam. The game was developed with one teammate. All the code and assets were completed in 72 hours</li>
				<li>Developed with Unity as the game engine, graphic assets drawn with Adobe PS, and sound effects made with sfxr. Handled problems such as 2D sprites shader, and web server setup</li>
				<br />
				<h2>Distributed Scalable URL Shortener | University of Toronto | CSC409 | 2020 Fall</h2>
				<li>High performance, high availability, load balancing, disaster recovery, horizontally and vertically scalable server that redirect user from the server generated shorted URL to the actual URL</li>
				<li>Tech stack: Java, Docker Swarm, Cassandra</li>
				<br />
				<h2>Image Super-resolution | University of Toronto | CSC420 | 2020 Fall</h2>
				<li>PyTorch implementation of modern example-based super-resolution methods: SRCNN, SRResNet, SRGAN; and quality metrics: PSNR, SSIM</li>
				<li>Analysis of pros and cons of each method</li>
				<br />
				<h2>SlideChat | University of Toronto | CSC492 | 2020 Summer</h2>
				<a href="https://github.com/larryyueli/slidechat">github</a> <br /> <br />
				<li>Slidechat is an open-source teaching resource publishing platform designed for professors and students</li>
				<li>Used by over 400 students and professors in University of Toronto</li>
				<li>Professors able to upload course slides with audios, and students can comment on each page</li>
				<li>Tech stack: MongoDB, Express, React, NodeJS, Socket.IO, Apache</li>
				<br />
				<h2>Neo Deerhunt Coding Competition hack lab | March 2019</h2>
				<a href="https://www.facebook.com/utmmcss/posts/2146231848798870">facebook</a> <br /> <br />
				<li>Hackathon competition held at University of Toronto Mississauga</li>
				<li>Result: Team won first place in the competition of more than ten teams. Designed and coded AI for characters in a PVP game</li>
				<li>Methodology: Used Python to implement methods for characters in the game to beat opponents</li>
				{BackButton(() => setPage("home"))}
			</ContentContainer>
		</>
	);
};

export default Project;
