import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  icon: ImageSourcePropType;
  text: string | number;
};

export default function ArmourPill({ icon, text }: Props) {
  const isNegative =
    (typeof text === "number" && text < 0) ||
    (typeof text === "string" && text.trim().startsWith("-"));

  const accent = isNegative ? "#f36b6bff" : "#F0C36B";
  const bg = isNegative ? "#2a0e12ff" : "#352a0e";

  return (
    <View style={[styles.pill, { borderColor: accent, backgroundColor: bg }]}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={[styles.text, { color: accent }]}>{String(text)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 9999,
    paddingHorizontal: 10,
    height: 26,
    gap: 6,
    alignSelf: "flex-start",
  },
  icon: { width: 20, height: 20 },
  text: { fontSize: 12, fontWeight: "700" },
});
