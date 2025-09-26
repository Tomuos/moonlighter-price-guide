import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppBackground from "../components/ui/AppBackground";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";  // ← add

// ← add
const TransparentTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent", // ← kill the white behind tab scenes
  },
};

export default function RootLayout() {
  return (
    <AppBackground>
      <SafeAreaProvider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          {/* ← add ThemeProvider wrapper */}
          <ThemeProvider value={TransparentTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" }, // keep
              }}
            />
          </ThemeProvider>
        </View>
      </SafeAreaProvider>
    </AppBackground>
  );
}
