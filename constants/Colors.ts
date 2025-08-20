import type { DungeonId } from "./types";

export const PALETTE = {
  parchment: "#F9F8F6",   // warm paper
  textDark:  "#0F1220",
  coinGold:  "#F5C46D",
};

export const DUNGEON_THEME: Record<DungeonId, { accent: string; tint: string }> = {
  golem:    { accent: "#00E0C6", tint: "rgba(0,224,198,0.08)" },
  forest:   { accent: "#B5C43A", tint: "rgba(181,196,58,0.08)" },  // moss
  desert:   { accent: "#FF6242", tint: "rgba(255,98,66,0.08)" },
  tech:     { accent: "#9F8DCC", tint: "rgba(159,141,204,0.08)" },
  wanderer: { accent: "#52D96E", tint: "rgba(82,217,110,0.08)" },
};
