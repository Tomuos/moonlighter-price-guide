// app/Tabs.tsx
import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DungeonsScreen from "./DungeonsScreen";
import GearScreen from "./GearScreen";

const Tab = createMaterialTopTabNavigator();

const COLORS = {
  dungeons: {
    indicator: "#62E6DB", // mint underline
    activeText: "#62E6DB",
  },
  gear: {
    indicator: "#F0C36B", // sand/gold underline
    activeText: "#F0C36B",
  },
  inactiveText: "#ffffffff",
};

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dungeons"
      
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#2F3646",
          height: 44,
          marginBottom: 10,
          borderRadius: 12,
        },
        tabBarItemStyle: { paddingVertical: 6 },
        // fallback colors (used when a screen doesn't override)
        tabBarIndicatorStyle: { backgroundColor: "#2F3646", height: 3, borderRadius: 3 },
        tabBarActiveTintColor: COLORS.inactiveText,
        tabBarInactiveTintColor: COLORS.inactiveText,
        tabBarLabelStyle: { fontWeight: "800", textTransform: "none" as const },
        tabBarPressColor: "transparent",
      }}
    >
      <Tab.Screen
        name="Dungeons"
        component={DungeonsScreen}
        options={{
          // color the underline for this tab
          tabBarIndicatorStyle: { backgroundColor: COLORS.dungeons.indicator, height: 3, borderRadius: 3 },
          // color the label when active
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? COLORS.dungeons.activeText : COLORS.inactiveText }]}>
              Dungeons
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Gear"
        component={GearScreen}
        options={{
          tabBarIndicatorStyle: { backgroundColor: COLORS.gear.indicator, height: 3, borderRadius: 3 },
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? COLORS.gear.activeText : COLORS.inactiveText }]}>
              Gear
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: "800", letterSpacing: 0.25 },
});
