import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SkeletonUtils } from 'three-stdlib';

export default function GermicoreModel() {
  const group = useRef<THREE.Group>(null);
  
  // Use the compressed Draco model
  const { scene } = useGLTF('/germicore_unit_draco.glb', true);

  // IMPORTANTE: Criar um clone único para esta instância do componente
  // Isso evita o erro "TypeError: Cannot convert undefined or null to object" 
  // que ocorre quando múltiplas instâncias tentam manipular a mesma cena global do useGLTF
  const clonedScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          mesh.material = (mesh.material as THREE.Material).clone();
          mesh.material.side = THREE.FrontSide;
          
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.flatShading = false;
            mesh.material.roughness = 0.7;
            mesh.material.metalness = 0.3;
          }

          if (mesh.name.toLowerCase().includes('glass') || mesh.name.toLowerCase().includes('window')) {
            mesh.material.transparent = true;
            mesh.material.opacity = 0.4;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <primitive object={clonedScene} scale={1.2} />
      </Float>
      <pointLight position={[2, 2, 2]} intensity={0.6} color="#ffffff" />
      <ambientLight intensity={0.5} />
    </group>
  );
}

useGLTF.preload('/germicore_unit_draco.glb');
