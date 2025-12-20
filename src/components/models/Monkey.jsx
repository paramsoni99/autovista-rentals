import { useGLTF } from "@react-three/drei";

export function Monkey(props) {
  const { nodes, materials } = useGLTF("/monkey.glb");
  
  // Safety check: if Suzanne doesn't exist, try to render the first mesh found
  const mesh = nodes.Suzanne || Object.values(nodes).find(n => n.type === 'Mesh');

  if (!mesh) return null;

  // const material = materials["Material.001"];
  // material.color.set("#ffcc00");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={mesh.geometry}
        material={materials["Material.001"] || Object.values(materials)[0]}
      />
    </group>
  );
}

useGLTF.preload("/monkey.glb");