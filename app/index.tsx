import React from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Tabs from "./Tabs";  // 

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <ImageBackground
        source={require("../assets/images/background/rev-full.png")}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
        imageStyle={{ opacity: 0.9 }}
        accessible={false}
      />
      <Image
        source={require("../assets/images/logo/Moonlighter-Logo.png")}
        resizeMode="contain"
        style={{ width: "100%", height: 64 }}
        accessibilityLabel="Moonlighter Price Guide"
      />
      <View style={{ flex: 1 }}>
        <Tabs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12, overflow: "hidden" },
});
