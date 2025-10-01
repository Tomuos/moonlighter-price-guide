// app/components/ui/RarityPill.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = { label: string; color: string };

export default function RarityPill({ label, color }: Props) {
  return (
    <View style={[styles.pill, { borderColor: color }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.text, { color }]}>{label.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#111827",
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  text: { fontSize: 11, fontWeight: "800" },
});
