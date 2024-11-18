import { OrthographicCamera, Plane, shaderMaterial } from '@react-three/drei';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

import mariwanoIcon from "../assets/mariwano-icon.png";
import AdEtiquette from "../components/AdEttiquete";
import IconButton from "../components/IconButton";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
// glsl


const fragmentShader = await fetch('/src/assets/shaders/backdrop.frag').then(r => r.text());
const vertexShader = await fetch('/src/assets/shaders/backdrop.vert').then(r => r.text());

const INITIAL_UNIFORMS = {
  uTime: { value: 0 },
  iResolution: { value: [0, 0, 1] },
};

const BackdropPlaneShader = shaderMaterial(INITIAL_UNIFORMS, vertexShader, fragmentShader);
extend({ BackdropPlaneShader });

export function BackdropPlane() {
  const { viewport } = useThree();
  const shader = useRef();

  useFrame(({ clock }) => {
    if (!shader.current) return;
    shader.current.uniforms.uTime.value = clock.getElapsedTime();
    shader.current.uniforms.iResolution.value = [viewport.width, viewport.height, 1];
  });

  return (
    <Plane args={[2, 2]} position={[0, 0, 0]}>
      <backdropPlaneShader
        key={BackdropPlaneShader.key}
        ref={shader}
      />
    </Plane>
  );
}

export function BackgroundCanvas() {
  return (
    <Canvas
      gl={{
        alpha: false,  // Cambiar a true para permitir transparencia
        antialias: true,  // Cambiar a true para mejorar la calidad visual
        preserveDrawingBuffer: true
      }}
      className="!fixed inset-0 -z-10"
    >
      <OrthographicCamera makeDefault={true} position={[0, 0, 5]} />
      <BackdropPlane />
    </Canvas>
  );
}


export default function App() {
  return (
    <>

      <div className="relative h-screen w-full overflow-hidden font-mono font-medium text-white">
        <Navbar />
        <BackgroundCanvas />

        <main className="flex flex-col justify-center items-center gap-y-10 h-full relativez-10">
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
  );
}