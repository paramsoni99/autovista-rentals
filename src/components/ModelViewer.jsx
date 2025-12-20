import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Monkey } from "./models/Monkey";
import { Porcar } from './models/2021_por';

const ModelViewer = () => {
  const [webglSupported, setwebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setwebglSupported(false);
    } catch (error) {
      setwebglSupported(false);
    }
  }, []);

  if (!webglSupported) return <div> WebGl Not supported on this device. </div>;

  return (
    <Canvas
      // FIXED: Moved camera back so the model is visible
      camera={{ position: [5, 5, 5], fov: 35 }}
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        {/* Stage handles lighting and auto-centering the model */}
        <Stage environment="city" intensity={0.6} contactShadow={false}>
          
          {/* <Monkey /> */}

          <Porcar />

        </Stage>
        <OrbitControls 
          enableZoom={true} 
          autoRotate 
          autoRotateSpeed={4.3} 
          maxPolarAngle={Math.PI / 2 - 0.05}
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;