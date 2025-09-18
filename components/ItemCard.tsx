import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
 
} from "react-native";
import type { DungeonItem } from "../constants/types";
import { itemImages } from "../app/data/itemImages";



if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  item: DungeonItem;
  onPressImage?: (item: DungeonItem) => void;
};

const rarityColors: Record<string, string> = {
  common: "#c1ccdeff",
  uncommon: "#6cffa2ff",
  rare: "#45aafdff",
  epic: "#c383ffff",
  legendary: "#ffc052ff",
};

export default function ItemCard({ item, onPressImage }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  const rarityColor = rarityColors[item.rarity] || "#e2e8f0";

  const hasDetails =
    (item.gearUsage?.length ?? 0) > 0 ||
    (item.enchantUsage?.length ?? 0) > 0 ||
    (item.brewUsage?.length ?? 0) > 0;

  // --- OPTIONAL DEBUG (uncomment to see the intrinsic size RN sees) ---
  // const asset = RNImage.resolveAssetSource(itemImages[item.id] as any);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={[styles.spriteBox, { borderColor: rarityColor }]}>

          <Pressable
            onPress={() => onPressImage?.(item)}
            accessibilityRole="button"
            accessibilityLabel={`${item.name} image`}
          >
            {itemImages[item.id] ? (
              <Image
              source={itemImages[item.id]}
              style={[
                styles.spriteImage,
                item.dungeon === "wanderer" && { transform: [{ scale: 0.9 }] } // adjust here
              ]}
              resizeMode="contain"
              onError={() => {}}
            />
            ) : (
              <View style={[styles.image, styles.placeholder]}>
                <Text style={styles.placeholderText}>?</Text>
              </View>
            )}
          </Pressable>

          {/* --- OPTIONAL DEBUG (uncomment to display) ---
          <Text style={{ fontSize: 10, color: "#111", marginTop: 2 }}>
            {asset?.width}×{asset?.height}px
          </Text>
          */}
        </View>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.title, { color: rarityColor }]} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>

          <View style={{ marginTop: 4 }}>
            <View style={[styles.rarityPill, { borderColor: rarityColor }]}>
              <View style={[styles.rarityDot, { backgroundColor: rarityColor }]} />
              <Text style={[styles.rarityText, { color: rarityColor }]}>{item.rarity.toUpperCase()}</Text>
            </View>
          </View>

          <Text style={styles.dungeon}>
            Found in: {item.dungeon.charAt(0).toUpperCase() + item.dungeon.slice(1)} Dungeon
          </Text>

          <Text style={styles.priceLine}>
          <Image source={require("../assets/images/Coin-norm.png")} style={{ width: 20, height: 14 }} />{""}
          <Text style={styles.priceGold}>{item.minPrice.toLocaleString()}</Text>
          {item.popularPrice != null && (
            <Text>
              {"  Popular"}
              <Image source={require("../assets/images/Coin-pop.png")} style={{ width: 20, height: 14 }} />
              <Text style={styles.priceGold}>{item.popularPrice.toLocaleString()}</Text>
            </Text>
          )}
        </Text>


          {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}
        </View>

        {hasDetails && (
          <Pressable onPress={toggle} accessibilityRole="button" accessibilityLabel="Toggle details">
            <Text style={styles.chev}>{open ? "▲" : "▼"}</Text>
          </Pressable>
        )}
      </View>

      {/* Gear */}
      {open && item.gearUsage?.length ? (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Gear usage</Text>
          {item.gearUsage.map((g, idx) => (
            <Text key={idx} style={styles.dropdownItem}>
              {g.type === "weapon" ? "🗡️ " : "🛡️ "} {g.name} × {g.quantity}
            </Text>
          ))}
        </View>
      ) : null}

      {/* Enchant */}
      {open && item.enchantUsage?.length ? (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Enchantment usage</Text>
          {item.enchantUsage.map((e, idx) => {
            const qty = e.qtyMax && e.qtyMax !== e.qtyMin ? `${e.qtyMin}–${e.qtyMax}` : `${e.qtyMin}`;
            const gold = e.gold ? ` + ${e.gold}g` : "";
            return (
              <Text key={idx} style={styles.dropdownItem}>
                ✨ {e.target} × {qty}
                {gold}
              </Text>
            );
          })}
        </View>
      ) : null}

      {/* Brewing */}
      {open && item.brewUsage?.length ? (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Brewing (Eris)</Text>
          {item.brewUsage.map((b: any, idx: number) => {
            const qtyLabel = b.quantity != null ? ` × ${b.quantity}` : "";
            const goldLabel = b.gold != null ? ` + ${b.gold}g` : "";
            const reqLabel = b.requires?.length ? ` • ${b.requires.join(", ")}` : "";
            return (
              <Text key={idx} style={styles.dropdownItem}>
                🧪 {b.name}
                {qtyLabel}
                {goldLabel}
                {reqLabel}
              </Text>
            );
          })}
        </View>
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
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: { borderWidth: 1, borderColor: "#374151" },
  placeholderText: { color: "#64748b", fontWeight: "700", fontSize: 18 },

  title: { fontSize: 14, fontWeight: "700", marginRight: 8 },

  rarityPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#111827",
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  rarityDot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
  rarityText: { fontSize: 11, fontWeight: "800" },

  priceLine: { marginTop: 4, fontSize: 12, color: "#FFFFFF" },
  priceStrong: { fontSize: 14, fontWeight: "500", color: "#FFFFFF" },
  meta: { color: "#FFFFFF", fontSize: 12, marginTop: 2 },
  // in StyleSheet
  priceGold: { fontSize: 14, fontWeight: "600", color: "#ffd166" }, // same gold used on GearCard


  dungeon: {
    fontSize: 12,
    color: "#CBD5E1",
    marginTop: 4,
  },

  spriteBox: {
  backgroundColor: "#ecd5a8ff", // keep your box fill
  padding: 4,
  borderRadius: 5,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,               
},
  spriteImage: { width: 48, height: 48 }, // 48x48 display box

  notes: { color: "#a3e635", fontSize: 12, marginTop: 4 },

  chev: { color: "#e2e8f0", fontSize: 18, paddingHorizontal: 8, paddingVertical: 4 },

  dropdown: { marginTop: 10, borderTopColor: "#374151", borderTopWidth: 1, paddingTop: 8 },
  dropdownTitle: { color: "#e2e8f0", fontWeight: "600", marginBottom: 4 },
  dropdownItem: { color: "#cbd5e1", fontSize: 13, marginBottom: 2 },
});
