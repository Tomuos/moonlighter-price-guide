// app/utils/format.ts
import type { GearItem } from "@/constants/types";

export function capitalize(s: string) {
  return s.length ? s[0].toUpperCase() + s.slice(1) : s;
}

export function formatArmourEnchantText(g: GearItem): string {
  if (g.kind !== "armour" || !g.armourEnchant) return "";
  const b = g.armourEnchant.bonus as any;
  if (b.text) return b.text.replace(/Defense/g, "Defence");
  const parts: string[] = [];
  if (typeof b.health === "number") parts.push(`+${b.health} Health`);
  if (typeof b.defense === "number") parts.push(`+${b.defense} Defence`);
  if (typeof b.speed === "number") parts.push(`+${b.speed} Speed`);
  return parts.join(" · ");
}
