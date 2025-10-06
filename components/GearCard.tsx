// app/components/GearCard.tsx
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager, Image } from "react-native";
import type { GearItem, GearId, WeaponItem, EnchantmentTier, MaterialLine } from "../constants/types";
import { gearImages } from "../app/data/gearImages";
import { merchantImages } from "../app/data/merchantImages";
import { BLACKSMITH_RECIPES_BY_ID } from "../app/data/recipes";
import Section from "../components/Section";
import SpriteBox from "../components/SpriteBox";
import RarityPill from "../components/RarityPill";
import StatPill from "../components/StatPill";
import DamagePill from "../components/DamagePill";
import { PriceLine, MerchantPricesInline, GoldRow } from "../components/PriceCoins";
import MaterialRow from "../components/MaterialRow";
import { capitalize, formatArmourEnchantText, formatPotionHp } from "../app/utils/format";


const DEFENSE_ICON = require("../assets/images/detail-icons/shield-icon.png");
const SPEED_ICON   = require("../assets/images/detail-icons/boot-icon.png");
const HEALTH_ICON  = require("../assets/images/detail-icons/heart-icon.png");
const ATTACK_ICON  = require("../assets/images/detail-icons/sword-icon.png");

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = { gear: GearItem; onPressImage?: (gear: GearItem) => void };

const KIND_COLORS: Record<GearId, { pill: string; text: string; box: string }> = {
  weapons:  { pill: "#62E6DB", text: "#62E6DB", box: "#ecd5a8ff" },
  armour:   { pill: "#F0C36B", text: "#F0C36B", box: "#ecd5a8ff" },
  amulets:  { pill: "#FAA5EF", text: "#FAA5EF", box: "#ecd5a8ff" },
  merchant: { pill: "#f36b6bff", text: "#f36b6bff", box: "#ecd5a8ff" },
};

const TIER_COLORS: Record<number, string> = {
  1: "#c1ccde", 2: "#6cffa2", 3: "#45aafd", 4: "#c383ff", 5: "#ffc052",
};

function isWeapon(g: GearItem): g is WeaponItem {
  return g.kind === "weapons";
}

