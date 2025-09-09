// components/GearFilterGrid.tsx
import { View, Pressable, Text, StyleSheet } from "react-native";

export type GearKind = "all" | "weapons" | "armour" | "rings";
export type GearFilterGridProps = {
  value: GearKind;
  onChange: (v: GearKind) => void;
};

const BASE_BG = "#2F3646";
const BASE_BORDER = "#5A6378";
const ALL_COLOR = "#EDDA0F";

const COLORS: Record<Exclude<GearKind, "all">, string> = {
  weapons: "#ABCDC9",
  armour:  "#D3968A",
  rings:   "#FF9BD7",
};

const BUTTONS: { id: GearKind; label: string; text: string }[] = [
  { id: "all",     label: "All Gear", text: ALL_COLOR },
  { id: "weapons", label: "Weapons",  text: COLORS.weapons },
  { id: "armour",  label: "Armour",   text: COLORS.armour },
  { id: "rings",   label: "Rings",    text: COLORS.rings },
];

export default function GearFilterGrid({ value, onChange }: GearFilterGridProps) {
  const renderBtn = (b: { id: GearKind; label: string; text: string }) => {
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
        <Text style={[styles.text, { color }]}>{b.label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        {renderBtn(BUTTONS[0])}
        {renderBtn(BUTTONS[1])}
      </View>
      <View style={styles.row}>
        {renderBtn(BUTTONS[2])}
        {renderBtn(BUTTONS[3])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 12, 
  },
  row: {
    flexDirection: "row",
    gap: 12, 
  },
  btn: {
    flex: 1,              
    height: 44,           
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 20,
    includeFontPadding: false,
  },
});
