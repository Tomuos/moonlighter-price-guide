import { View, Text, Pressable } from "react-native";
import type { DungeonId } from "../constants/types";
import { DUNGEONS } from "../constants/dungeons";

type Props = {
  value: DungeonId | "all";
  onChange: (d: DungeonId | "all") => void;
};

export default function DungeonFilterGrid({ value, onChange }: Props) {
  const buttons = [{ id: "all", label: "All", text: "#FFFFFF", bg: "#2F3646", border: "#5A6378" } as any, ...DUNGEONS];

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {buttons.map((d) => {
        const active = value === d.id;
        return (
          <Pressable
            key={d.id}
            onPress={() => onChange(d.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={({ pressed }) => ({
              width: "48%",            // two columns with small gutter
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: d.border,
              backgroundColor: active ? "#1F2533" : d.bg, // darker when active
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "800",
                color: active ? "#FFFFFF" : d.text, // active flips to white for AA contrast
              }}
            >
              {d.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
