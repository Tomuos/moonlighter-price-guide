// app/+not-found.tsx
import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not found" }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 8 }}>Oops!</Text>
        <Text style={{ marginBottom: 16, textAlign: "center" }}>
          That screen doesn’t exist.
        </Text>
        <Link href="/" asChild>
          <Pressable style={{ paddingVertical: 10, paddingHorizontal: 16, borderWidth: 1, borderRadius: 8 }}>
            <Text>Go to home</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}



