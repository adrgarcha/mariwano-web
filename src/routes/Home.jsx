import Background from "../components/Background";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import mariwanoIcon from "../assets/mariwano-icon.png";
import IconButton from "../components/IconButton";
import GitHubIcon from "../components/icons/GitHubIcon";
import AdEtiquette from "../components/AdEttiquete";
// glsl
'use client';
import { Plane, shaderMaterial, OrthographicCamera } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { ShaderMaterial } from 'three';

import fragmentShader from '../assets/shaders/backdrop.frag';
import vertexShader from '../assets/shaders/backdrop.vert';

const INITIAL_UNIFORMS = {};

const BackdropPlaneShader = shaderMaterial(INITIAL_UNIFORMS, vertexShader, fragmentShader);
extend({ BackdropPlaneShader });
// FC
const BackdropPlane = () => {
  const { viewport } = useThree();
  const shader = useRef();

  useFrame(({ clock }) => { if (!shader.current) return; });

  return (
    <Plane args={[viewport.width / 2, viewport.height / 2, 1, 1]} position={[0, 0, 0]}>
      <backdropPlaneShader key={BackdropPlaneShader.key} ref={shader} />
    </Plane>
  );
}
export default BackdropPlane;

const BackgroundCanvas = () => {
  return (
    <Canvas gl={{ alpha: false, antialias: false }} className="!fixed inset-0">
      <OrthographicCamera makeDefault={true} position={[0, 0, 5]} />
      <BackdropPlane />
    </Canvas>
  );
}
export default BackgroundCanvas;

export default function App() {
  return (
    <>
      <BackgroundCanvas />
      <div className="relative h-screen w-full bg-slate-950 overflow-hidden font-mono font-medium text-white">
        <Navbar />
        <Background />

        <main className="flex flex-col justify-center items-center gap-y-10 h-full">
          <h1 className="text-8xl font-bold">Mariwano</h1>
          <img className="w-[256px] h-[256px] rounded-full" src={mariwanoIcon} alt="Mariwano Icon" />
          <div className="flex gap-x-2">

            <LinkButton buttonText="Invitar a Mariwano" link={"https://discord.com/api/oauth2/authorize?client_id=1159902116979146782&permissions=8&scope=bot"} />
            <IconButton icon={<GitHubIcon />} link="https://github.com/adrgarcha/mariwano-bot" />
          </div>
          <AdEtiquette />
        </main>
      </div>
    </>
  )
}