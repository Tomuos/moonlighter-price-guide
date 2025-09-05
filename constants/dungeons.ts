import type { DungeonId } from "./types";

export const DUNGEONS: { id: DungeonId; label: string; text: string; bg: string; border: string }[] = [
  { id: "golem",    label: "Golem",    text: "#67d8f7ff", bg: "#2F3646", border: "#5A6378" },
  { id: "forest",   label: "Forest",   text: "#9edb3dff", bg: "#2F3646", border: "#5A6378" },
  { id: "desert",   label: "Desert",   text: "#ff9442ff", bg: "#2F3646", border: "#5A6378" },
  { id: "tech",     label: "Tech",     text: "#bea5fdff", bg: "#2F3646", border: "#5A6378" },
  { id: "wanderer", label: "Wanderer", text: "#62f1bfff", bg: "#2F3646", border: "#5A6378" },
] as const;
