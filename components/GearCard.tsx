// app/components/GearCard.tsx
import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager, } from "react-native";
import type { GearItem, GearId, WeaponItem, EnchantmentTier, MaterialLine, } from "../constants/types";
import { gearImages } from "../app/data/gearImages";
import { materialImages } from "../app/data/materialImages";
import { merchantImages } from "../app/data/merchantImages";
import { slugify } from "../app/utils/slug"; //
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
  merchant: { pill: "#f36b6bff", text: "#f36b6bff", box: "#ecd5a8ff" },
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
const SPEED_ICON = require("../assets/images/detail-icons/boot-icon.png"); 
const HEALTH_ICON = require("../assets/images/detail-icons/heart-icon.png"); 
const ATTACK_ICON = require("../assets/images/detail-icons/sword-icon.png"); 


/* ---------- Type guards ---------- */
function isWeapon(g: GearItem): g is WeaponItem {
  return g.kind === "weapons";
}

/* ---------- Small helpers ---------- */
function capitalize(s: string) {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}


function MerchantPrices({ it }: { it: GearItem }) {
  if (it.kind !== "merchant") return null;

  const m = it as unknown as {
    sellPrice?: number;
    popularPrice?: number;
    buyPrice?: number;
  };

  const hasSell = typeof m.sellPrice === "number";
  const hasPop  = typeof m.popularPrice === "number";
  const hasBuy  = typeof m.buyPrice === "number";
  if (!hasSell && !hasPop && !hasBuy) return null;

  return (
  <Text style={styles.priceLine}>
    {hasSell && (
      <>
        <Image source={require("../assets/images/Coin-norm.png")} style={{ width: 20, height: 14 }} />{" "}
        <Text style={styles.priceNumSell}>{m.sellPrice!.toLocaleString()}</Text>
      </>
    )}

    {hasPop && (
      <>
        {"  "}
        <Text style={styles.priceLabel}>Popular </Text>
        <Image source={require("../assets/images/Coin-pop.png")} style={{ width: 20, height: 14 }} />{" "}
        <Text style={styles.priceNumPop}>{m.popularPrice!.toLocaleString()}</Text>
      </>
    )}

    {hasBuy && (
      <>
        {"  "}
        <Text style={styles.priceLabel}>Buy </Text>
        <Image source={require("../assets/images/Coin-norm.png")} style={{ width: 20, height: 14 }} />{" "}
        <Text style={styles.priceNumBuy}>{m.buyPrice!.toLocaleString()}</Text>
      </>
    )}
  </Text>
);

}





function romanToArabic(r: string): number | null {
  const map: Record<string, number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let total = 0, prev = 0;
  for (let i = r.length - 1; i >= 0; i--) {
    const v = map[r[i].toUpperCase()] || 0;
    if (!v) return null;
    total += v < prev ? -v : v;
    prev = v;
  }
  return total;
}

function withRomanVariants(k: string): string[] {
  const out = [k];
  const m = k.match(/-(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i);
  if (m) {
    const upper = k.replace(m[0], "-" + m[1].toUpperCase());
    out.push(upper);
    const n = romanToArabic(m[1]);
    if (n) out.push(k.replace(m[0], "-" + n));
  }
  return out;
}

function getMatImage(itemId?: string, itemName?: string) {
  const base: string[] = [];

  // 1) id candidates
  if (itemId) base.push(itemId, slugify(itemId));

  // 2) name candidates + armor/armour handling + removal
  if (itemName) {
    const s = slugify(itemName); // "Composite Armor Helmet III" -> "composite-armor-helmet-iii"
    base.push(
      s,
      s.replace(/-armou?r-/g, "-"),  // remove armor/armour
      s.replace(/-armor-/g, "-armour-"),
      s.replace(/-armour-/g, "-armor-")
    );
  }

  // 3) expand each base with roman/numeric + underscore versions
  const candidates = new Set<string>();
  for (const k of base) {
    for (const v of withRomanVariants(k)) {
      candidates.add(v);
      candidates.add(v.replace(/-/g, "_"));
    }
  }

  for (const k of candidates) {
    const hit = (materialImages as any)[k];
    if (hit) return hit;
  }
  return null; // or a placeholder image
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
          
          <Pressable
  onPress={() => onPressImage?.(gear)}
  accessibilityRole="button"
  accessibilityLabel={`${gear.name} image`}
>
  {gear.kind === "merchant"
    ? merchantImages[gear.id]
      ? (
        <Image
          source={merchantImages[gear.id]}
          style={styles.spriteImage}
          resizeMode="contain"
        />
      )
      : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>?</Text>
        </View>
      )
    : gearImages[gear.id]
      ? (
        <Image
          source={gearImages[gear.id]}
          style={styles.spriteImage}
          resizeMode="contain"
        />
      )
      : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>?</Text>
        </View>
      )
  }
