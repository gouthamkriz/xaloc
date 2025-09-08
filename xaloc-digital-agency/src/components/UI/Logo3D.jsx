import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingModel = () => {
  const groupRef = useRef();
  const model = useLoader(GLTFLoader, '/assets/images/backgrounds/particles_🌑.gltf');

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={[0.3, 0.3, 0.3]} position={[0, 0, 0]}>
      <primitive object={model.scene} />
    </group>
  );
};

const Logo3D = () => {
  return (
    <div className="w-full h-96 mb-6 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingModel />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default Logo3D;
