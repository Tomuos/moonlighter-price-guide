// app/data/items.ts
import type { DungeonId, DungeonItem } from "../../constants/types"; 
import { GOLEM_ITEMS } from "./golemItems";
import { FOREST_ITEMS } from "./forestItems";
import { DESERT_ITEMS } from "./desertItems";
import { TECH_ITEMS } from "./techItems";
import { WANDERER_ITEMS } from "./wandererItems";

export const ALL_ITEMS: Record<DungeonId, DungeonItem[]> = {
  golem: GOLEM_ITEMS,
  forest: FOREST_ITEMS,
  desert: DESERT_ITEMS,
  tech: TECH_ITEMS,
  wanderer: WANDERER_ITEMS,
};

export function getItems(dungeon: DungeonId | "all"): DungeonItem[] {
  const base =
    dungeon === "all" ? Object.values(ALL_ITEMS).flat() : (ALL_ITEMS[dungeon] ?? []);
  return base.slice().sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}

// Optional helpers
export const byFloor = (items: DungeonItem[], floor: number) =>
  items.filter(i => i.floors.includes(floor));

export const onlyUpgradeMats = (items: DungeonItem[]) =>
  items.filter(i => /upgrade/i.test(i.notes ?? "") || (i.gearUsage?.length ?? 0) > 0);