</Pressable>
        </View>

        {/* RIGHT COLUMN */}
        <View style={styles.rightCol}>
          <Text style={[styles.title, { color: tierColor }]} numberOfLines={1} ellipsizeMode="tail">
            {gear.name}
          </Text>

          {/* PILLS ROW */}
          <View style={styles.pillsRow}>
            {/* kind pill (hide for weapons) */}
            {gear.kind !== "weapons" && (
              <View style={[styles.rarityPill, { borderColor: kindColors.pill }]}>
                <View style={[styles.rarityDot, { backgroundColor: kindColors.pill }]} />
                <Text style={[styles.rarityText, { color: kindColors.text }]}>{gear.kind.toUpperCase()}</Text>
              </View>
            )}

            {/* tier pill */}
            {gear.tier != null && (
              <View style={[styles.rarityPill, { borderColor: tierColor }]}>
                <View style={[styles.rarityDot, { backgroundColor: tierColor }]} />
                <Text style={[styles.rarityText, { color: tierColor }]}>TIER {gear.tier}</Text>
              </View>
            )}

            

              </View>
            {gear.kind === "merchant" && (
              <View style={styles.priceRow}>
                <MerchantPrices it={gear} />
              </View>
            )}

            {/* weapon base dmg pill */}
            {isWeapon(gear) && (gear.baseDamage != null || gear.weaponStats?.base != null) && (
            <View style={{ width: "100%", marginTop: 6 }}>
              <View style={styles.damagePill}>
                <Image source={ATTACK_ICON} style={styles.damagePillIcon} resizeMode="contain" />
                <Text style={styles.damagePillText}> DMG: {gear.baseDamage ?? gear.weaponStats?.base}</Text>
              </View>
            </View>
            )}
            
            {/* armour stat pills */}
            {gear.kind === "armour" && (gear.armourStats?.base?.health != null || gear.armourStats?.base?.speed != null) && (
              <View style={styles.statPillsRow}>
                {typeof gear.armourStats.base.health === "number" && (
                  <View style={styles.armourPill}>
                    <Image source={HEALTH_ICON} style={styles.armourPillIcon} resizeMode="contain" />
                    <Text style={styles.armourPillText}>{gear.armourStats.base.health} HP</Text>
                  </View>
                )}
                {typeof gear.armourStats.base.speed === "number" && (
                  <View style={styles.armourPill}>
                    <Image source={SPEED_ICON} style={styles.armourPillIcon} resizeMode="contain" />
                    <Text style={styles.armourPillText}>{gear.armourStats.base.speed} SPD</Text>
                  </View>
                )}
          </View>

          )}
          {/* meta + prices + summary stay INSIDE rightCol */}
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

armourPill: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
  paddingHorizontal: 4,
  paddingVertical: 2,
  borderRadius: 999,
  borderWidth: 1,
  borderColor: "#F0C36B",      // same green as your bonus text
  backgroundColor: "#241e14ff",   // matches other pills’ bg
},

armourPillText: {
  fontSize: 11,
  fontWeight: "800",
  color: "#e8d3a9ff",
},

armourPillIcon: {
  width: 20,
  height: 20,
},

statPillsRow: {
  flexDirection: "row",
  gap: 8,
  marginTop: 6,
  flexWrap: "wrap",
  width: "100%",         // 👈 force full row
  alignItems: "flex-start",
},


rightCol: {
  flex: 1,
  marginLeft: 12,
  minWidth: 0,      // lets the title ellipsize instead of pushing siblings
},

pillsRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 4,
  width: "100%",    // forces this row to sit under the title
  alignItems: "flex-start",
},

priceRow: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 6,
},

priceCoin: { width: 20, height: 14, marginRight: 6 },
pricePillText: { color: "#ffd166", fontWeight: "800", fontSize: 12 },
pricePillLabel: { color: "#ffd166", fontSize: 11, opacity: 0.9, marginLeft: 4 },


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

  

  damagePill: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6,
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 999,
  borderWidth: 1,
  borderColor: "#62E6DB",
  backgroundColor: "#0e2930",

  // NEW: prevent stretching
  alignSelf: "flex-start",
  flexGrow: 0,
  flexShrink: 0,
},

damagePillText: {
  fontSize: 11,
  fontWeight: "800",
  color: "#62E6DB",
},
damagePillIcon: {
  width: 20,
  height: 20,
},

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


// new: number colors
priceNumSell: { fontSize: 14, fontWeight: "700", color: "#ffd166" }, // normal coin
priceNumPop:  { fontSize: 14, fontWeight: "700", color: "#ffe69a" }, // popular coin (slightly lighter)
priceNumBuy:  { fontSize: 14, fontWeight: "700", color: "#b9fbc0" }, // buy label (green-ish), tweak if you like
priceLabel:   { fontSize: 12, color: "#FFFFFF" },


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
