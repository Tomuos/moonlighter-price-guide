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
export type GearId = "weapons" | "armour" | "amulets"; // rings → amulets

export type GearTier = 0 | 1 | 2 | 3 | 4 | 5;


export type WeaponStats = {
  base: number;
  enchant?: { "+": number; "++": number; "+++": number }; // <- optional now
  special?: string;
};




export type MaterialLine = {
  itemId?: string;       
  itemName?: string;    
  quantity: number;
  altItems?: string[];
};


/** Optional per-upgrade step for armour/amulets/weapons */
export type GearUpgrade = {
  /** the tier you’re upgrading TO */
  tier: GearTier;
  /** gold */
  cost?: number;
  /** required items */
  materials?: MaterialLine[];
  /** e.g. "+10% dmg" */
  effects?: string[];
};

/** Use MaterialLine to avoid an undefined MaterialRef */
export type BlacksmithRecipe = {
  materials: MaterialLine[];
  gold: number;
};

/** For an “Enchantments” dropdown list (independent of WeaponStats.enchant) */
export type EnchantmentTier = {
  tier: number;            // 1..N (works for I–V upgrades too)
  bonus: string;           // e.g. "Level II · Damage 960"
  gold?: number;           // optional per-level gold cost
  cost?: MaterialLine[];   // optional per-level materials
};

export interface GearItem {
  id: string;
  name: string;
  kind: GearId;                // "weapons" | "armour" | "amulets"
  image?: ImageSourcePropType;
  slot?: string;               // e.g., "short-sword"
  tier?: GearTier;             // 0..4
  craftedAt?: string;
  summary?: string;
  notes?: string;

  /** Weapons */
  baseDamage?: number;         // shown on main card
  weaponStats?: WeaponStats;   // quick +/++/+++ numbers (optional)
  enchantments?: EnchantmentTier[]; // for the dropdown (optional)

  /** Crafting / Upgrading */
  recipe?: BlacksmithRecipe;   // blacksmith recipe (dropdown)
  craftCost?: number;
  upgradeCost?: number;
  upgrades?: GearUpgrade[];

  /** Misc effects (badges, etc.) */
  effects?: string[];

  
};