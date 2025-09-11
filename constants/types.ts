import type { ImageSourcePropType } from "react-native";

export type DungeonId = |"golem" | "forest" | "desert" | "tech" | "wanderer";

export type DungeonItem = {
  id: string;
  name: string;
  image?: any;    
  dungeon: DungeonId; 
  category: "material" | "artifact" | "core" | "special";
  floors: number[];      
  minPrice: number;
  popularPrice?: number;
  rarity: string;        // 👈 new
  notes?: string;
  gearUsage?: GearUsage[];
  enchantUsage?: EnchantUsage[];
  brewUsage?: BrewUsage[];
};
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

export type BrewUsage = {
  type: "potion";
  name: string;
  quantity?: number;
  gold?: number;
  icon?: string;
  requires?: string[];
};

/** ---------------------------
 *          GEAR
 *  -------------------------- */
export type GearId = "weapons" | "armour" | "amulets";

export type GearTier = 0 | 1 | 2 | 3 | 4;

export interface WeaponStats {
  base: number;
  enchant: { "+": number; "++": number; "+++": number };
  /** e.g., "Stun", "Poison", "Burn", "Shock" */
  special?: string;
}

export type MaterialLine = {
  itemName: string;
  quantity: number;
  altItems?: string[]; // optional alternates
};

export type GearUpgrade = {
  tier: GearTier;            // the tier you’re upgrading TO
  cost?: number;             // gold
  materials?: MaterialLine[];// required items
  effects?: string[];        // e.g. "+10% dmg"
};


export interface GearItem {
  id: string;
  name: string;
  kind: GearId;              // "weapons"
  image?: ImageSourcePropType;
  slot?: string;               // e.g., "short-sword"
  tier?: GearTier;             // 0..4
  craftedAt?: string;
  summary?: string;
  notes?: string;

  craftCost?: number;
  upgradeCost?: number;

  recipe?: MaterialLine[];
  effects?: string[];
  upgrades?: GearUpgrade[];

  /** NEW (optional for weapons) */
  weaponStats?: WeaponStats;
};