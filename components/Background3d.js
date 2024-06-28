// "use client";

// import React, { Suspense, useEffect, useState } from 'react';
// import { Canvas, useLoader } from '@react-three/fiber';
// import { OrbitControls, Sphere  } from '@react-three/drei';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// const ObjModel = ({ url }) => {
//   const obj = useLoader(OBJLoader, url);
//   return <primitive object={obj} scale={1} />;
// };

// const BackgroundScene = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Suspense fallback={null}>
//       <ObjModel url="../public/assets/EB004M.obj" />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default BackgroundScene;
"use client";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingCube = () => {
  const cubeRef = useRef();
  let theta = 0;

  useFrame(() => {
    theta += 0.01; // Adjust the speed of rotation here
    const radius = 5; // Radius of the sphere
    cubeRef.current.position.x = radius * Math.cos(theta);
    cubeRef.current.position.z = radius * Math.sin(theta);
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5DEBD7" />
    </mesh>
  );
};

const BackgroundScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <RotatingCube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default BackgroundScene;

