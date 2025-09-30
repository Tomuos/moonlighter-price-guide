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
export type GearId = "weapons" | "armour" | "amulets" | "merchant"; // rings → amulets
export type GearTier = 0 | 1 | 2 | 3 | 4 | 5;
export type PlusTier = "+" | "++" | "+++";

/** ---------- Weapons ---------- */
export type WeaponStats = {
  base: number;
  enchant?: { "+": number; "++": number; "+++": number }; // optional 3-tier damage values
  special?: "Stun" | "Poison" | "Burn" | "Shock" | "Top" | "Fire";
};

/** ---------- Armour ---------- */
export type ArmourStatKey = "health" | "speed" | "defense";

export type ArmourStatBlock = {
  health?: number;
  speed?: number;
  defense?: number;
};

/** Optional future support for I/II/III ( + / ++ / +++ ) totals */
export type ArmourEnchantTiers = Record<PlusTier, ArmourStatBlock>;

export type ArmourStats = {
  /** Level I totals (what you’d show on the badge) */
  base: ArmourStatBlock;
  /** Totals at each enchant step (optional if you add +/++/+++ later) */
  enchant?: ArmourEnchantTiers;
};

/** Single-line armour enchant (what you asked for now) */
export type ArmourEnchant = {
  /** Either structured numbers (we’ll render "+15 Defense · +10 Health") or override via text */
  bonus: ArmourStatBlock & { text?: string };
  gold?: number;
  cost?: MaterialLine[];
};

/** ---------- Materials / Recipes / Upgrades ---------- */
export type MaterialLine = {
  /** Prefer one identifier; both supported to fit your current data */
  itemId?: string;
  itemName?: string;
  quantity: number;
  /** Alternatives: any of these item names can satisfy the line */
  altItems?: string[];
};

export type BlacksmithRecipe = {
  materials: MaterialLine[];
  gold: number;
};

export type WeaponEnchantLevels = Record<string, number>; // e.g. { "+": 692, "++": 764, "+++": 837 }

// keep your existing MaterialLine type as-is

export type EnchantmentTier = {
  tier?: number;
  bonus: string;
  gold?: number;
  cost?: MaterialLine[];
  // ⬇️ NEW: per-enchant damage numbers for + / ++ / +++
  weaponStats?: {
    enchant?: WeaponEnchantLevels;
    // (optional) if you ever want to add base/special per tier:
    base?: number;
    special?: string;
  };
};

/** Optional per-upgrade step for armour/amulets/weapons */
export type GearUpgrade = {
  tier: GearTier;
  cost?: number;                // legacy/simple “gold” shorthand
  materials?: MaterialLine[];   // preferred
  effects?: string[];
};

/** ---------- Base & Specialised Gear Items (Discriminated Union) ---------- */
export type GearSlot = "helmet" | "chestplate" | "boots";

interface BaseGear {
  id: string;
  name: string;
  kind: GearId;
  image?: ImageSourcePropType;
  slot?: string;                 // weapons/amulets can leave this loose (e.g., "bow", "ring")
  tier?: GearTier;
  craftedAt?: string;
  source?: string;
  summary?: string;
  notes?: string;

  /** Crafting / Upgrading (shared) */
  recipe?: BlacksmithRecipe;
  craftCost?: number;            // optional shorthand if you’re not using recipe.gold
  upgradeCost?: number;
  upgrades?: GearUpgrade[];

  /** Misc effects (badges, etc.) */
  effects?: string[];

  /** Sorting helper */
  setOrder?: number;
}

export interface WeaponItem extends BaseGear {
  kind: "weapons";
  baseDamage?: number;
  weaponStats?: WeaponStats;
  /** Dropdown tiers (auto-generated from weaponStats.enchant or explicitly provided) */
  enchantments?: EnchantmentTier[];
}

export interface ArmourGearItem extends BaseGear {
  kind: "armour";
  /** Lock to armour slots for stronger typing */
  slot: GearSlot;
  /** Structured base stats (+ optional future tiers) */
  armourStats: ArmourStats;
  /** Single-line enchant you wanted right now */
  armourEnchant?: ArmourEnchant;
}

export interface AmuletItem extends BaseGear {
  kind: "amulets";
  // Add amulet-specific fields later if needed
}

export interface MerchantItem extends BaseGear {
  id: string;
  name: string;
  kind: "merchant";
  category?: "potion" | "dlc" | "broken" | "misc";
  hpRestore?: number | "full";
  potionRecipe?: PotionRecipe;


  buyPrice?: number;   // gold cost to buy directly
  sellPrice?: number;  // gold you get for selling
  popularPrice?: number,
  recipeId?: string;
}



/** Use this everywhere your code expects “a gear item”. */
export type GearItem = WeaponItem | ArmourGearItem | AmuletItem | MerchantItem;

export type PotionRecipe = {
  gold: number;
  cost: MaterialLine[];
};






