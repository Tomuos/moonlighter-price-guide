// app/components/ItemCard.tsx
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager,  } from "react-native";
import type { DungeonItem } from "../constants/types";
import { itemImages } from "../app/data/itemImages";
import SpriteBox from "../components/SpriteBox";
import RarityPill from "../components/RarityPill";
import Section from "../components/Section";
import { MerchantPricesInline } from "../components/PriceCoins";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = { item: DungeonItem; onPressImage?: (item: DungeonItem) => void };

const rarityColors: Record<string, string> = {
  common: "#c1ccdeff",
  uncommon: "#6cffa2ff",
  rare: "#45aafdff",
  epic: "#c383ffff",
  legendary: "#ffc052ff",
};

export default function ItemCard({ item, onPressImage }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = () => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setOpen(!open); };

  const rarityColor = rarityColors[item.rarity] || "#e2e8f0";
  const hasDetails =
    (item.gearUsage?.length ?? 0) > 0 ||
    (item.enchantUsage?.length ?? 0) > 0 ||
    (item.brewUsage?.length ?? 0) > 0;

  const img = itemImages[item.id] ?? null;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SpriteBox
          source={img as any}
          bg="#ecd5a8ff"
          border={rarityColor}
          size={48}
          onPress={() => onPressImage?.(item)}
          accessibilityLabel={`${item.name} image`}
        />

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.title, { color: rarityColor }]} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>

          <View style={{ marginTop: 4 }}>
            <RarityPill label={item.rarity} color={rarityColor} />
          </View>

          <Text style={styles.dungeon}>
            Found in: {item.dungeon.charAt(0).toUpperCase() + item.dungeon.slice(1)} Dungeon
          </Text>

          {/* prices */}
         <MerchantPricesInline
          sell={item.minPrice}
          popular={item.popularPrice ?? null}
          buy={null}
        />


          {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}
        </View>

        {hasDetails && (
          <Pressable onPress={toggle} accessibilityRole="button" accessibilityLabel="Toggle details">
            <Text style={styles.chev}>{open ? "▲" : "▼"}</Text>
          </Pressable>
        )}
      </View>

      {/* Gear usage */}
      {open && item.gearUsage?.length ? (
        <Section title="Gear usage">
          {item.gearUsage.map((g, idx) => (
            <Text key={idx} style={styles.dropdownItem}>
              {g.type === "weapon" ? "🗡️ " : "🛡️ "} {g.name} × {g.quantity}
            </Text>
          ))}
        </Section>
      ) : null}

      {/* Enchant usage */}
      {open && item.enchantUsage?.length ? (
        <Section title="Enchantment usage">
          {item.enchantUsage.map((e, idx) => {
            const qty = e.qtyMax && e.qtyMax !== e.qtyMin ? `${e.qtyMin}–${e.qtyMax}` : `${e.qtyMin}`;
            const gold = e.gold ? ` + ${e.gold}g` : "";
            return (
              <Text key={idx} style={styles.dropdownItem}>
                ✨ {e.target} × {qty}{gold}
              </Text>
            );
          })}
        </Section>
      ) : null}

      {/* Brewing */}
      {open && item.brewUsage?.length ? (
        <Section title="Brewing (Eris)">
          {item.brewUsage.map((b: any, idx: number) => {
            const qtyLabel = b.quantity != null ? ` × ${b.quantity}` : "";
            const goldLabel = b.gold != null ? ` + ${b.gold}g` : "";
            const reqLabel = b.requires?.length ? ` • ${b.requires.join(", ")}` : "";
            return (
              <Text key={idx} style={styles.dropdownItem}>
                🧪 {b.name}{qtyLabel}{goldLabel}{reqLabel}
              </Text>
            );
          })}
        </Section>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f2431",
    borderColor: "#5A6378",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 2,
  },
  row: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 14, fontWeight: "700", marginRight: 8 },
  priceLine: { marginTop: 4, fontSize: 12, color: "#FFFFFF" },
  priceGold: { fontSize: 14, fontWeight: "600", color: "#ffd166" },
  dungeon: { fontSize: 12, color: "#CBD5E1", marginTop: 4 },
  notes: { color: "#a3e635", fontSize: 12, marginTop: 4 },
  chev: { color: "#e2e8f0", fontSize: 18, paddingHorizontal: 8, paddingVertical: 4 },
  dropdownItem: { color: "#cbd5e1", fontSize: 13, marginBottom: 2 },
});
