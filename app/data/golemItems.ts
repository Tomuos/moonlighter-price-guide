import type { DungeonItem } from "../../constants/types";

export const GOLEM_ITEMS: DungeonItem[] = [
  // --- Low-value mats ---
  { id: "vine", name: "Vine", category: "material", rarity: "common", floors: [1,2,3], minPrice: 3,  popularPrice: 3,  notes: "Upgrade material", },
  { id: "root", name: "Root", category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7, notes:"scrap with magic mirror in menu" },
  { id: "rich-jelly", name: "Rich Jelly", category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7, notes:"scrap with magic mirror in menu" },
  { id: "teethstone", name: "Teethstone", category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7,  notes: "Upgrade material" },
  { id: "whetstone", name: "Whetstone", category: "material", rarity: "common", floors: [1,2,3], minPrice: 17, popularPrice: 21, notes: "Upgrade material" },
  { id: "iron-bar", name: "Iron Bar", category: "material", rarity: "common", floors: [1,2,3], minPrice: 28, popularPrice: 34, notes: "Upgrade material" },

  // --- Early/mid mats (≈80–330) ---
  { id: "crystal-rock", name: "Crystal Rock", category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 83,  popularPrice: 102 },
  { id: "ancient-pot", name: "Ancient Pot", category: "artifact", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "crystallized-energy", name: "Crystallized Energy", category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "glass-lenses", name: "Glass Lenses", category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "golem-core", name: "Golem Core", category: "core", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135, notes: "Early upgrade staple. Consider keeping a few." },
  { id: "water-sphere", name: "Water Sphere", category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135, notes: "Upgrade material" },

  { id: "broken-sword", name: "Broken Sword", category: "material", rarity: "rare", floors: [1,2,3], minPrice: 165, popularPrice: 203, notes: "Upgrade material" , gearUsage: [
    { type: "weapon", name: "Sword I", quantity: 1 },
    { type: "weapon", name: "Greatsword I", quantity: 2 },
    { type: "weapon", name: "Spear I", quantity: 1 },
    { type: "weapon", name: "Sword & Shield I", quantity: 1 }
  ]},
  { id: "foundry-rests", name: "Foundry Rests", category: "artifact", rarity: "rare", floors: [1,2,3], minPrice: 165, popularPrice: 203, notes: "Upgrade material" },
  { id: "fabric", name: "Fabric", category: "material", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338, notes: "Upgrade material", gearUsage: [
    { type: "armour", name: "Fabric Bandana", quantity: 2 },
    { type: "armour", name: "Fabric Chestplate", quantity: 4 },
    { type: "armour", name: "Fabric Boots", quantity: 2 }
  ] },
  { id: "water-lamp", name: "Water Lamp", category: "artifact", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338 },
  { id: "white-stone", name: "White Stone", category: "material", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338 },

  { id: "gold-runes", name: "Gold Runes", category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 330, popularPrice: 405 },
  { id: "hardened-steel", name: "Hardened Steel", category: "material", rarity: "epic", floors: [1,2,3], minPrice: 330, popularPrice: 405, notes: "Upgrade material" },

  // --- Mid/high artifacts (≥440) ---
  { id: "old-golem-minion-design", name: "Old Golem Minion Design", category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 440, popularPrice: 540 },
  { id: "golem-volume", name: "Golem Volume", category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 440, popularPrice: 540 },
  { id: "golem-chisel", name: "Golem Chisel", category: "material", rarity: "epic", floors: [1,2,3], minPrice: 550, popularPrice: 675, notes: "Upgrade material" },

  // --- High-tier scrolls/blueprints (≥1650) ---
  { id: "golem-designs-i", name: "Golem Designs I", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "golem-designs-ii", name: "Golem Designs II", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "golem-designs-iii", name: "Golem Designs III", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "rune-tool", name: "Rune Tool", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025, notes: "Upgrade material" },

  // --- Lore/history (≥2750) ---
  { id: "golem-history-i", name: "Golem History I", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-history-ii", name: "Golem History II", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-history-iii", name: "Golem History III", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-king-jottings", name: "Golem King Jottings", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-king-energy-crystal", name: "Golem King Energy Crystal", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
];
