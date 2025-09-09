import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  icon?: string;
  color: string;
  active?: boolean;
  onPress: () => void;
};

export default function DungeonFilterButton({
  label,
  icon,
  color,
  active,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, active && styles.activeCard]}
    >
      <Text
        style={[
          styles.text,
          { color },
          active && styles.activeText,
        ]}
      >
        {icon ? `${icon} ${label}` : label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,                          // evenly fills row space
    minWidth: 0,                      // prevents overflow when text is long
    backgroundColor: "#2F3646",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#5A6378",
    alignItems: "center",
    justifyContent: "center",
  },
  activeCard: {
    backgroundColor: "#B3F5EE",       // highlight background
    borderColor: "#FFD700",           // gold outline like your screenshot
  },
  text: {
    fontSize: 18,
    fontWeight: "800",
  },
  activeText: {
    color: "#2F3646",                 // dark text on active
  },
});
