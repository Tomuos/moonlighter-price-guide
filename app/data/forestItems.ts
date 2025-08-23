import type { DungeonItem } from "../../constants/types";

export const FOREST_ITEMS: DungeonItem[] = [
  { id: "magic-mushroom",  name: "Magic Mushroom",  category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },
  { id: "plant-flesh",     name: "Plant Flesh",     category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },
  { id: "venomous-spores", name: "Venomous Spores", category: "material", floors: [1,2,3], minPrice: 66,  popularPrice: 81,  rarity: "common" },

  { id: "magic-wood",      name: "Magic Wood",      category: "material", floors: [1,2,3], minPrice: 110, popularPrice: 135, rarity: "uncommon", notes: "Used for gear upgrades (armour)" },
  { id: "petals",          name: "Petals",          category: "material", floors: [1,2,3], minPrice: 110, popularPrice: 135, rarity: "uncommon" },

  { id: "blade-leaves",    name: "Blade Leaves",    category: "material", floors: [1,2,3], minPrice: 330, popularPrice: 405, rarity: "uncommon" },

  { id: "life-fluid",      name: "Life Fluid",      category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare" },
  { id: "light-essence",   name: "Light Essence",   category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare" },
  { id: "pure-acid",       name: "Pure Acid",       category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare", notes: "Used for gear upgrades (weapons)" },
  { id: "strong-leaves",   name: "Strong Leaves",   category: "material", floors: [1,2,3], minPrice: 440, popularPrice: 540, rarity: "rare", notes: "Used for gear upgrades (armour)" },

  { id: "straw",           name: "Straw",           category: "material", floors: [1,2,3], minPrice: 550, popularPrice: 675, rarity: "rare", notes: "Used for gear upgrades (armour)" },

  { id: "preserved-root",  name: "Preserved Root",  category: "material", floors: [1,2,3], minPrice: 660, popularPrice: 810, rarity: "rare", notes: "Used for gear upgrades (armour)" },

  { id: "modified-seeds",  name: "Modified Seeds",  category: "material", floors: [1,2,3], minPrice: 935, popularPrice: 1148, rarity: "epic" },

  { id: "ancient-wood",    name: "Ancient Wood",    category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic", notes: "Used for gear upgrades" },
  { id: "fertile-soil",    name: "Fertile Soil",    category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic" },
  { id: "fertilizer",      name: "Fertilizer",      category: "material", floors: [1,2,3], minPrice: 1100, popularPrice: 1350, rarity: "epic" },

  { id: "fluid-vessel",    name: "Fluid Vessel",    category: "material", floors: [1,2,3], minPrice: 1705, popularPrice: 2093, rarity: "epic" },
  { id: "nutritive-water", name: "Nutritive Water", category: "material", floors: [1,2,3], minPrice: 1925, popularPrice: 2363, rarity: "epic" },
  { id: "forest-fruits",   name: "Forest Fruits",   category: "material", floors: [1,2,3], minPrice: 1980, popularPrice: 2430, rarity: "epic" },

  { id: "botany-jottings-i",   name: "Botany Jottings I",   category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },
  { id: "botany-jottings-ii",  name: "Botany Jottings II",  category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },
  { id: "botany-jottings-iii", name: "Botany Jottings III", category: "artifact", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "rare" },

  { id: "old-bulb",        name: "Old Bulb",        category: "material", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "legendary", notes: "Used for gear upgrades" },
  { id: "speed-powder",    name: "Speed Powder",    category: "material", floors: [1,2,3], minPrice: 2200, popularPrice: 2700, rarity: "legendary" },

  { id: "carnivorous-mutae-jottings", name: "Carnivorous Mutae Jottings", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "carnivorous-mutae-seeds",    name: "Carnivorous Mutae Seeds",    category: "material", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },

  { id: "forest-history-i",   name: "Forest History I",   category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "forest-history-ii",  name: "Forest History II",  category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
  { id: "forest-history-iii", name: "Forest History III", category: "artifact", floors: [1,2,3], minPrice: 5500, popularPrice: 6750, rarity: "legendary" },
];