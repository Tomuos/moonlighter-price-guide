import type { DungeonId } from "./types";

export const DUNGEONS: { id: DungeonId; label: string; text: string; bg: string; border: string }[] = [
  { id: "golem",    label: "Golem Dungeon",    text: "#00E0C6", bg: "#2F3646", border: "#5A6378" },
  { id: "forest",   label: "Forest Dungeon",   text: "#B5C43A", bg: "#2F3646", border: "#5A6378" },
  { id: "desert",   label: "Desert Dungeon",   text: "#FF6242", bg: "#2F3646", border: "#5A6378" },
  { id: "tech",     label: "Tech Dungeon",     text: "#9F8DCC", bg: "#2F3646", border: "#5A6378" },
  { id: "wanderer", label: "Wanderer Dungeon", text: "#52D96E", bg: "#2F3646", border: "#5A6378" },
] as const;
