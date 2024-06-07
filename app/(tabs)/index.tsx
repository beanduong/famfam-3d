import { StyleSheet, View } from "react-native";
import { Canvas } from "@react-three/fiber/native";
import { Logo } from "@/components/Logo";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 100,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={1.0} />
        <Logo />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
