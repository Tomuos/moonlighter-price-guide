import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";

type Props = { value: string; onChange: (v: string) => void; onClear?: () => void };

export default function SearchBar({ value, onChange, onClear }: Props) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={{
      flexDirection: "row", gap: 8, padding: 12, borderRadius: 12,
      borderWidth: 1, borderColor: focused ? "#4ade80" : "#e5e7eb", alignItems: "center"
    }}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search items…"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ flex: 1, fontSize: 16 }}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      {value ? (
        <Pressable onPress={onClear}>
          <Text style={{ fontWeight: "600" }}>Clear</Text>
        </Pressable>
      ) : null}
    </View>
  );
}