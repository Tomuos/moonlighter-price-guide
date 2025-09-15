// app/components/GearCard.tsx
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
import type { GearItem, GearId } from "../constants/types";
import { gearImages } from "../app/data/gearImages";
import { itemImages } from "@/app/data/itemImages"; 

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  gear: GearItem;
  onPressImage?: (gear: GearItem) => void;
};

const KIND_COLORS: Record<GearId, { pill: string; text: string; box: string }> = {
  weapons: { pill: "#62E6DB", text: "#62E6DB", box: "#ecd5a8ff" },
  armour:  { pill: "#F0C36B", text: "#F0C36B", box: "#ecd5a8ff" },
  amulets: { pill: "#FAA5EF", text: "#FAA5EF", box: "#ecd5a8ff" },
};

const TIER_COLORS: Record<number, string> = {
  1: "#c1ccde",
  2: "#6cffa2",
  3: "#45aafd",
  4: "#c383ff",
  5: "#ffc052",
};

export default function GearCard({ gear, onPressImage }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((v) => !v);
  };

  const kindColors = KIND_COLORS[gear.kind] ?? {
    pill: "#94a3b8",
    text: "#94a3b8",
    box: "#1f2431",
  };

  const tierColor = gear.tier ? TIER_COLORS[gear.tier] ?? "#e2e8f0" : "#e2e8f0";

  const recipeCount = gear.recipe?.materials?.length ?? 0;
  const hasDetails =
    recipeCount > 0 ||
    (gear.effects?.length ?? 0) > 0 ||
    (gear.upgrades?.length ?? 0) > 0 ||
    (gear.enchantments?.length ?? 0) > 0 ||
    !!gear.notes;



 function slugifyName(s?: string) {
  return (s ?? "")
    .toLowerCase()
    .replace(/['’]/g, "")     // drop apostrophes e.g. Wood's -> woods
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getMatImage(itemId?: string, itemName?: string) {
  // Try explicit id first
  if (itemId) {
    if (itemImages[itemId]) return itemImages[itemId];
    if (gearImages[itemId]) return gearImages[itemId];
  }

  // Fall back to name (as-is)
  if (itemName) {
    if (itemImages[itemName]) return itemImages[itemName];
    if (gearImages[itemName]) return gearImages[itemName];

    // Fall back to slugified key
    const key = slugifyName(itemName);
    if (itemImages[key]) return itemImages[key];
    if (gearImages[key]) return gearImages[key];
  }

  return null;
}

const RECIPE_ICON_SIZE = 32;          // bump to taste: 24/28/32
const RECIPE_BG_COLOR = "#ecd5a8ff";  // same as your item image box


function MaterialRow({
  id,
  name,
  qty,
  alts,
  size = RECIPE_ICON_SIZE,
}: {
  id?: string;
  name?: string;
  qty: number;
  alts?: string[];
  size?: number;
}) {
  const img = getMatImage(id, name);
  const iconStyle = { width: size, height: size };

  return (
    <View style={[styles.matRow, { minHeight: size + 8 }]}>
      <View
        style={[
          styles.matIconBox,
          {
            width: size + 8,
            height: size + 8,
            borderRadius: Math.round((size + 8) / 5),
            backgroundColor: RECIPE_BG_COLOR,
          },
        ]}
      >
        {img ? (
          <Image source={img} style={[styles.matIcon, iconStyle]} resizeMode="contain" />
        ) : (
          <View style={[styles.matIconFallback, iconStyle]} />
        )}
      </View>

      <Text style={styles.matText} numberOfLines={1}>
        {(name ?? id) ?? "Unknown"} × {qty}
        {alts?.length ? `  (or: ${alts.join(", ")})` : ""}
      </Text>
    </View>
  );
}



  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View
          style={[
            styles.spriteBox,
            { backgroundColor: kindColors.box, borderColor: kindColors.pill },
          ]}
        >
          <Pressable
            onPress={() => onPressImage?.(gear)}
            accessibilityRole="button"
            accessibilityLabel={`${gear.name} image`}
          >
            {gearImages[gear.id] ? (
              <Image
                source={gearImages[gear.id]}
                style={styles.spriteImage}
                resizeMode="contain"
              />
            ) : (
              <View style={[styles.image, styles.placeholder]}>
                <Text style={styles.placeholderText}>?</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text
            style={[styles.title, { color: tierColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {gear.name}
          </Text>

          <View style={{ flexDirection: "row", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
            {/* hide kind pill for weapons */}
            {gear.kind !== "weapons" && (
              <View style={[styles.rarityPill, { borderColor: kindColors.pill }]}>
                <View style={[styles.rarityDot, { backgroundColor: kindColors.pill }]} />
                <Text style={[styles.rarityText, { color: kindColors.text }]}>
                  {gear.kind.toUpperCase()}
                </Text>
              </View>
            )}

            {/* tier */}
            {gear.tier != null && (
              <View style={[styles.rarityPill, { borderColor: tierColor }]}>
                <View style={[styles.rarityDot, { backgroundColor: tierColor }]} />
                <Text style={[styles.rarityText, { color: tierColor }]}>
                  TIER {gear.tier}
                </Text>
              </View>
            )}

            {/* base dmg */}
            {gear.kind === "weapons" && (gear.baseDamage != null || gear.weaponStats?.base != null) && (
              <View style={[styles.badge, { borderColor: "#62E6DB", backgroundColor: "#0e2930" }]}>
                <Text style={[styles.badgeText, { color: "#62E6DB" }]}>
                  Base DMG: {gear.baseDamage ?? gear.weaponStats?.base}
                </Text>
              </View>
            )}
          </View>

          <Text style={styles.meta}>
            {gear.slot ? `${capitalize(gear.slot)} • ` : ""}
            {gear.craftedAt ? `Crafted at: ${gear.craftedAt}` : "Craftable gear"}
          </Text>

          {(gear.craftCost != null || gear.upgradeCost != null) && (
            <Text style={styles.priceLine}>
              {gear.craftCost != null && (
                <>
                  <Image
                    source={require("../assets/images/Coin-norm.png")}
                    style={{ width: 20, height: 14 }}
                  />{" "}
                  <Text style={styles.priceStrong}>{gear.craftCost}</Text>
                </>
              )}
              {gear.upgradeCost != null && (
                <>
                  {"   Upgrade "}
                  <Image
                    source={require("../assets/images/Coin-pop.png")}
                    style={{ width: 20, height: 14 }}
                  />
                  <Text style={styles.priceStrong}>{gear.upgradeCost}</Text>
                </>
              )}
            </Text>
          )}

          {gear.summary && <Text style={styles.summary}>{gear.summary}</Text>}
        </View>

        {hasDetails && (
          <Pressable onPress={toggle} accessibilityRole="button" accessibilityLabel="Toggle details">
            <Text style={styles.chev}>{open ? "▲" : "▼"}</Text>
          </Pressable>
        )}
      </View>

      {/* Blacksmith Recipe */}
      {open && recipeCount > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Blacksmith Recipe</Text>

          {gear.recipe?.gold != null && (
            <View style={styles.goldRow}>
              <Image
                source={require("../assets/images/Coin-pop.png")}
                style={{ width: 20, height: 14, marginRight: 6 }}
              />
              <Text style={styles.goldText}>
                Gold: {gear.recipe.gold.toLocaleString()}
              </Text>
            </View>
          )}

          {gear.recipe!.materials!.map((r, idx) => (
            <MaterialRow
              key={`${r.itemName}-${idx}`}
              name={r.itemName}
              qty={r.quantity}
              alts={r.altItems}
            />
          ))}
        </View>
      )}


      {/* Enchantments */}
      {open && (gear.enchantments?.length ?? 0) > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Enchantments</Text>
          {gear.enchantments!.map((e, idx: number) => (
            <Text key={`${e.bonus}-${idx}`} style={styles.dropdownItem}>
              ✨ {typeof (e as any).tier !== "undefined" ? `Tier ${(e as any).tier}: ` : ""}{e.bonus}
            </Text>
          ))}
          
        </View>
      )}

      {/* Effects */}
      {open && (gear.effects?.length ?? 0) > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Effects</Text>
          {gear.effects!.map((e, idx) => (
            <Text key={`${e}-${idx}`} style={styles.dropdownItem}>
              ✨ {e}
            </Text>
          ))}
        </View>
      )}

      {/* Upgrades */}
      {open && (gear.upgrades?.length ?? 0) > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Upgrades</Text>
          {gear.upgrades!.map((u, idx) => (
            <Text key={`u-${u.tier}-${idx}`} style={styles.dropdownItem}>
              ⬆️ Tier {u.tier}: {u.cost != null ? `${u.cost}g` : "—"}
              {u.materials?.length
                ? ` • ${u.materials.map((m) => `${m.itemName}×${m.quantity}`).join(", ")}`
                : ""}
              {u.effects?.length ? ` • ${u.effects.join(", ")}` : ""}
            </Text>
          ))}
        </View>
      )}

      {/* Notes */}
      {open && gear.notes && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Notes</Text>
          <Text style={styles.dropdownItem}>{gear.notes}</Text>
        </View>
      )}
    </View>
  );
}

function capitalize(s: string) {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}


const styles = StyleSheet.create({
  card: {
    width: "100%",
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

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: "#111827",
  },
  badgeText: { fontSize: 11, fontWeight: "800" },

  priceLine: { marginTop: 4, fontSize: 12, color: "#FFFFFF" },
  priceStrong: { fontSize: 14, fontWeight: "500", color: "#FFFFFF" },
  meta: { color: "#FFFFFF", fontSize: 12, marginTop: 2 },

  spriteBox: {
    padding: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    
  },
  spriteImage: { width: 48, height: 48 },

  summary: { color: "#a3e635", fontSize: 12, marginTop: 4 },

  chev: { color: "#e2e8f0", fontSize: 18, paddingHorizontal: 8, paddingVertical: 4 },

  dropdown: { marginTop: 10, borderTopColor: "#374151", borderTopWidth: 1, paddingTop: 8 },
  dropdownTitle: { color: "#e2e8f0", fontWeight: "600", marginBottom: 4 },
  dropdownItem: { color: "#cbd5e1", fontSize: 13, marginBottom: 2 },

  matRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  matIconBox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#5A6378", // matches your card border; tweak if you want
  },
  matIcon: {}, // size is set inline
  matIconFallback: { backgroundColor: "#4b5563" },
  matText: { color: "#cbd5e1", fontSize: 13 },

  goldRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  goldText: { color: "#ffd166", fontSize: 13 },

});
