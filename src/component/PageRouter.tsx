import React, { useState } from "react";
import styled from "styled-components";

import { State } from "../type/app.type";
import Work from "./Work";
import Home from "./Home";
import Education from "./Education";
import Skill from "./Skill";
import About from "./About";
import Project from "./Project";

interface PageRouterProps {
	setCameraPos: (cameraPos: [number, number, number]) => void;
}

const PageRouter = ({ setCameraPos }: PageRouterProps) => {
	const [page, setPage] = useState<State>("home");

	const setPageAndCamera = (path: State) => {
		setPage(path);
		if (path === "home") {
			setCameraPos([0.36, 8.67, -26.23]);
		} else if (path === "about") {
			setCameraPos([0, 128, -0.1]);
		} else if (path === "education") {
			setCameraPos([62, 21, -39]);
		} else if (path === "skill") {
			setCameraPos([-62, 21, -39]);
		} else if (path === "work") {
			setCameraPos([0, 2, -3.7]);
		} else if (path === "project") {
			setCameraPos([0.36, 52, -117]);
		}
	};

	return (
		<Container>
			<Home setPage={setPageAndCamera} displayPage={page === "home"} />
			<Work setPage={setPageAndCamera} displayPage={page === "work"} />
			<Education setPage={setPageAndCamera} displayPage={page === "education"} />
			<Skill setPage={setPageAndCamera} displayPage={page === "skill"} />
			<About setPage={setPageAndCamera} displayPage={page === "about"} />
			<Project setPage={setPageAndCamera} displayPage={page === "project"} />
		</Container>
	);
};

export default PageRouter;

const Container = styled.div`
	font-size: 2rem;
	font-family: Roboto;
`;
