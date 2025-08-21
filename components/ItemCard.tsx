import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import type { DungeonItem } from "../constants/types";
import { itemImages } from "../app/data/itemImages";


if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  item: DungeonItem;
  onPressImage?: (item: DungeonItem) => void; // optional, for future modal
};

const rarityColors: Record<string, string> = {
  common: "#9CA3AF",    // grey
  uncommon: "#22C55E",  // green
  rare: "#3B82F6",      // blue
  epic: "#A855F7",      // purple
  legendary: "#F59E0B"  // orange/gold
};

export default function ItemCard({ item, onPressImage }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  
  
  const rarityColor = rarityColors[item.rarity] || "#e2e8f0";

  return (
  <View style={styles.card}>
    <View style={styles.row}>
      <Pressable onPress={() => onPressImage?.(item)} accessibilityRole="button" accessibilityLabel={`${item.name} image`}>
        {itemImages[item.id] ? (
          <Image
            source={itemImages[item.id]}
            style={{ width: 48, height: 48, borderRadius: 8 }}
            onError={() => {}}
          />
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>?</Text>
          </View>
        )}
      </Pressable>

      <View style={{ flex: 1, marginLeft: 12 }}>
        {/* Title row — now just the name, full width */}
        <Text
          style={[styles.title, { color: rarityColor }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </Text>

        {/* Rarity pill moved here */}
        <View style={{ marginTop: 4 }}>
          <View style={[styles.rarityPill, { borderColor: rarityColor }]}>
            <View style={[styles.rarityDot, { backgroundColor: rarityColor }]} />
            <Text style={[styles.rarityText, { color: rarityColor }]}>
              {item.rarity.toUpperCase()}
            </Text>
          </View>
        </View>

<Text style={styles.priceLine}>
  {/* Normal price with coin */}
  <Image
    source={require("../assets/images/Coin-norm.png")}
    style={{ width: 20, height: 14 }}
  />{" "}
  <Text style={styles.priceStrong}>{item.minPrice}</Text>

  {/* Popular price with coin (if exists) */}
  {item.popularPrice != null && (
    <Text>
      {"   Popular "}
      <Image
        source={require("../assets/images/Coin-pop.png")}
        style={{ width: 20, height: 14 }}
      />{""}
      <Text style={styles.priceStrong}>{item.popularPrice}</Text>
    </Text>
  )}
</Text>




          
          {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}
        </View>

                {((item.gearUsage && item.gearUsage.length > 0) ||
                (item.enchantUsage && item.enchantUsage.length > 0)) && (
                <Pressable onPress={toggle} accessibilityRole="button">
                  <Text style={styles.chev}>{open ? "▲" : "▼"}</Text>
                </Pressable>
                )}
        </View>

      {open && item.gearUsage && item.gearUsage.length > 0 && (
  <View style={styles.dropdown}>
    <Text style={styles.dropdownTitle}>Gear usage</Text>
    {item.gearUsage.map((g, idx) => (
      <Text key={idx} style={styles.dropdownItem}>
        {g.type === "weapon" ? "🗡️ " : "🛡️ "} {g.name} × {g.quantity}
      </Text>
    ))}
  </View>
)}

{open && item.enchantUsage && item.enchantUsage.length > 0 && (
  <View style={styles.dropdown}>
    <Text style={styles.dropdownTitle}>Enchantment usage</Text>
    {item.enchantUsage.map((e, idx) => {
      const qty = e.qtyMax && e.qtyMax !== e.qtyMin ? `${e.qtyMin}–${e.qtyMax}` : `${e.qtyMin}`;
      const gold = e.gold ? ` + ${e.gold}g` : "";
      return (
        <Text key={idx} style={styles.dropdownItem}>
          ✨ {e.target} × {qty}{gold}
        </Text>
      );
    })}
  </View>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f2431",
    borderColor: "#5A6378",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10
  },
  row: { flexDirection: "row", alignItems: "center" },
  image: { width: 48, height: 48, borderRadius: 8, backgroundColor: "#111827", justifyContent: "center", alignItems: "center" },
  placeholder: { borderWidth: 1, borderColor: "#374151" },
  placeholderText: { color: "#64748b", fontWeight: "700", fontSize: 18 },

  // UPDATED
  title: { fontSize: 16, fontWeight: "700", marginRight: 8 },

  // rarity pill (inline, right side)
rarityPill: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 6,
  paddingVertical: 2,
  borderRadius: 6,
  borderWidth: 1,
  backgroundColor: "#111827",
  flexShrink: 0,              // <-- add
  alignSelf: "flex-start",    // neat left alignment on its own line
},
  rarityDot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  rarityText: { fontSize: 11, fontWeight: "800" },

  // prices + floors = white
  priceLine: { marginTop: 4, fontSize: 14, color: "#FFFFFF" },
  priceStrong: { fontSize: 16, fontWeight: "700", color: "#FFFFFF" },
  meta: { color: "#FFFFFF", fontSize: 12, marginTop: 2 },

  // keep notes green
  notes: { color: "#a3e635", fontSize: 12, marginTop: 4 },

  chev: { color: "#e2e8f0", fontSize: 18, paddingHorizontal: 8, paddingVertical: 4 },
  dropdown: { marginTop: 10, borderTopColor: "#374151", borderTopWidth: 1, paddingTop: 8 },
  dropdownTitle: { color: "#e2e8f0", fontWeight: "600", marginBottom: 4 },
  dropdownItem: { color: "#cbd5e1", fontSize: 13, marginBottom: 2 }
});
