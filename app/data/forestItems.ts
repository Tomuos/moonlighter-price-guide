import type { DungeonItem } from "../../constants/types";

export const FOREST_ITEMS: DungeonItem[] = [
  { id: "magic-mushroom",  name: "Magic Mushroom",  dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },
  { id: "plant-flesh",     name: "Plant Flesh",     dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },
  { id: "venomous-spores", name: "Venomous Spores", dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },

  { id: "magic-wood",      name: "Magic Wood",      dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 110, popularPrice: 135, rarity: "uncommon", notes: "Used for gear upgrades (armour)" ,gearUsage: [
    { type: "armour", name: "Forest Bandana I",   quantity: 2 },
    { type: "armour", name: "Forest Chestplate I", quantity: 4 },
    { type: "armour", name: "Forest Boots I",     quantity: 2 }
  ]},

  { id: "petals",          name: "Petals",          dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 110, popularPrice: 135, rarity: "uncommon" },

  { id: "blade-leaves",    name: "Blade Leaves",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 330, popularPrice: 405, rarity: "uncommon" },

  { id: "life-fluid",      name: "Life Fluid",      dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare" },
  { id: "light-essence",   name: "Light Essence",   dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare" },
  { id: "pure-acid",       name: "Pure Acid",       dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare", notes: "Used for gear upgrades (weapons)", gearUsage: [
    { type: "weapon", name: "Sword II",          quantity: 2 },
    { type: "weapon", name: "Greatsword II",     quantity: 3 },
    { type: "weapon", name: "Spear II",          quantity: 2 },
    { type: "weapon", name: "Sword & Shield II", quantity: 2 },
    { type: "weapon", name: "Bow II",            quantity: 2 },
    { type: "weapon", name: "Gloves II",         quantity: 2 },
  ] },

  { id: "strong-leaves",   name: "Strong Leaves",   dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare", notes: "Used for gear upgrades (armour)", gearUsage: [
    { type: "armour", name: "Forest Bandana II",    quantity: 2 },
    { type: "armour", name: "Forest Chestplate II", quantity: 4 },
    { type: "armour", name: "Forest Boots II",      quantity: 2 }
  ] },

  { id: "straw",           name: "Straw",           dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 550, popularPrice: 675, rarity: "rare", notes: "Used for gear upgrades (armour)", gearUsage: [
    { type: "armour", name: "Forest Bandana III",    quantity: 2 },
    { type: "armour", name: "Forest Chestplate III", quantity: 4 },
    { type: "armour", name: "Forest Boots III",      quantity: 2 }
  ] },

  { id: "preserved-root",  name: "Preserved Root",  dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 660, popularPrice: 810, rarity: "rare", notes: "Used for gear upgrades (armour)",gearUsage: [
    { type: "armour", name: "Forest Bandana IV",    quantity: 2 },
    { type: "armour", name: "Forest Chestplate IV", quantity: 4 },
    { type: "armour", name: "Forest Boots IV",      quantity: 2 }
  ] },

  { id: "modified-seeds",  name: "Modified Seeds",  dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 935, popularPrice: 1148, rarity: "epic" },

  { id: "ancient-wood",    name: "Ancient Wood",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic", notes: "Used for gear upgrades",  gearUsage: [
    // Weapons III
    { type: "weapon", name: "Sword III",          quantity: 2 },
    { type: "weapon", name: "Greatsword III",     quantity: 3 },
    { type: "weapon", name: "Spear III",          quantity: 2 },
    { type: "weapon", name: "Sword & Shield III", quantity: 2 },
    { type: "weapon", name: "Bow III",            quantity: 2 },
    { type: "weapon", name: "Gloves III",         quantity: 2 },

    // Armour III
    { type: "armour", name: "Forest Bandana III",    quantity: 2 },
    { type: "armour", name: "Forest Chestplate III", quantity: 4 },
    { type: "armour", name: "Forest Boots III",      quantity: 2 }
  ] },
  { id: "fertile-soil",    name: "Fertile Soil",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic" },
  { id: "fertilizer",      name: "Fertilizer",      dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic" },

  { id: "fluid-vessel",    name: "Fluid Vessel",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1705, popularPrice: 2093, rarity: "epic" },
  { id: "nutritive-water", name: "Nutritive Water", dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1925, popularPrice: 2363, rarity: "epic" },
  { id: "forest-fruits",   name: "Forest Fruits",   dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 1980, popularPrice: 2430, rarity: "epic" },

  { id: "botany-jottings-i",   name: "Botany Jottings I",   dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },
  { id: "botany-jottings-ii",  name: "Botany Jottings II",  dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },
  { id: "botany-jottings-iii", name: "Botany Jottings III", dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },

  { id: "old-bulb",        name: "Old Bulb",        dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "legendary", notes: "Used for gear upgrades",gearUsage: [
    // Weapons IV
    { type: "weapon", name: "Sword IV",          quantity: 2 },
    { type: "weapon", name: "Greatsword IV",     quantity: 3 },
    { type: "weapon", name: "Spear IV",          quantity: 2 },
    { type: "weapon", name: "Sword & Shield IV", quantity: 2 },
    { type: "weapon", name: "Bow IV",            quantity: 2 },
    { type: "weapon", name: "Gloves IV",         quantity: 2 },

    // Armour IV
    { type: "armour", name: "Forest Bandana IV",    quantity: 2 },
    { type: "armour", name: "Forest Chestplate IV", quantity: 4 },
    { type: "armour", name: "Forest Boots IV",      quantity: 2 }
  ] },
  { id: "speed-powder",    name: "Speed Powder",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "legendary" },

  { id: "carnivorous-mutae-jottings", name: "Carnivorous Mutae Jottings", dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "carnivorous-mutae-seeds",    name: "Carnivorous Mutae Seeds",    dungeon: "forest", category: "material", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },

  { id: "forest-history-i",   name: "Forest History I",   dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "forest-history-ii",  name: "Forest History II",  dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "forest-history-iii", name: "Forest History III", dungeon: "forest", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
];