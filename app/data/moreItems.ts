// app/data/moreItems.ts
import type { GearId, GearItem } from "../../constants/types";
import { WEAPONS } from "./weapons";
import { ARMOUR }  from "./armour";   // ← make sure file is exactly "armour.ts"
import { AMULETS } from "./amulets";  // ← and exactly "amulets.ts"

export const ALL_GEAR: Record<GearId, GearItem[]> = {
  weapons: WEAPONS,
  armour:  ARMOUR,
  amulets: AMULETS,
};

export function getMoreItems(gear: GearId | "all"): GearItem[] {
  const base = gear === "all" ? Object.values(ALL_GEAR).flat()
                              : (ALL_GEAR[gear] ?? []);
  return base.slice().sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}


