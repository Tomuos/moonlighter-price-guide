import type { DungeonId, DungeonItem } from "../../constants/types";
import { GOLEM_ITEMS } from "./golemItems";

export const REGISTRY: Record<DungeonId, DungeonItem[]> = {
  golem: GOLEM_ITEMS,
  forest: [],
  desert: [],
  tech: [],
  wanderer: [],
};

export function getItems(dungeon: DungeonId | "all"): DungeonItem[] {
  const base = dungeon === "all"
    ? Object.values(REGISTRY).flat()
    : (REGISTRY[dungeon] ?? []);
  return [...base].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
}
