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

export type ArmourStatKey = "health" | "speed" | "defense";

export type PlusTier = "+" | "++" | "+++";

export type ArmourStatBlock = {
  health?: number;
  speed?: number;
  defense?: number;
};

export type ArmourEnchantTiers = Record<PlusTier, ArmourStatBlock>;

export type ArmourStats = {
  /** Level I totals (what you’d show on the badge) */
  base: ArmourStatBlock;

  /** Totals at each enchant step (optional if some pieces don’t enchant) */
  enchant?: ArmourEnchantTiers;
};

export type ArmourEnchant = {
  bonus: ArmourStatBlock;     // { defense: 15 }
  gold: number;
  cost: MaterialLine[];
};



export type MaterialLine = {
  itemId?: string;       
  itemName?: string;    
  quantity: number;
  altItems?: string[];
};


/** Optional per-upgrade step for armour/amulets/weapons */
export type GearUpgrade = {
  tier: GearTier;
  cost?: number;
  materials?: MaterialLine[];
  effects?: string[];
};

/** Use MaterialLine to avoid an undefined MaterialRef */
export type BlacksmithRecipe = {
  materials: MaterialLine[];
  gold: number;
};

/** For an “Enchantments” dropdown list (independent of WeaponStats.enchant) */
export type EnchantmentTier = {
  tier: number;            
  bonus: string;           
  gold?: number;           
  cost?: MaterialLine[];   
};

export interface GearItem {
  id: string;
  name: string;
  kind: GearId;
  image?: ImageSourcePropType;
  slot?: string;
  tier?: GearTier;
  craftedAt?: string;
  source?: string;
  summary?: string;
  notes?: string;

  /** Weapons */
  baseDamage?: number;
  weaponStats?: WeaponStats;
  enchantments?: EnchantmentTier[];

  /** Crafting / Upgrading */
  recipe?: BlacksmithRecipe;
  craftCost?: number;
  upgradeCost?: number;
  upgrades?: GearUpgrade[];

  /** Misc effects (badges, etc.) */
  effects?: string[];
  
  // setting up the items by type order
   setOrder?: number;
  /** Armour (NEW structured block) */
  armourStats?: ArmourStats;

}

export type GearSlot = "helmet" | "chestplate" | "boots";

export interface ArmourItem {
  id: string;         
  name: string;       
  kind: "armour";     
  slot: GearSlot;     
  tier: number;       
  health: number;     
  speed?: number;     
  defense?: number;   
  summary?: string;   
}
