import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import type { GearId } from "../constants/gear";
import { GEAR } from "../constants/gear";

export type GearFilterGridProps = {
  value: GearId | "all";
  onChange: (v: GearId | "all") => void;
};

const ALL_BUTTON = {
  id: "all" as const,
  label: "All Gear",
  text: "#EDDA0F",
  bg: "#2F3646",
  border: "#5A6378",
};

export default function GearFilterGrid({ value, onChange }: GearFilterGridProps) {
  const raw = [ALL_BUTTON, ...GEAR];

  // dedupe in case "all" sneaks into GEAR
  const seen = new Set<string>();
  const buttons = raw.filter(b => (!seen.has(b.id) && seen.add(b.id) !== undefined) || false);

  return (
    <View style={styles.grid}>
      {buttons.map((g) => {
        const active = value === g.id;

        return (
          <Pressable
            key={`gear-${g.id}`}
            onPress={() => onChange(g.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={[
              styles.btn,
              {
                backgroundColor: g.bg,
                borderColor: active ? g.text : g.border, // thicker + palette when active
                borderWidth: active ? 3 : 1,
              },
            ]}
          >
            {/* 👇 text colour always equals the palette colour, so it matches the active border */}
            <Text numberOfLines={2} style={[styles.text, { color: g.text }]}>
              {g.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  btn: {
  minWidth: "48%",        // two per row minimum
  flexBasis: "48%",
  flexGrow: 1,            // 👈 lets them stretch to the container edges
  flexShrink: 1,
  height: 46,
  borderRadius: 12,
  paddingHorizontal: 12,
  paddingVertical: 8,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
},
  text: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    includeFontPadding: false,
  },
});
