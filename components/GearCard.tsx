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
import type {
  GearItem,
  GearId,
  WeaponItem,
  EnchantmentTier,
  MaterialLine,
} from "../constants/types";
import { gearImages } from "../app/data/gearImages";
import { itemImages } from "@/app/data/itemImages";
import { BLACKSMITH_RECIPES_BY_ID } from "@/app/data/recipes";

/* Enable Android layout animations */
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/* ---------- Props ---------- */
type Props = {
  gear: GearItem;
  onPressImage?: (gear: GearItem) => void;
};

/* ---------- Colors ---------- */
const KIND_COLORS: Record<GearId, { pill: string; text: string; box: string }> = {
  weapons: { pill: "#62E6DB", text: "#62E6DB", box: "#ecd5a8ff" },
  armour: { pill: "#F0C36B", text: "#F0C36B", box: "#ecd5a8ff" },
  amulets: { pill: "#FAA5EF", text: "#FAA5EF", box: "#ecd5a8ff" },
};

const TIER_COLORS: Record<number, string> = {
  1: "#c1ccde",
  2: "#6cffa2",
  3: "#45aafd",
  4: "#c383ff",
  5: "#ffc052",
};

const RECIPE_ICON_SIZE = 32;
const RECIPE_BG_COLOR = "#ecd5a8ff";
const DEFENSE_ICON = require("../assets/images/detail-icons/shield-icon.png"); 
// const SPEED_ICON = require("../assets/images/detail-icons/boot-icon.png"); 
// const HEALTH_ICON = require("../assets/images/detail-icons/heart-icon.png"); 
// const ATTACK_ICON = require("../assets/images/detail-icons/sword-icon.png"); 


/* ---------- Type guards ---------- */
function isWeapon(g: GearItem): g is WeaponItem {
  return g.kind === "weapons";
}

/* ---------- Small helpers ---------- */
function capitalize(s: string) {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

function slugifyName(s?: string) {
  return (s ?? "").toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function romanToArabic(r: string): number | null {
  const m: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let prev = 0,
    total = 0;
  for (let i = r.length - 1; i >= 0; i--) {
    const v = m[r[i].toUpperCase()] || 0;
    if (!v) return null;
    if (v < prev) total -= v;
    else {
      total += v;
      prev = v;
    }
  }
  return total;
}

function buildNameKeyVariants(raw?: string): string[] {
  if (!raw) return [];
  const name = raw.trim();

  // strip trailing numeral (roman or digits) to get "base"
  const m = name.match(/\s+([IVXLCDM]+|\d+)$/i);
  const numeral = m?.[1];
  const base = name.replace(/\s+([IVXLCDM]+|\d+)$/i, "").trim();
  const asNumber = !numeral ? null : /^\d+$/.test(numeral) ? parseInt(numeral, 10) : romanToArabic(numeral);

  const variants: string[] = [];
  const bake = (b: string) => {
    const baseSlug = slugifyName(b);
    variants.push(b, baseSlug);
    if (numeral) {
      variants.push(`${baseSlug}-${numeral.toLowerCase()}`, `${baseSlug}-${numeral.toUpperCase()}`);
      if (asNumber != null) variants.push(`${baseSlug}-${asNumber}`);
    }
  };

  bake(name);
  bake(base);

  // Armor/armour swaps AND removal (DLC keys may omit the word)
  const armorSwap = (s: string) => s.replace(/\barmor\b/gi, "armour");
  const armorRemoved = (s: string) => s.replace(/\barmou?r\b/gi, "").replace(/\s{2,}/g, " ").trim();

  const swapped = armorSwap(name);
  if (swapped !== name) bake(swapped);
  bake(armorRemoved(name));
  bake(armorRemoved(base));

  return Array.from(new Set(variants));
}

function getMatImage(itemId?: string, itemName?: string) {
  if (itemId) {
    if ((itemImages as any)[itemId]) return (itemImages as any)[itemId];
    if ((gearImages as any)[itemId]) return (gearImages as any)[itemId];
  }
  for (const key of buildNameKeyVariants(itemName)) {
    if ((itemImages as any)[key]) return (itemImages as any)[key];
    if ((gearImages as any)[key]) return (gearImages as any)[key];
  }
  return null;
}

function formatArmourEnchantText(g: GearItem): string {
  if (g.kind !== "armour" || !g.armourEnchant) return "";
  const b = g.armourEnchant.bonus as any;
  if (b.text) return b.text.replace(/Defense/g, "Defence");
  const parts: string[] = [];
  if (typeof b.health === "number") parts.push(`+${b.health} Health`);
  if (typeof b.defense === "number") parts.push(`+${b.defense} Defence`);
  if (typeof b.speed === "number") parts.push(`+${b.speed} Speed`);
  return parts.join(" · ");
}




/* ---------- Material row ---------- */
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
        {img ? <Image source={img} style={[styles.matIcon, iconStyle]} resizeMode="contain" /> : <View style={[styles.matIconFallback, iconStyle]} />}
      </View>

      <Text style={styles.matText} numberOfLines={1}>
        {(name ?? id) ?? "Unknown"} × {qty}
        {alts?.length ? `  (or: ${alts.join(", ")})` : ""}
      </Text>
    </View>
  );
}

