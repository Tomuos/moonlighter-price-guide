import type { ImageSourcePropType } from "react-native";

export type DungeonId = |"golem" | "forest" | "desert" | "tech" | "wanderer";

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

export type GearUsage = {
  type: "weapon" | "armour";
  name: string;
  quantity: number;
};

export type EnchantUsage = {
  target: string;                 // e.g. "Weapon Enchant I"
  qtyMin: number;                 // e.g. 3
  qtyMax?: number;                // e.g. 5 (omit if fixed)
  gold?: number;                  // optional extra cost
  icon?: string;                  // optional icon uri or name
};

export type DungeonItem = {
  id: string;
  name: string;
  image?: string;        
  category: "material" | "artifact" | "core" | "special";
  floors: number[];      
  minPrice: number;
  popularPrice?: number;
  rarity: string;        // 👈 new
  notes?: string;
  gearUsage?: GearUsage[];
  enchantUsage?: EnchantUsage[];
};