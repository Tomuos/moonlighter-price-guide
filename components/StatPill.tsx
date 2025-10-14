
import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  icon: ImageSourcePropType;
  text: string;
  accent?: string; // <— add this
};

export default function StatPill({ icon, text, accent = "#f36b6bff" }: Props) {
  return (
    <View style={[styles.pill, { borderColor: accent }]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={[styles.text, { color: accent }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0e0e0eff",
    borderWidth: 1,
    borderRadius: 9999,
    paddingHorizontal: 10,
    height: 26,
    gap: 6,
  },
  icon: { width: 16, height: 16 },
  text: { fontSize: 12, fontWeight: "700" },
});