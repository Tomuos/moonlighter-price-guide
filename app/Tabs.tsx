// app/Tabs.tsx
import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DungeonsScreen from "./DungeonsScreen";
import GearScreen from "./GearScreen";

const Tab = createMaterialTopTabNavigator();

const COLORS = {
  dungeons: {
    indicator: "#62E6DB",   // mint underline
    activeText: "#ffffffff", // white when active
    inactiveText: "#62E6DB", // 👈 match indicator when inactive
  },
  gear: {
    indicator: "#F0C36B",   // sand/gold underline
    activeText: "#ffffffff", // white when active
    inactiveText: "#F0C36B", // 👈 match indicator when inactive
  },
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
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        tabBarItemStyle: { paddingVertical: 0 },
        tabBarIndicatorStyle: {
          height: "100%",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        tabBarLabelStyle: { fontWeight: "800", textTransform: "none" as const },
        tabBarPressColor: "transparent",
      }}
    >
      <Tab.Screen
        name="Dungeons"
        component={DungeonsScreen}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: "#475b81ff",
            height: "100%",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomWidth: 3,
            borderBottomColor: COLORS.dungeons.indicator,
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.label,
                { color: focused ? COLORS.dungeons.activeText : COLORS.dungeons.inactiveText },
              ]}
            >
              Dungeons
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Gear"
        component={GearScreen}
        options={{
          tabBarIndicatorStyle: {
            backgroundColor: "#475b81ff",
            height: "100%",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomWidth: 3,
            borderBottomColor: COLORS.gear.indicator,
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.label,
                { color: focused ? COLORS.gear.activeText : COLORS.gear.inactiveText },
              ]}
            >
              Gear
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "800",
    letterSpacing: 0.25,
    fontSize: 20,
  },
});
