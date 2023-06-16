import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.38} position-y={-1.5} position-x={1.8} rotation-y={0} rotation-x={1.6} rotation-z={0}/>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
    >
      <directionalLight
        position={[0, -1, 0]}
        angle={45}
        penumbra={1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1060}
      />
        <directionalLight
        position={[0, -1.5, 4]}
        angle={0}
        penumbra={3}
        intensity={0.5}
        castShadow
        shadow-mapSize={200}
      />
        <directionalLight
        position={[1.5, -6.5, 3]}
        angle={90}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadow-mapSize={99}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 1}
          target={[-2.29, -1.5, 0]}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
