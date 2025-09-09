// components/GearFilterGrid.tsx
import { View, Pressable, Text, StyleSheet } from "react-native";

export type GearKind = "all" | "weapons" | "armour" | "rings";
export type GearFilterGridProps = {
  value: GearKind;
  onChange: (v: GearKind) => void;
};

// Same palette + sizing as your Dungeon pills
const BASE_BG = "#2F3646";
const BASE_BORDER = "#5A6378";

// Label colours to mirror your screenshot vibe
const COLORS: Record<Exclude<GearKind, "all">, string> = {
  weapons: "#61E7E0", // mint/teal
  armour:  "#F0705A", // coral
  rings:   "#82E08E", // green
};
const ALL_COLOR = "#EDDA0F"; // gold “All” label like Dungeons

const BUTTONS: { id: GearKind; label: string; text: string }[] = [
  { id: "all",     label: "All",     text: ALL_COLOR },
  { id: "weapons", label: "Guns",    text: COLORS.weapons }, // label shows “Weapons” below via display
  { id: "armour",  label: "Armour",  text: COLORS.armour  },
  { id: "rings",   label: "Rings",   text: COLORS.rings   },
];

export default function GearFilterGrid({ value, onChange }: GearFilterGridProps) {
  return (
    <View style={styles.grid}>
      {BUTTONS.map((b) => {
        const active = value === b.id;
        const color = active ? "#FFFFFF" : b.text;
        return (
          <Pressable
            key={b.id}
            onPress={() => onChange(b.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={[
              styles.btn,
              {
                backgroundColor: BASE_BG,
                borderColor: active ? b.text : BASE_BORDER,
                borderWidth: active ? 3 : 1,
              },
            ]}
          >
            <Text
              numberOfLines={1}
              style={[styles.text, { color }]}
            >
              {b.id === "all" ? "All Gear" : capitalize(b.id)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  btn: {
    flexBasis: "30%",      // 3-per-row, same as Dungeon pills
    flexGrow: 1,
    height: 46,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  
  text: {
    fontWeight: "800",
    fontSize: 15,
    lineHeight: 22,
    includeFontPadding: false,
    textAlign: "center",
  },
});
