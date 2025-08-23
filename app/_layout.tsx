import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppBackground from "@/components/ui/AppBackground";

export default function RootLayout() {
  return (
    <AppBackground>
      <SafeAreaProvider>
        {/* Light text usually looks better on a dark gradient */}
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "transparent" }, // ← important
            }}
          />
        </View>
      </SafeAreaProvider>
    </AppBackground>
  );
}
