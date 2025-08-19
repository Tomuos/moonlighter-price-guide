import type { ImageSourcePropType } from "react-native";

export type DungeonId = "golem" | "forest" | "desert" | "tech" | "wanderer";

export type Price = {
  normal: number;        // your baseline “perfect/normal” price
  popular?: number;      // optional boosted price when demand is high
};

export interface Item {
  id: string;            // "broken-sword"
  name: string;          // "Broken Sword"
  dungeon: DungeonId;
  image?: ImageSourcePropType; // require("@/assets/items/broken-sword.png")
  price: Price;
  notes?: string;
  tags?: string[];
}
