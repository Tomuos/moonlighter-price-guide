import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = { children: React.ReactNode };

export default function AppBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={["#2F3646", "#1A1D24"]} // <- tweak this palette
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
