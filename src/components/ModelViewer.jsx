import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment, Stage } from "@react-three/drei";


//model imports
import { Monkey } from "./models/Monkey";

const ModelViewer = () => {
  const [webglSupported, setwebglSupported] = useState(true);
  // device suppoort check for webgl
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setwebglSupported(false);
    } catch (error) {
      setwebglSupported(false);
    }
  }, []);

  if (!webglSupported) return <div> WebGl Not supported on this device. </div>;

  return (
    <Canvas
      camera={{ position: [0.1, 0.1, 0.2], fov: 20 }}
      gl={{
        antialias: true,
        preserveDrawingBuffer: "high-performance",
      }}
      style={{ width: "100%", height: "100%" }}
      onCreated={(gl) => {
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          alert("WebGl context lost- reload the ps page. ");
        });
      }}
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          {/*put any model on stage */}
          <Monkey />
        </Stage>
        {/* lighting */}

        <Environment preset="city" />
        {/* controls: scence ux  */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={1}
          //   minDistance={6}
          //   maxDistance={12}
          //   maxPolarAngle={Math.PI / 2 - 0.1}
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
