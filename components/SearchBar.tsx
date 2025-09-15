import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";

// Allow exactly one of { onChange } or { onChangeText }
type BaseProps = {
  value: string;
  onClear?: () => void;

  placeholder?: string;
  placeholderTextColor?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
};

type WithOnChange = { onChange: (v: string) => void; onChangeText?: never };
type WithOnChangeText = { onChangeText: (v: string) => void; onChange?: never };

export type Props = BaseProps & (WithOnChange | WithOnChangeText);

export default function SearchBar(props: Props) {
  const {
    value,
    onClear,
    placeholder = "Search…",
    placeholderTextColor = "#FFFFFFCC",
    style,
    inputStyle,
  } = props;

  const [focused, setFocused] = useState(false);

  // ✅ Safe caller: only calls whichever handler exists
  const callChange = (next: string) => {
    if ("onChange" in props && typeof props.onChange === "function") {
      props.onChange(next);
    } else if ("onChangeText" in props && typeof props.onChangeText === "function") {
      props.onChangeText(next);
    }
  };

  // ✅ Always clears parent state; then optional extras
  const handleClear = () => {
    callChange("");       // guarantees parent query resets
    onClear?.();          // optional: reset filters/scroll/etc.
  };

  const base = "#2F3646";
  const glow = "#26F9B6";
  const glowStrong = "#5FFCD0";
  const border = value?.length ? glowStrong : focused ? glow : base;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: base, borderColor: border },
        style,
      ]}
    >
      <TextInput
        value={value}
        onChangeText={callChange}                 // 👈 use safe caller
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[styles.input, inputStyle]}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        selectionColor="#26F9B680"
        returnKeyType="search"
      />

      {value ? (
        <Pressable
          onPress={handleClear}
          hitSlop={12}
          accessibilityLabel="Clear search"
          accessibilityRole="button"
          testID="search-clear"
        >
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    paddingVertical: 4,
  },
  clearText: {
    fontWeight: "600",
    color: "#FFF",
  },
});
