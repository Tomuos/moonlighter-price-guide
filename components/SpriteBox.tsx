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
  style?: any; // Allow the parent component (GearCard) to inject dynamic border widths safely
};

export default function SpriteBox({
  source,
  size = 42,
  bg = ["#cbb68c", "#ecd5a8"], // 👈 default gradient
  border = "#5A6378",
  onPress,
  accessibilityLabel,
  style, // Capture any style passed from GearCard
}: Props) {
  
  // Extract custom border sizing properties if passed down, otherwise use sharp defaults
  const borderThickness = style?.borderWidth ?? 3;
  const outerRadius = style?.borderRadius ?? 8;
  
  // Calculate precise mathematical internal curves so corners stack flawlessly 
  const innerRadius = Math.max(0, outerRadius - borderThickness);

  const content = source ? (
    <Image
      source={source}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  ) : (
    <View style={[styles.image, { width: size, height: size, borderRadius: innerRadius }]}>
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
      {/* 🛡️ OUTER CANVAS: Acts as the absolute solid background boundary for the outline line layer */}
      <View style={[
        styles.outerContainer, 
        { 
          backgroundColor: border,     // Becomes your solid, sharp border color 
          padding: borderThickness,    // Becomes your perfectly rendered border width
          borderRadius: outerRadius,   // Handles outer roundness cleanly
        }
      ]}>
        
        {/* 🎨 INNER CONTAINER: Handles the gradient background completely separate from the border physics */}
        <LinearGradient
          colors={bg}
          start={{ x: 0.5, y: 0.4 }}   // 👈 slightly above centre
          end={{ x: 1, y: 1 }}         // 👈 fade outward
          style={[styles.gradientInner, { borderRadius: innerRadius }]}
        >
          {content}
        </LinearGradient>
        
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Slices off sub-pixel artifacts cleanly on mobile screens
  },
  gradientInner: {
    padding: 3, // Keeps spacing around your item icons intact
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
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
