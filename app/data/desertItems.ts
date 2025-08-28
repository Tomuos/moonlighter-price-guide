import type { DungeonItem } from "../../constants/types";

export const DESERT_ITEMS: DungeonItem[] = [
  { id: "chilled-lava", name: "Chilled Lava", dungeon:"desert", category: "material", minPrice: 2000, popularPrice: 2750, rarity: "rare", floors: [1,2,3] },

  { id: "cloth-dye", name: "Cloth Dye", dungeon:"desert", category: "material", minPrice: 2400, popularPrice: 3025, rarity: "uncommon", floors: [1,2,3] },

  { id: "desert-history-1", name: "Desert History I", dungeon:"desert", category: "artifact", minPrice: 13200, popularPrice: 16500, rarity: "epic", floors: [1,2,3] },
  { id: "desert-history-2", name: "Desert History II", dungeon:"desert", category: "artifact", minPrice: 13200, popularPrice: 16500, rarity: "epic", floors: [1,2,3] },
  { id: "desert-history-3", name: "Desert History III", dungeon:"desert", category: "artifact", minPrice: 13200, popularPrice: 16500, rarity: "epic", floors: [1,2,3] },

  { id: "desert-rope", name: "Desert Rope", dungeon:"desert", category: "material", minPrice: 500, popularPrice: 525, rarity: "common", floors: [1,2,3], notes: "Crafting" },

  { id: "desert-steel-ingot", name: "Desert Steel Ingot", dungeon:"desert", category: "material", minPrice: 6600, popularPrice: 8250, rarity: "rare", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "armour", name: "Steel Helmet III", quantity: 1 },
    { type: "armour", name: "Steel Chestplate III", quantity: 1 },
    { type: "armour", name: "Steel Boots III", quantity: 1 },
    { type: "weapon", name: "Captain Gloves", quantity: 1 },
    { type: "weapon", name: "Commander Short Sword", quantity: 1 },
    { type: "weapon", name: "Hero’s Sword III", quantity: 1 },
    { type: "weapon", name: "Hero’s Bow III", quantity: 1 },
    { type: "weapon", name: "Monkey Spear", quantity: 1 },
    { type: "weapon", name: "Soldier Bow", quantity: 1 },
    { type: "weapon", name: "Vulcan Big Sword", quantity: 1 },
  ], },

  { id: "desert-steel-sheet", name: "Desert Steel Sheet", dungeon:"desert", category: "material", minPrice: 2200, popularPrice: 2750, rarity: "rare", floors: [1,2,3] },

  { id: "desert-stone", name: "Desert Stone", dungeon:"desert", category: "material", minPrice: 2375, popularPrice: 2970, rarity: "uncommon", floors: [1,2,3] },

  { id: "diamagnetic-sand", name: "Diamagnetic Sand", dungeon:"desert", category: "material", minPrice: 440, popularPrice: 550, rarity: "common", floors: [1,2,3] },

  { id: "fire-gem", name: "Fire Gem", dungeon:"desert", category: "material", minPrice: 1500, popularPrice: 1870, rarity: "rare", floors: [1,2,3], notes: "Crafting",  gearUsage: [
    { type: "weapon", name: "Reborn Short Sword", quantity: 4 },
  ], },

  { id: "fire-jelly", name: "Fire Jelly", dungeon:"desert", category: "material", minPrice: 80, popularPrice: 110, rarity: "common", floors: [1,2,3], notes: "From Merchant Culture" },

  { id: "fireproof-cloth", name: "Fireproof Cloth", dungeon:"desert", category: "material", minPrice: 1000, popularPrice: 1265, rarity: "uncommon", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "armour", name: "Tier IV Fabric Armor Set", quantity: 15 },
  ], },

  { id: "flammable-dust", name: "Flammable Dust", dungeon:"desert", category: "material", minPrice: 400, popularPrice: 440, rarity: "common", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "armour", name: "Tier IV Steel Armor Set", quantity: 8 },
  ], },

  { id: "fluid-conduct", name: "Fluid Conduct", dungeon:"desert", category: "material", minPrice: 3200, popularPrice: 4015, rarity: "rare", floors: [1,2,3] },

  { id: "high-levitation-core", name: "High Levitation Core", dungeon:"desert", category: "core", minPrice: 13200, popularPrice: 16500, rarity: "legendary", floors: [1,2,3] },

  { id: "inflammable-liquid", name: "Inflammable Liquid", dungeon:"desert", category: "material", minPrice: 4000, popularPrice: 4950, rarity: "rare", floors: [1,2,3] },

  { id: "insulating-dust", name: "Insulating Dust", dungeon:"desert", category: "material", minPrice: 1800, popularPrice: 2255, rarity: "uncommon", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "armour", name: "Tier IV Iron Armor Set", quantity: 6 },
  ], },

  { id: "magnetic-core", name: "Magnetic Core", dungeon:"desert", category: "core", minPrice: 300, popularPrice: 330, rarity: "uncommon", floors: [1,2,3] },

  { id: "magnetic-tool", name: "Magnetic Tool", dungeon:"desert", category: "material", minPrice: 6000, popularPrice: 7150, rarity: "rare", floors: [1,2,3] },

  { id: "magnetite", name: "Magnetite", dungeon:"desert", category: "material", minPrice: 700, popularPrice: 880, rarity: "uncommon", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "armour", name: "Tier IV Iron Armor Set", quantity: 12 },
  ], },

  { id: "naja-jottings", name: "Naja Jottings", dungeon:"desert", category: "artifact", minPrice: 13200, popularPrice: 16500, rarity: "epic", floors: [1,2,3] },

  { id: "resistant-glass", name: "Resistant Glass", dungeon:"desert", category: "material", minPrice: 3800, popularPrice: 4730, rarity: "rare", floors: [1,2,3] },

  { id: "soldering-iron", name: "Soldering Iron", dungeon:"desert", category: "material", minPrice: 4700, popularPrice: 5885, rarity: "rare", floors: [1,2,3] },

  { id: "thermo-magnetic-engine", name: "Thermo Magnetic Engine", dungeon:"desert", category: "material", minPrice: 8000, popularPrice: 10120, rarity: "epic", floors: [1,2,3], notes: "Crafting", gearUsage: [
    { type: "weapon", name: "Commander Short Sword", quantity: 3 },
    { type: "weapon", name: "Reborn Short Sword", quantity: 3 },
  ], },

  { id: "volcanic-stone", name: "Volcanic Stone", dungeon:"desert", category: "material", minPrice: 100, popularPrice: 110, rarity: "common", floors: [1,2,3] },
];
