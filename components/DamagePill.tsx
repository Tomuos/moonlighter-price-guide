// app/components/ui/DamagePill.tsx
import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  icon: ImageSourcePropType;
  value: string | number;   // e.g., "DMG: 620"
};

export default function DamagePill({ icon, value }: Props) {
  return (
    <View style={styles.pill}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.txt}> DMG: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#62E6DB",
    backgroundColor: "#0e2930",
    alignSelf: "flex-start",
    flexGrow: 0,
    flexShrink: 0,
  },
  icon: { width: 20, height: 20 },
  txt: { fontSize: 11, fontWeight: "800", color: "#62E6DB" },
});
