import React from "react";
import styled from "styled-components";
import { Html, useProgress } from "@react-three/drei";

const LoadingScreen = () => {
	const { progress } = useProgress();
	return (
		<Html center>
			<LoadingContainer>
				<Text>
					Loading...
					<LoadingBar percent={progress} />
				</Text>
			</LoadingContainer>
		</Html>
	);
};

const LoadingContainer = styled.div`
	background: radial-gradient(#004b7c, #000e42);
	width: 100vw;
	height: 100vh;
`;

const Text = styled.div`
	margin: 0px auto;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	width: max-content;
	font-family: Roboto;
	font-size: 9rem;
	color: #8dc6ef;
	line-height: 1.5;
`;

const LoadingBar = styled.div`
	width: 100%;
	border-radius: 5px;
	height: 10px;
	background: #ffffffb0;

	:before {
		content: "";
		display: block;
		width: ${(props: { percent }) => props.percent}%;
		border-radius: 5px;
		height: 10px;
		background: #457cf9b0;
	}
`;

export default LoadingScreen;
