import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = { value: string; onChange: (v: string) => void; onClear?: () => void };

export default function SearchBar({ value, onChange, onClear }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#2F3646", // Golem text teal
          borderColor: focused ? "#26f9b6ff" : "#2F3646", // match bg when not focused
        },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search items..."
        placeholderTextColor="#ffffffff" // black placeholder
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      {value ? (
        <Pressable onPress={onClear}>
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
    fontWeight: "bold", // bold text
    color: "#000", // black text
  },
  clearText: {
    fontWeight: "600",
    color: "#000",
  },
});
