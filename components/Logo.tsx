import * as THREE from "three";
import { TextureLoader } from "expo-three";
import { useFrame } from "@react-three/fiber/native";
import { useRef } from "react";

export const Logo = ({}) => {
  const textureLogo = new TextureLoader().load(
    require("../assets/images/famfam.png"),
    (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 1);
    }
  );
  const textureMatisse = new TextureLoader().load(
    require("../assets/images/matisse.png")
  );

  const textureWorld = new TextureLoader().load(
    require("../assets/images/world.png")
  );

  const refOuterRing = useRef<THREE.Group>(null);
  const refInnerCircle = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    textureLogo.offset.x = t * 0.15;
    refInnerCircle.current!.rotation.y = t;
  });

  return (
    <group ref={refOuterRing}>
      <group ref={refInnerCircle}>
        <mesh>
          <circleGeometry args={[3.8, 64]} />
          <meshStandardMaterial
            attach="material"
            map={textureMatisse}
            alphaTest={0.5}
            transparent
          />
        </mesh>
        <mesh rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[3.8, 64]} />
          <meshStandardMaterial
            attach="material"
            map={textureWorld}
            alphaTest={0.5}
            transparent
          />
        </mesh>
      </group>
      <mesh
        rotation={[
          THREE.MathUtils.degToRad(16),
          0,
          THREE.MathUtils.degToRad(-25),
        ]}
      >
        <cylinderGeometry args={[4, 4, 1, 64, 1, true]} />
        <meshStandardMaterial
          map={textureLogo}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  );
};
