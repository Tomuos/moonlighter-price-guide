import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = { value: string; onChange: (v: string) => void; onClear?: () => void };

export default function SearchBar({ value, onChange, onClear }: Props) {
  const [focused, setFocused] = useState(false);

  // colors
  const base = "#2F3646";     // bg + idle border
  const glow = "#26F9B6";     // focus glow
  const glowStrong = "#5FFCD0"; // typing glow

  // reactive border: stronger when typing
  const border = value?.length ? glowStrong : (focused ? glow : base);

  return (
    <View style={[styles.container, { backgroundColor: base, borderColor: border }]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search items…"
        placeholderTextColor="#FFFFFFCC"   // softer white
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"    // iOS; we keep your manual Clear too
        selectionColor="#26F9B680"         // text selection highlight
        returnKeyType="search"
      />

      {value ? (
        <Pressable onPress={onClear} hitSlop={12} accessibilityLabel="Clear search">
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  clearText: {
    fontWeight: "600",
    color: "#FFF",
  },
});
