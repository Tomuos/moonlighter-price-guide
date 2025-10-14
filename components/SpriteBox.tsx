
import React from "react";
import { View, Image, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native";

type Props = {
  source?: ImageSourcePropType | null;
  size?: number;                 // content box size (image area)
  bg?: string;                   // container bg
  border?: string;               // border color
  onPress?: () => void;
  accessibilityLabel?: string;
};

export default function SpriteBox({
  source,
  size = 48,
  bg = "#ecd5a8ff",
  border = "#5A6378",
  onPress,
  accessibilityLabel,
}: Props) {
  const body = source ? (
    <Image source={source} style={{ width: size, height: size }} resizeMode="contain" />
  ) : (
    <View style={[styles.image, { width: size, height: size }]}>
      <Text style={styles.placeholderText}>?</Text>
    </View>
  );

  return (
    <View style={[styles.wrap, { backgroundColor: bg, borderColor: border }]}>
      {onPress ? (
        <Pressable onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
          {body}
        </Pressable>
      ) : (
        body
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  image: {
    borderRadius: 8,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: { color: "#64748b", fontWeight: "700", fontSize: 18 },
});
