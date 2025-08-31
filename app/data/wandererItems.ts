import type { DungeonItem } from "../../constants/types";

export const WANDERER_ITEMS: DungeonItem[] = [
  { id: "ancient-sacred-volume", name: "Ancient Sacred Volume", dungeon:"wanderer", category: "material", minPrice: 19883, rarity: "rare", floors: [1], notes: "Used in armour & weapon crafting",
  gearUsage: [
    { type: "armour", name: "Composite Armor Boots III", quantity: 2 },
    { type: "armour", name: "Composite Armor Chestplate III", quantity: 2 },
    { type: "weapon", name: "Ragnarok Big Sword III", quantity: 3 },
    { type: "weapon", name: "Runic Bow III", quantity: 3 }
  ] },

  { id: "bomb-detonator", name: "Bomb Detonator", dungeon:"wanderer", category: "material", minPrice: 8498, rarity: "uncommon", floors: [1] },

  { id: "bone-fragment", name: "Bone Fragment", dungeon:"wanderer", category: "material", minPrice: 2558, rarity: "common", floors: [1] },

  { id: "carbon-fiber-plate", name: "Carbon Fiber Plate", dungeon:"wanderer", category: "material", minPrice: 4703, rarity: "uncommon", floors: [1], notes: "Used in armour & weapon crafting",
  gearUsage: [
    { type: "armour", name: "Composite Armour Chestplate I", quantity: 2 },
    { type: "armour", name: "Composite Armour Chestplate II", quantity: 3 },
    { type: "armour", name: "Composite Armour Chestplate III", quantity: 3 },
    { type: "armour", name: "Composite Armour Chestplate IV", quantity: 4 },
    { type: "weapon", name: "Valkyrie Spear I", quantity: 2 },
    { type: "weapon", name: "Valkyrie Spear II", quantity: 3 },
    { type: "weapon", name: "Valkyrie Spear III", quantity: 3 },
    { type: "weapon", name: "Valkyrie Spear IV", quantity: 4 }
  ] },

  { id: "coins", name: "Coins", dungeon:"wanderer", category: "material", minPrice: 12540, rarity: "uncommon", floors: [1] },

  { id: "desert-lava-idol", name: "Desert Lava Idol", dungeon:"wanderer", category: "material", minPrice: 24007, rarity: "rare", floors: [1] },

  { id: "dimensional-garbage", name: "Dimensional Garbage", dungeon:"wanderer", category: "material", minPrice: 12540, rarity: "uncommon", floors: [1], notes: "Used in multiple armour and weapon crafts",
  gearUsage: [
    { type: "armour", name: "Composite Armour Boots I", quantity: 2 },
    { type: "armour", name: "Composite Armour Boots II", quantity: 3 },
    { type: "armour", name: "Composite Armour Boots III", quantity: 3 },
    { type: "armour", name: "Composite Armour Boots IV", quantity: 4 },
    { type: "armour", name: "Composite Armour Boots V", quantity: 4 },
    { type: "armour", name: "Composite Armour Chestplate I", quantity: 2 },
    { type: "armour", name: "Composite Armour Chestplate II", quantity: 3 },
    { type: "armour", name: "Composite Armour Helmet I", quantity: 2 },
    { type: "armour", name: "Composite Armour Helmet II", quantity: 3 },
    { type: "weapon", name: "Ether Sable I", quantity: 2 },
    { type: "weapon", name: "Ether Sable II", quantity: 3 },
    { type: "weapon", name: "Master Fists I", quantity: 2 },
    { type: "weapon", name: "Master Fists II", quantity: 3 },
    { type: "weapon", name: "Ragnarok Big Sword II", quantity: 3 },
    { type: "weapon", name: "Runic Bow II", quantity: 3 }
  ] },

  { id: "dimensional-fungus", name: "Dimensional Fungus", dungeon:"wanderer", category: "material", minPrice: 12540, rarity: "uncommon", floors: [1] },

  { id: "dimensional-res-mineral-ore", name: "Dimensional Res. Mineral Ore", dungeon:"wanderer", category: "material", minPrice: 12540, rarity: "uncommon", floors: [1], notes: "Used in armour & weapon crafting",
  gearUsage: [
    { type: "armour", name: "Composite Armour Boots I", quantity: 2 },
    { type: "armour", name: "Composite Armour Boots II", quantity: 3 },
    { type: "armour", name: "Composite Armour Chestplate II", quantity: 3 },
    { type: "weapon", name: "Ether Sable II", quantity: 3 },
    { type: "weapon", name: "Master Fists II", quantity: 3 },
    { type: "weapon", name: "Runic Bow II", quantity: 3 },
    { type: "weapon", name: "Valkyrie Spear I", quantity: 2 },
    { type: "weapon", name: "Valkyrie Spear II", quantity: 3 }
  ] },

  { id: "dimensional-resistant-metal", name: "Dimensional Resistant Metal", dungeon:"wanderer", category: "material", minPrice: 8498, rarity: "uncommon", floors: [1], notes: "Used in armour & weapon crafting",
  gearUsage: [
    { type: "armour", name: "Composite Armour Helmet I", quantity: 2 },
    { type: "armour", name: "Composite Armour Helmet II", quantity: 3 },
    { type: "armour", name: "Composite Armour Helmet III", quantity: 3 },
    { type: "armour", name: "Composite Armour Helmet IV", quantity: 4 },
    { type: "weapon", name: "Ether Sable I", quantity: 2 },
    { type: "weapon", name: "Ether Sable II", quantity: 3 },
    { type: "weapon", name: "Ether Sable IV", quantity: 4 },
    { type: "weapon", name: "Master Fists I", quantity: 2 },
    { type: "weapon", name: "Master Fists II", quantity: 3 },
    { type: "weapon", name: "Master Fists III", quantity: 3 },
    { type: "weapon", name: "Master Fists IV", quantity: 4 }
  ] },

  { id: "dimensional-resistant-glass", name: "Dimensional Resistant Glass", dungeon:"wanderer", category: "material", minPrice: 19883, rarity: "rare", floors: [1] },

  { id: "forest-wood-figure", name: "Forest Wood Figure", dungeon:"wanderer", category: "material", minPrice: 24007, rarity: "rare", floors: [1] },

  { id: "fossil-bone", name: "Fossil Bone", dungeon:"wanderer", category: "material", minPrice: 12540, rarity: "uncommon", floors: [1], notes: "Used in weapon crafting",
  gearUsage: [
    { type: "weapon", name: "Ragnarok Big Sword I", quantity: 2 },
    { type: "weapon", name: "Ragnarok Big Sword II", quantity: 3 },
    { type: "weapon", name: "Ragnarok Big Sword III", quantity: 3 },
    { type: "weapon", name: "Ragnarok Big Sword IV", quantity: 4 },
    { type: "weapon", name: "Runic Bow I", quantity: 2 },
    { type: "weapon", name: "Runic Bow II", quantity: 3 },
    { type: "weapon", name: "Runic Bow III", quantity: 3 },
    { type: "weapon", name: "Runic Bow IV", quantity: 4 }
  ] },

  { id: "golem-statue", name: "Golem Statue", dungeon:"wanderer", category: "material", minPrice: 24007, rarity: "rare", floors: [1] },

  { id: "heavy-metal-plates", name: "Heavy Metal Plates", dungeon:"wanderer", category: "material", minPrice: 4703, rarity: "uncommon", floors: [1], notes: "Used in weapon crafting",
  gearUsage: [
    { type: "weapon", name: "Ragnarok Big Sword I", quantity: 2 },
    { type: "weapon", name: "Ragnarok Big Sword II", quantity: 3 },
    { type: "weapon", name: "Ragnarok Big Sword III", quantity: 3 },
    { type: "weapon", name: "Ragnarok Big Sword IV", quantity: 4 }
  ] },

  { id: "jewels", name: "Jewels", dungeon:"wanderer", category: "material", minPrice: 19883, rarity: "rare", floors: [1],  notes: "Used in weapon crafting",
  gearUsage: [
    { type: "weapon", name: "Valkyrie Spear III", quantity: 3 }
  ] },

  { id: "monster-skull", name: "Monster Skull", dungeon:"wanderer", category: "material", minPrice: 2558, rarity: "common", floors: [1] },

  { id: "plastic-cloth", name: "Plastic Cloth", dungeon:"wanderer", category: "material", minPrice: 4703, rarity: "uncommon", floors: [1] },

  { id: "small-spectral-flame", name: "Small Spectral Flame", dungeon:"wanderer", category: "material", minPrice: 4703, rarity: "uncommon", floors: [1], notes: "Used in weapon crafting",
  gearUsage: [
    { type: "weapon", name: "Runic Bow I", quantity: 2 },
    { type: "weapon", name: "Runic Bow II", quantity: 3 },
    { type: "weapon", name: "Runic Bow III", quantity: 3 },
    { type: "weapon", name: "Runic Bow IV", quantity: 4 }
  ] },

  { id: "toxic-liquid", name: "Toxic Liquid", dungeon:"wanderer", category: "material", minPrice: 2558, rarity: "common", floors: [1] },

  { id: "tech-recycled-metal-ball", name: "Tech Recycled Metal Ball", dungeon:"wanderer", category: "material", minPrice: 24007, rarity: "rare", floors: [1] },
];
