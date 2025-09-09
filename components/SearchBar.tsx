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

  // ⬇️ these were missing
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
  const handleChange = "onChange" in props ? props.onChange : props.onChangeText;

  const base = "#2F3646";
  const glow = "#26F9B6";
  const glowStrong = "#5FFCD0";
  const border = value?.length ? glowStrong : focused ? glow : base;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: base, borderColor: border },
        style, // allow caller layout overrides
      ]}
    >
      <TextInput
        value={value}
        onChangeText={handleChange}
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
