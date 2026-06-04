import React from "react";
import { View, Image, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  source?: ImageSourcePropType | null;
  size?: number;
  bg?: [string, string];   // centre → edge
  border?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export default function SpriteBox({
  source,
  size = 42,
  bg = ["#cbb68c", "#ecd5a8"], // 👈 default gradient
  border = "#5A6378",
  onPress,
  accessibilityLabel,
}: Props) {
  const content = source ? (
    <Image
      source={source}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  ) : (
    <View style={[styles.image, { width: size, height: size }]}>
      <Text style={styles.placeholderText}>?</Text>
    </View>
  );

  const Wrapper = onPress ? Pressable : View;

  return (
    <Wrapper
      onPress={onPress}
      accessibilityRole={onPress ? "button" : undefined}
      accessibilityLabel={accessibilityLabel}
    >
      <LinearGradient
        colors={bg}
        start={{ x: 0.5, y: 0.4 }}   // 👈 slightly above centre
        end={{ x: 1, y: 1 }}         // 👈 fade outward
        style={[styles.wrap, { borderColor: border }]}
      >
        {content}
      </LinearGradient>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: 3,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
  image: {
    borderRadius: 8,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#9399a1",
    fontWeight: "700",
    fontSize: 18,
  },
});
