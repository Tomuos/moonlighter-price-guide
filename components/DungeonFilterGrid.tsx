import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { DungeonId } from "../constants/types";
import { DUNGEONS } from "../constants/dungeons";

type Props = { value: DungeonId | "all"; onChange: (d: DungeonId | "all") => void };

const ALL_BUTTON = {
  id: "all",
  label: "All",
  text: "#EDDA0F",     // gold text
  bg: "#2F3646",
  border: "#5A6378",
} as const;

export default function DungeonFilterGrid({ value, onChange }: Props) {
  const buttons = [ALL_BUTTON as any, ...DUNGEONS];

  return (
    <View style={styles.grid}>
      {buttons.map((d) => {
        const active = value === d.id;
        const color = active ? "#FFFFFF" : d.text;

        return (
          <Pressable
            key={d.id}
            onPress={() => onChange(d.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            accessibilityLabel={`${d.label} filter`}
            hitSlop={6}
            style={({ pressed }) => [
              styles.btn,
              { borderColor: d.border, backgroundColor: active ? "#1F2533" : d.bg },
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.labelRow}>
              {d.id === "all" && (
                // pick ONE of these icon names: "book-open-variant" or "treasure-chest"
                <MaterialCommunityIcons
                  name="book-open-variant"
                  size={18}
                  color={color}
                  style={{ marginRight: 6 }}
                />
              )}
              <Text
                numberOfLines={2}
                adjustsFontSizeToFit={false}
                style={[styles.text, { color }]}
              >
                {d.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },
  btn: {
    width: "48%",
    height: 72,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: { opacity: 0.9, transform: [{ scale: 0.98 }] },
  labelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  text: { fontWeight: "800", textAlign: "center", fontSize: 18, lineHeight: 22, includeFontPadding: false },
});