export default function GearCard({ gear, onPressImage }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = () => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setOpen(v => !v); };

  const kindColors = KIND_COLORS[gear.kind] ?? { pill: "#94a3b8", text: "#94a3b8", box: "#1f2431" };
  const tierColor = gear.tier ? TIER_COLORS[gear.tier] ?? "#e2e8f0" : "#e2e8f0";

  const recipe = BLACKSMITH_RECIPES_BY_ID[gear.id];
  const recipeCount = recipe?.materials?.length ?? 0;
  const hasWeaponEnchants = isWeapon(gear) && (gear.enchantments?.length ?? 0) > 0;
  const hasArmourEnchant  = gear.kind === "armour" && !!gear.armourEnchant;

  const hasDetails =
    recipeCount > 0 ||
    (gear.effects?.length ?? 0) > 0 ||
    (gear.upgrades?.length ?? 0) > 0 ||
    hasWeaponEnchants ||
    hasArmourEnchant ||
    !!gear.notes;

  const isCraftable = !!recipe || gear.craftCost != null || !!gear.craftedAt;
  const isAmulet = gear.kind === "amulets";
  const hasSource = typeof gear.source === "string" && gear.source.trim().length > 0;

  const metaParts: string[] = [];
  if (gear.slot) metaParts.push(capitalize(gear.slot));
  if (isCraftable) metaParts.push(gear.craftedAt ? `Crafted at: ${gear.craftedAt}` : "Craftable gear");
  if (hasSource) metaParts.push(`Found: ${gear.source}`);
  const showMeta = !isAmulet && metaParts.length > 0;

  const imageSource =
    gear.kind === "merchant"
      ? merchantImages[gear.id] ?? null
      : gearImages[gear.id] ?? null;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <SpriteBox
          source={imageSource as any}
          bg={kindColors.box}
          border={kindColors.pill}
          size={48}
          onPress={() => onPressImage?.(gear)}
          accessibilityLabel={`${gear.name} image`}
        />

        <View style={styles.rightCol}>
          <Text style={[styles.title, { color: tierColor }]} numberOfLines={1} ellipsizeMode="tail">
            {gear.name}
          </Text>

         {/* pills row */}
          <View style={styles.pillsRow}>
            <RarityPill label={gear.kind.toUpperCase()} color={kindColors.pill} />
            {gear.tier != null && (
              <RarityPill label={`Tier ${gear.tier}`} color={tierColor} />
            )}
          </View>

          {/* merchant price row */}
          {gear.kind === "merchant" && (
            <View style={styles.priceRow}>
              <MerchantPricesInline
                sell={(gear as any).sellPrice}
                popular={(gear as any).popularPrice}
                buy={(gear as any).buyPrice}
              />
            </View>
          )}

          {/* merchant recovery (hpRestore) */}
          {gear.kind === "merchant" && (gear as any).hpRestore && (
            (() => {
              const hpLabel = formatPotionHp((gear as any).hpRestore);
              return hpLabel ? (
                <View style={styles.statPillsRow}>
                  <StatPill icon={HEALTH_ICON} text={hpLabel.toUpperCase()} />
                </View>
              ) : null;
            })()
          )}

          {/* weapon base dmg pill */}
          {isWeapon(gear) && (gear.baseDamage != null || gear.weaponStats?.base != null) && (
            <View style={{ width: "100%", marginTop: 6 }}>
              <DamagePill icon={ATTACK_ICON} value={gear.baseDamage ?? gear.weaponStats?.base!} />
            </View>
          )}

          {/* armour stat pills */}
          {gear.kind === "armour" && (gear.armourStats?.base?.health != null || gear.armourStats?.base?.speed != null) && (
            <View style={styles.statPillsRow}>
              {typeof gear.armourStats.base.health === "number" && (
                <StatPill icon={HEALTH_ICON} text={`${gear.armourStats.base.health} HP`} />
              )}
              {typeof gear.armourStats.base.speed === "number" && (
                <StatPill icon={SPEED_ICON} text={`${gear.armourStats.base.speed} SPD`} />
              )}
            </View>
          )}

          {showMeta && <Text style={styles.meta}>{metaParts.join(" • ")}</Text>}

          <PriceLine craft={gear.craftCost ?? null} upgrade={gear.upgradeCost ?? null} />

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
        <Section title="Blacksmith Recipe">
          <GoldRow gold={recipe?.gold} />
          {recipe!.materials!.map((r: MaterialLine, idx: number) => (
            <MaterialRow key={`${r.itemName ?? r.itemId}-${idx}`} id={r.itemId} name={r.itemName} qty={r.quantity} alts={r.altItems} />
          ))}
        </Section>
      )}

      {/* Enchantments (weapons multi-tier) */}
      {open && isWeapon(gear) && (gear.enchantments?.length ?? 0) > 0 && (
        <Section title="Enchantments">
          {gear.enchantments!.map((e: EnchantmentTier, idx: number) => (
            <View key={`${e.bonus}-${idx}`} style={{ marginTop: 4, marginBottom: 6 }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <Text style={styles.dropdownItem}>✨ {typeof e.tier !== "undefined" ? `Tier ${e.tier}: ` : ""}{e.bonus}</Text>
                {typeof e.gold === "number" ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/images/detail-icons/Coin-pop.png")} style={{ width: 20, height: 14, marginRight: 6 }} />
                    <Text style={{ color: "#ffd166", fontSize: 13 }}>{e.gold.toLocaleString()}</Text>
                  </View>
                ) : null}
              </View>
              {e.cost?.map((m: MaterialLine, i: number) => (
                <MaterialRow key={`emat-${idx}-${m.itemName ?? m.itemId}-${i}`} id={m.itemId} name={m.itemName} qty={m.quantity} alts={m.altItems} />
              ))}
            </View>
          ))}
        </Section>
      )}

      {/* Enchant (armour single-line) */}
      {open && gear.kind === "armour" && gear.armourEnchant && (
        <Section title="Enchant">
          <GoldRow gold={gear.armourEnchant.gold} />
          {gear.armourEnchant.cost?.map((m: MaterialLine, i: number) => (
            <MaterialRow key={`aemat-${m.itemName ?? m.itemId}-${i}`} id={m.itemId} name={m.itemName} qty={m.quantity} alts={m.altItems} />
          ))}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 6 }}>
            <Text style={[styles.dropdownItem, { color: "#a3e635", fontWeight: "700" }]}>
              Enchanting adds {`+${formatArmourEnchantText(gear).replace(/^\+?\s*/, "")}`}
            </Text>
            <Image source={DEFENSE_ICON} style={{ width: 28, height: 28 }} resizeMode="contain" />
          </View>
        </Section>
      )}

      {/* Effects */}
      {open && (gear.effects?.length ?? 0) > 0 && (
        <Section title="Effects">
          {gear.effects!.map((e: string, idx: number) => (
            <Text key={`${e}-${idx}`} style={styles.dropdownItem}>✨ {e}</Text>
          ))}
        </Section>
      )}

      {/* Upgrades */}
      {open && (gear.upgrades?.length ?? 0) > 0 && (
        <Section title="Upgrades">
          {gear.upgrades!.map((u, idx) => (
            <Text key={`u-${u.tier}-${idx}`} style={styles.dropdownItem}>
              ⬆️ Tier {u.tier}: {u.cost != null ? `${u.cost}g` : "—"}
              {u.materials?.length ? ` • ${u.materials.map((m) => `${m.itemName}×${m.quantity}`).join(", ")}` : ""}
              {u.effects?.length ? ` • ${u.effects.join(", ")}` : ""}
            </Text>
          ))}
        </Section>
      )}

      {/* Notes */}
      {open && gear.notes && (
        <Section title="Notes">
          <Text style={styles.dropdownItem}>{gear.notes}</Text>
        </Section>
      )}
    </View>
  );


  
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
  rightCol: { flex: 1, marginLeft: 12, minWidth: 0 },
  title: { fontSize: 14, fontWeight: "700", marginRight: 8 },
  pillsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 4, width: "100%", alignItems: "flex-start" },
  priceRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 6 },
  statPillsRow: { flexDirection: "row", gap: 8, marginTop: 6, flexWrap: "wrap", width: "100%", alignItems: "flex-start" },
  meta: { color: "#FFFFFF", fontSize: 12, marginTop: 2 },
  summary: { color: "#a3e635", fontSize: 12, marginTop: 4 },
  chev: { color: "#e2e8f0", fontSize: 18, paddingHorizontal: 8, paddingVertical: 4 },
  dropdownItem: { color: "#cbd5e1", fontSize: 13, marginBottom: 2 },
});
