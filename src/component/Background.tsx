import React, { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import { Canvas, useLoader, extend, Object3DNode, useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SphereGeometry, TextureLoader, Texture, Euler, PlaneGeometry, RepeatWrapping, Vector3 } from "three";
import { Water } from "three/examples/jsm/objects/Water";
import TreeModel from "../model/tree.glb";
import SkyImage from "../image/nightSky2.png";

import LoadingScreen from "./LoadingScreen";

extend({ Water });

declare module "@react-three/fiber" {
	interface ThreeElements {
		water: Object3DNode<Water, typeof Water>;
	}
}

interface BackgroundProps {
	cameraPos: [number, number, number];
}

const WaterSurface = () => {
	const ref = useRef<Water>(null);

	useFrame((state, delta) => {
		if (ref?.current?.material.uniforms?.time) {
			ref.current.material.uniforms.time.value += delta / 2;
		}
	});
	const geometry = useMemo(() => new PlaneGeometry(1000, 1000), []);
	const waterNormals = useLoader(TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg");
	waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;

	return <water args={[geometry, { distortionScale: 2, sunDirection: new Vector3(0, -1, 0), sunColor: "#010f1c", waterColor: "#014b87", textureHeight: 512, textureWidth: 512, waterNormals }]} rotation={new Euler(-Math.PI / 2, 0, 0)} ref={ref} />;
};

const Background = ({ cameraPos }: BackgroundProps) => {
	const cameraRef = useRef<CameraControls | null>(null);

	useEffect(() => {
		if (cameraRef) {
			if (cameraPos[2] === -3.7) {
				cameraRef.current?.setLookAt(cameraPos[0], cameraPos[1], cameraPos[2], 0, 3, 0, true);
			} else {
				cameraRef.current?.setLookAt(cameraPos[0], cameraPos[1], cameraPos[2], 0, 0, 0, true);
			}
		}
	}, [cameraPos]);

	const TreeObj = () => {
		const gltf = useLoader(GLTFLoader, TreeModel);

		return <primitive object={(gltf as GLTF).scene} scale={0.2} position={[0, 2, 0]} />;
	};

	const SkySphere = () => {
		const texture = useLoader(TextureLoader, SkyImage);
		const geometry = new SphereGeometry(900, 60, 60);
		geometry.scale(1, 1, -1);

		return (
			<mesh visible position={[0, 0, 0]} geometry={geometry}>
				<meshBasicMaterial map={texture as Texture} attach="material" />
			</mesh>
		);
	};

	return (
		<Container>
			<Canvas camera={{ position: cameraPos }}>
				<Suspense fallback={<LoadingScreen />}>
					<CameraControls ref={cameraRef} makeDefault={false} />
					<ambientLight color="white" intensity={1} />
					<TreeObj />
					<SkySphere />
					<WaterSurface />
					{/* <OrbitControls onChange={(e) => console.log(e?.target.object.position)} /> */}
				</Suspense>
			</Canvas>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	div {
		pointer-events: none !important;
	}
`;

export default Background;
