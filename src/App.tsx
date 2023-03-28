import React, { useState } from "react";
import styled from "styled-components";

import PageRouter from "./component/PageRouter";
import Background from "./component/Background";

const App = () => {
	const [cameraPos, setCameraPos] = useState<[number, number, number]>([0.36, 8.67, -26.23]);

	return (
		<Content>
			<Background cameraPos={cameraPos} />
			<PageRouter setCameraPos={setCameraPos} />
		</Content>
	);
};

const Content = styled.div``;

export default App;
