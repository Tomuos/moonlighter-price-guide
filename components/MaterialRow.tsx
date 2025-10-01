// app/components/MaterialRow.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getMatImage } from "../app/utils/images";

const RECIPE_BG_COLOR = "#ecd5a8ff";

export default function MaterialRow({
  id,
  name,
  qty,
  alts,
  size = 32,
}: {
  id?: string;
  name?: string;
  qty: number;
  alts?: string[];
  size?: number;
}) {
  const img = getMatImage(id, name);
  const iconStyle = { width: size, height: size };

  return (
    <View style={[styles.row, { minHeight: size + 8 }]}>
      <View
        style={[
          styles.iconBox,
          {
            width: size + 8,
            height: size + 8,
            borderRadius: Math.round((size + 8) / 5),
            backgroundColor: RECIPE_BG_COLOR,
          },
        ]}
      >
        {img ? (
          <Image source={img} style={[styles.icon, iconStyle]} resizeMode="contain" />
        ) : (
          <View style={[styles.fallback, iconStyle]} />
        )}
      </View>

      <Text style={styles.text} numberOfLines={1}>
        {(name ?? id) ?? "Unknown"} × {qty}
        {alts?.length ? `  (or: ${alts.join(", ")})` : ""}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#5A6378",
  },
  icon: {},
  fallback: { backgroundColor: "#4b5563" },
  text: { color: "#cbd5e1", fontSize: 13 },
});
