// components/DungeonFilterGrid.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { DungeonId } from "../constants/types";
import { DUNGEONS } from "../constants/dungeons";

type Props = {
  value: DungeonId | "all";
  onChange: (d: DungeonId | "all") => void;
};

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
            style={[
              styles.btn,
              {
                backgroundColor: d.bg,
                borderColor: active ? d.text : d.border,
                borderWidth: active ? 3 : 1, // thicker border when active
              },
            ]}
          >
            <View style={styles.labelRow}>
              {d.id === "all" && (
                <MaterialCommunityIcons
                  name="book-open-variant"
                  size={18}
                  color={color}
                  style={{ marginRight: 6 }}
                />
              )}
              <Text
                numberOfLines={2}
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
    gap: 8,
  },


  
  btn: {
    flexBasis: "30%",
    flexGrow: 1,
    height: 46,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    includeFontPadding: false,
  },
});
