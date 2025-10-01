// app/components/ui/Section.tsx
import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = PropsWithChildren<{ title: string }>;

export default function Section({ title, children }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginTop: 10, borderTopColor: "#374151", borderTopWidth: 1, paddingTop: 8 },
  title: { color: "#e2e8f0", fontWeight: "600", marginBottom: 4 },
});
