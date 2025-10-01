// app/components/ui/StatPill.tsx
import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  icon: ImageSourcePropType;
  text: string;             // e.g., "30 HP"
  border?: string;
  bg?: string;
  textColor?: string;
};

export default function StatPill({
  icon,
  text,
  border = "#F0C36B",
  bg = "#241e14ff",
  textColor = "#e8d3a9ff",
}: Props) {
  return (
    <View style={[styles.pill, { borderColor: border, backgroundColor: bg }]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={[styles.txt, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
  },
  icon: { width: 20, height: 20 },
  txt: { fontSize: 11, fontWeight: "800" },
});