/* ====================================================================== */

export default function GearCard({ gear, onPressImage }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((v) => !v);
  };

  const kindColors = KIND_COLORS[gear.kind] ?? { pill: "#94a3b8", text: "#94a3b8", box: "#1f2431" };
  const tierColor = gear.tier ? TIER_COLORS[gear.tier] ?? "#e2e8f0" : "#e2e8f0";

  const recipe = BLACKSMITH_RECIPES_BY_ID[gear.id];
  const recipeCount = recipe?.materials?.length ?? 0;

  const hasWeaponEnchants = isWeapon(gear) && (gear.enchantments?.length ?? 0) > 0;
  const hasArmourEnchant = gear.kind === "armour" && !!gear.armourEnchant;

  const hasDetails =
    recipeCount > 0 ||
    (gear.effects?.length ?? 0) > 0 ||
    (gear.upgrades?.length ?? 0) > 0 ||
    hasWeaponEnchants ||
    hasArmourEnchant ||
    !!gear.notes;

  // decide if this item is craftable
  const isCraftable = !!recipe || gear.craftCost != null || !!gear.craftedAt;

  // amulets never show the meta row
  const isAmulet = gear.kind === "amulets";

  // optional "found" source (e.g., "Skeleton drops, floors 1–2")
  const hasSource = typeof gear.source === "string" && gear.source.trim().length > 0;

  // build the meta parts (slot • Crafted at ... • Found: ...)
  const metaParts: string[] = [];
  if (gear.slot) metaParts.push(capitalize(gear.slot));
  if (isCraftable) metaParts.push(gear.craftedAt ? `Crafted at: ${gear.craftedAt}` : "Craftable gear");
  if (hasSource) metaParts.push(`Found: ${gear.source}`);

  const showMeta = !isAmulet && metaParts.length > 0;

  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.row}>
        <View style={[styles.spriteBox, { backgroundColor: kindColors.box, borderColor: kindColors.pill }]}>
          <Pressable onPress={() => onPressImage?.(gear)} accessibilityRole="button" accessibilityLabel={`${gear.name} image`}>
            {gearImages[gear.id] ? (
              <Image source={gearImages[gear.id]} style={styles.spriteImage} resizeMode="contain" />
            ) : (
              <View style={[styles.image, styles.placeholder]}>
                <Text style={styles.placeholderText}>?</Text>
              </View>
            )}
          </Pressable>
        </View>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.title, { color: tierColor }]} numberOfLines={1} ellipsizeMode="tail">
            {gear.name}
          </Text>

          {/* Pills */}
          <View style={{ flexDirection: "row", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
            {/* hide kind pill for weapons */}
            {gear.kind !== "weapons" && (
              <View style={[styles.rarityPill, { borderColor: kindColors.pill }]}>
                <View style={[styles.rarityDot, { backgroundColor: kindColors.pill }]} />
                <Text style={[styles.rarityText, { color: kindColors.text }]}>{gear.kind.toUpperCase()}</Text>
              </View>
            )}

            {/* tier */}
            {gear.tier != null && (
              <View style={[styles.rarityPill, { borderColor: tierColor }]}>
                <View style={[styles.rarityDot, { backgroundColor: tierColor }]} />
                <Text style={[styles.rarityText, { color: tierColor }]}>TIER {gear.tier}</Text>
              </View>
            )}

            {/* base dmg */}
            {isWeapon(gear) && (gear.baseDamage != null || gear.weaponStats?.base != null) && (
              <View style={[styles.badge, { borderColor: "#62E6DB", backgroundColor: "#0e2930" }]}>
                <Text style={[styles.badgeText, { color: "#62E6DB" }]}>Base DMG: {gear.baseDamage ?? gear.weaponStats?.base}</Text>
              </View>
            )}
          </View>

          {showMeta && <Text style={styles.meta}>{metaParts.join(" • ")}</Text>}

          {(gear.craftCost != null || gear.upgradeCost != null) && (
            <Text style={styles.priceLine}>
              {gear.craftCost != null && (
                <>
                  <Image source={require("../assets/images/Coin-norm.png")} style={{ width: 20, height: 14 }} />{" "}
                  <Text style={styles.priceStrong}>{gear.craftCost}</Text>
                </>
              )}
              {gear.upgradeCost != null && (
                <>
                  {"   Upgrade "}
                  <Image source={require("../assets/images/Coin-pop.png")} style={{ width: 20, height: 14 }} />
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

          {typeof recipe?.gold === "number" && (
            <View style={styles.goldRow}>
              <Image source={require("../assets/images/Coin-pop.png")} style={{ width: 20, height: 14, marginRight: 6 }} />
              <Text style={styles.goldText}>Gold: {recipe!.gold.toLocaleString()}</Text>
            </View>
          )}

          {recipe!.materials!.map((r: MaterialLine, idx: number) => (
            <MaterialRow key={`${r.itemName ?? r.itemId}-${idx}`} id={r.itemId} name={r.itemName} qty={r.quantity} alts={r.altItems} />
          ))}
        </View>
      )}

      {/* Enchantments (weapons multi-tier) */}
      {open && isWeapon(gear) && (gear.enchantments?.length ?? 0) > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Enchantments</Text>

          {gear.enchantments!.map((e: EnchantmentTier, idx: number) => (
            <View key={`${e.bonus}-${idx}`} style={styles.enchantLine}>
              {/* top line: label (left) + gold (right) */}
              <View style={styles.enchantTop}>
                <Text style={styles.dropdownItem}>✨ {typeof e.tier !== "undefined" ? `Tier ${e.tier}: ` : ""}{e.bonus}</Text>
                {typeof e.gold === "number" ? (
                  <View style={styles.goldInline}>
                    <Image source={require("../assets/images/Coin-pop.png")} style={{ width: 20, height: 14, marginRight: 6 }} />
                    <Text style={styles.goldText}>{e.gold.toLocaleString()}</Text>
                  </View>
                ) : null}
              </View>

              {/* next line: materials (if any) */}
              {e.cost?.map((m: MaterialLine, i: number) => (
                <MaterialRow key={`emat-${idx}-${m.itemName ?? m.itemId}-${i}`} id={m.itemId} name={m.itemName} qty={m.quantity} alts={m.altItems} />
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Enchant (armour single-line) */}
{open && gear.kind === "armour" && gear.armourEnchant && (
  <View style={styles.dropdown}>
    <Text style={styles.dropdownTitle}>Enchant</Text>


    {/* Gold row ABOVE materials (same style as recipe) */}
    {typeof gear.armourEnchant.gold === "number" && (
      <View style={styles.goldRow}>
        <Image
          source={require("../assets/images/Coin-pop.png")}
          style={{ width: 20, height: 14, marginRight: 6 }}
        />
        <Text style={styles.goldText}>Gold: {gear.armourEnchant.gold.toLocaleString()}</Text>
      </View>
    )}

    {/* Materials */}
    {gear.armourEnchant.cost?.map((m: MaterialLine, i: number) => (
      <MaterialRow
        key={`aemat-${m.itemName ?? m.itemId}-${i}`}
        id={m.itemId}
        name={m.itemName}
        qty={m.quantity}
        alts={m.altItems}
      />
    ))}

    {/* Stat row (shield + text) */}
    <View style={styles.statRow}>
      <Text style={[styles.dropdownItem, styles.statBonusText]}>Enchanting  adds {`+${formatArmourEnchantText(gear).replace(/^\+?\s*/, "")}`}</Text>
      <Image source={DEFENSE_ICON} style={styles.statIcon} resizeMode="contain" />
    </View>
  </View>
)}

      {/* Effects */}
      {open && (gear.effects?.length ?? 0) > 0 && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownTitle}>Effects</Text>
          {gear.effects!.map((e: string, idx: number) => (
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
              {u.materials?.length ? ` • ${u.materials.map((m) => `${m.itemName}×${m.quantity}`).join(", ")}` : ""}
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

/* ---------- Styles ---------- */
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
    borderColor: "#5A6378",
  },
  matIcon: {},
  matIconFallback: { backgroundColor: "#4b5563" },
  matText: { color: "#cbd5e1", fontSize: 13 },

  statRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 6 },
  statIcon: { width: 28, height: 28 },
  statBonusText: { color: "#a3e635", fontWeight: "700" }, // green bonus text

  goldRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  goldText: { color: "#ffd166", fontSize: 13 },

  /* Enchant layout: one line (label+gold), then materials */
  enchantLine: { marginTop: 4, marginBottom: 6 },
  enchantTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  goldInline: { flexDirection: "row", alignItems: "center" },
});
