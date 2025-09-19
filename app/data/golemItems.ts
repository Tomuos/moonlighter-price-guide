import type { DungeonItem } from "../../constants/types";


export const GOLEM_ITEMS: DungeonItem[] = [
  // --- Low-value mats ---
  { id: "iron-bar", name: "Iron Bar", dungeon: "golem",  category: "material", rarity: "common", floors: [1,2,3], minPrice: 28, popularPrice: 34, notes: "Upgrade material" },
  { id: "root", name: "Root", dungeon: "golem" ,category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7, notes:"scrap with magic mirror in menu" },
  { id: "rich-jelly", name: "Rich Jelly", dungeon: "golem",  category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7, notes:"Eris can brew you potions with this", brewUsage: [
  { type: "potion", name: "HP Potion I",  gold: 125 },                       // Rich Jelly implied
  { type: "potion", name: "HP Potion II", gold: 800, requires: ["Venom Jelly"] },
  { type: "potion", name: "HP Potion III", gold: 3000, requires: ["Fire Jelly"] },
  { type: "potion", name: "HP Potion IV", gold: 8000, requires: ["Electric Jelly"] },
]
 },
  { id: "teethstone", name: "Teethstone", dungeon: "golem",  category: "material", rarity: "common", floors: [1,2,3], minPrice: 6,  popularPrice: 7,  notes: "Used in weapon crafting", gearUsage:[
    { type: "weapon", name: "Sword I", quantity: 2 },
    { type: "weapon", name: "Greatsword I", quantity: 2 },
    { type: "weapon", name: "Spear I", quantity: 2 },
    { type: "weapon", name: "Sword & Shield I", quantity: 1 }
  ] },

  { id: "vine", name: "Vine", dungeon: "golem",  category: "material", rarity: "common", floors: [1,2,3], minPrice: 3,  popularPrice: 3,  notes: "Used in weapon crafting", gearUsage: [
    { type: "weapon", name: "Sword I",            quantity: 3 },
    { type: "weapon", name: "Greatsword I",       quantity: 3 },
    { type: "weapon", name: "Spear I",            quantity: 2 },
    { type: "weapon", name: "Bow I",              quantity: 3 },
    { type: "weapon", name: "Gloves I",           quantity: 2 },
    { type: "weapon", name: "Sword & Shield I",   quantity: 3 },
  ] },

  { id: "whetstone", name: "Whetstone", dungeon: "golem",  category: "material", rarity: "common", floors: [1,2,3], minPrice: 17, popularPrice: 21, notes: "Used in weapon crafting",gearUsage: [
    { type: "weapon", name: "Sword II",           quantity: 2 },
    { type: "weapon", name: "Greatsword II",      quantity: 2 },
    { type: "weapon", name: "Spear II",           quantity: 2 },
    { type: "weapon", name: "Bow II",             quantity: 2 },
    { type: "weapon", name: "Gloves II",          quantity: 2 },
    { type: "weapon", name: "Sword & Shield II",  quantity: 2 },
  ] },

  // --- Early/mid mats (≈80–330) ---
  { id: "ancient-pot", name: "Ancient Pot", dungeon: "golem",  category: "artifact", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "crystal-rock", name: "Crystal Rock", dungeon: "golem",  category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 83,  popularPrice: 102 },
  { id: "crystallized-energy", name: "Crystallized Energy", dungeon: "golem",  category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "empowering-crystal", name: "Empowering Crystal", dungeon: "golem",  category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110,  popularPrice: 135, notes: "Used in armour & weapon crafting",  enchantUsage: [
    { target: "Weapon Enchant I", qtyMin: 3, qtyMax: 5, icon: "enchant-weapon-1" },
    { target: "Armor Enchant I",  qtyMin: 3, qtyMax: 5, icon: "enchant-armor-1" },
    { target: "Weapon Enchant II", qtyMin: 5, qtyMax: 8, icon: "enchant-weapon-2" },
    { target: "Armor Enchant II",  qtyMin: 5, qtyMax: 8, icon: "enchant-armor-2" },
  ], },

  { id: "glass-lenses", name: "Glass Lenses", dungeon: "golem",  category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135 },
  { id: "golem-core", name: "Golem Core", dungeon: "golem",  category: "core", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135, notes: "Early upgrade staple. Consider keeping a few." ,gearUsage: [
    { type: "weapon", name: "Sword I",            quantity: 2 },
    { type: "weapon", name: "Greatsword I",       quantity: 2 },
    { type: "weapon", name: "Spear I",            quantity: 2 },
    { type: "weapon", name: "Bow I",              quantity: 2 },
    { type: "weapon", name: "Gloves I",           quantity: 2 },
    { type: "weapon", name: "Sword & Shield I",   quantity: 2 },
    { type: "armour",  name: "Fabric Armor I",     quantity: 1 },
    { type: "armour",  name: "Fabric Boots I",     quantity: 1 },
  ] },
  { id: "water-sphere", name: "Water Sphere", dungeon: "golem",  category: "material", rarity: "uncommon", floors: [1,2,3], minPrice: 110, popularPrice: 135, notes: "Upgrade material", gearUsage: [
    { type: "weapon", name: "Spear I",            quantity: 1 },
    { type: "weapon", name: "Bow I",              quantity: 1 },
    { type: "armour",  name: "Fabric Armor I",     quantity: 1 },
  ] },

  { id: "broken-sword", name: "Broken Sword", dungeon: "golem",  category: "material", rarity: "rare", floors: [1,2,3], minPrice: 165, popularPrice: 203, notes: "Upgrade material" , gearUsage: [
    { type: "weapon", name: "Sword I", quantity: 1 },
    { type: "weapon", name: "Greatsword I", quantity: 2 },
    { type: "weapon", name: "Spear I", quantity: 1 },
    { type: "weapon", name: "Sword & Shield I", quantity: 1 }
  ]},

  { id: "foundry-rests", name: "Foundry Rests", dungeon: "golem",  category: "artifact", rarity: "rare", floors: [1,2,3], minPrice: 165, popularPrice: 203, notes: "Upgrade material", gearUsage: [
    { type: "weapon", name: "Sword II",           quantity: 1 },
    { type: "weapon", name: "Greatsword II",      quantity: 2 },
    { type: "weapon", name: "Spear II",           quantity: 1 },
    { type: "weapon", name: "Sword & Shield II",  quantity: 1 },
    { type: "weapon", name: "Bow II",             quantity: 1 },
    { type: "weapon", name: "Gloves II",          quantity: 1 },
  ] },

  { id: "fabric", name: "Fabric", dungeon: "golem",  category: "material", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338, notes: "Upgrade material", gearUsage: [
    { type: "armour", name: "Fabric Bandana", quantity: 2 },
    { type: "armour", name: "Fabric Chestplate", quantity: 4 },
    { type: "armour", name: "Fabric Boots", quantity: 2 }
  ] },

  { id: "water-lamp", name: "Water Lamp", dungeon: "golem",  category: "artifact", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338 },
  { id: "white-stone", name: "White Stone", dungeon: "golem", category: "material", rarity: "rare", floors: [1,2,3], minPrice: 275, popularPrice: 338 },

  { id: "gold-runes", name: "Gold Runes", dungeon: "golem",  category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 330, popularPrice: 405 },
  { id: "hardened-steel", name: "Hardened Steel", dungeon: "golem",  category: "material", rarity: "epic", floors: [1,2,3], minPrice: 330, popularPrice: 405, notes: "Upgrade material", gearUsage: [
    { type: "weapon", name: "Sword III",           quantity: 2 },
    { type: "weapon", name: "Greatsword III",      quantity: 3 },
    { type: "weapon", name: "Spear III",           quantity: 2 },
    { type: "weapon", name: "Sword & Shield III",  quantity: 2 },
    { type: "weapon", name: "Bow III",             quantity: 2 },
    { type: "weapon", name: "Gloves III",          quantity: 2 },
  ] },

  // --- Mid/high artifacts (≥440) ---
  { id: "old-golem-minion-design", name: "Old Golem Minion Design", dungeon: "golem",  category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 440, popularPrice: 540 },
  { id: "golem-volume", name: "Golem Volume", dungeon: "golem",  category: "artifact", rarity: "epic", floors: [1,2,3], minPrice: 440, popularPrice: 540 },
  { id: "golem-chisel", name: "Golem Chisel", dungeon: "golem", category: "material", rarity: "epic", floors: [1,2,3], minPrice: 550, popularPrice: 675, notes: "Upgrade material", gearUsage: [
    { type: "weapon", name: "Sword III",           quantity: 1 },
    { type: "weapon", name: "Greatsword III",      quantity: 1 },
    { type: "weapon", name: "Spear III",           quantity: 1 },
    { type: "weapon", name: "Sword & Shield III",  quantity: 1 },
  ] },

  // --- High-tier scrolls/blueprints (≥1650) ---
  { id: "golem-designs-i", name: "Golem Designs I", dungeon: "golem",  category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "golem-designs-ii", name: "Golem Designs II", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "golem-designs-iii", name: "Golem Designs III", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025 },
  { id: "rune-tool", name: "Rune Tool", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 1650, popularPrice: 2025, notes: "Upgrade material", gearUsage: [
    { type: "weapon", name: "Sword IV",           quantity: 1 },
    { type: "weapon", name: "Greatsword IV",      quantity: 2 },
    { type: "weapon", name: "Spear IV",           quantity: 1 },
    { type: "weapon", name: "Sword & Shield IV",  quantity: 1 },
    { type: "weapon", name: "Bow IV",             quantity: 1 },
    { type: "weapon", name: "Gloves IV",          quantity: 1 },
  ] },

  // --- Lore/history (≥2750) ---
  { id: "golem-history-i", name: "Golem History I", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-history-ii", name: "Golem History II", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-history-iii", name: "Golem History III", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-king-jottings", name: "Golem King Jottings", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
  { id: "golem-king-energy-crystal", name: "Golem King Energy Crystal", dungeon: "golem", category: "artifact", rarity: "legendary", floors: [1,2,3], minPrice: 2750, popularPrice: 3375 },
];
