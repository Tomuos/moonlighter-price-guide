// app/data/recipes.ts
import type { MaterialLine } from "@/constants/types";

export const BLACKSMITH_RECIPES_BY_ID: Record<
  string,
  { gold: number; materials: MaterialLine[] }
> = {
    // --- Big Swords ---


  "training-big-sword": {
    gold: 1000, // training crafts usually cost gold + base mats
    materials: [
      { itemName: "Teethstone", quantity: 10 },
      { itemName: "Vine", quantity: 15 },
      { itemName: "Broken Sword", quantity: 5 },
    ],
  },

  "buster-big-sword": {
    gold: 4000,
    materials: [
      { itemName: "Training Big Sword", quantity: 1 },
      { itemName: "Hardened Steel", quantity: 5 },
      { itemName: "Rune Tool", quantity: 1 },
    ],
  },

  "rock-big-sword": {
    gold: 4000,
    materials: [
      { itemName: "Training Big Sword", quantity: 1 },
      { itemName: "Whetstone", quantity: 3 },
      { itemName: "Golem Chisel", quantity: 2 },
    ],
  },

  "wild-big-sword": {
    gold: 64000,
    materials: [
      { itemName: "Buster Big Sword", quantity: 1 },
      { itemName: "Ancient Wood", quantity: 2 },
      { itemName: "Old Bulb", quantity: 3 },
    ],
  },

  "toxic-big-sword": {
    gold: 64000,
    materials: [
      { itemName: "Rock Big Sword", quantity: 1 },
      { itemName: "Ancient Wood", quantity: 4 },
      { itemName: "Pure Acid", quantity: 2 },
    ],
  },

  "vulcan-big-sword": {
    gold: 256000,
    materials: [
      { itemName: "Wild Big Sword", quantity: 1 },
      { itemName: "Desert Steel Ingot", quantity: 8 },
      { itemName: "Thermo Magnetic Engine", quantity: 6 },
    ],
  },

  "blaze-big-sword": {
    gold: 256000,
    materials: [
      { itemName: "Toxic Big Sword", quantity: 1 },
      { itemName: "Fire Gem", quantity: 8 },
      { itemName: "Thermo Magnetic Engine", quantity: 6 },
    ],
  },

  "fusion-big-sword": {
    gold: 512000,
    materials: [
      { itemName: "Vulcan Big Sword", quantity: 1 },
      { itemName: "Copper Reel", quantity: 10 },
      { itemName: "Welding Gun", quantity: 4 },
    ],
  },

  "storm-big-sword": {
    gold: 512000,
    materials: [
      { itemName: "Blaze Big Sword", quantity: 1 },
      { itemName: "Triple Cell Battery", quantity: 10 },
      { itemName: "Conductor Metal", quantity: 4 },
    ],
  },

//   --- Bows ---

"training-bow": {
  gold: 1000,
  materials: [
    { itemName: "Foundry Rests", quantity: 4 },
    { itemName: "Iron Bar", quantity: 6 },
    { itemName: "Root", quantity: 10 },
  ],
},

"hunter-bow": {
  gold: 4000,
  materials: [
    { itemName: "Training Bow", quantity: 1 },
    { itemName: "Hardened Steel", quantity: 5 },
    { itemName: "Rune Tool", quantity: 1 },
  ],
},

"catapult-bow": {
  gold: 4000,
  materials: [
    { itemName: "Training Bow", quantity: 1 },
    { itemName: "Whetstone", quantity: 10 },
    { itemName: "Golem Chisel", quantity: 4 },
  ],
},

"natural-bow": {
  gold: 64000,
  materials: [
    { itemName: "Hunter Bow", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 3 },
    { itemName: "Old Bulb", quantity: 2 },
  ],
},

"poison-bow": {
  gold: 64000,
  materials: [
    { itemName: "Catapult Bow", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 4 },
    { itemName: "Pure Acid", quantity: 5 },
  ],
},

"soldier-bow": {
  gold: 256000,
  materials: [
    { itemName: "Natural Bow", quantity: 1 },
    { itemName: "Desert Steel Ingot", quantity: 2 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"flamethrower-bow": {
  gold: 256000,
  materials: [
    { itemName: "Poison Bow", quantity: 1 },
    { itemName: "Fire Gem", quantity: 4 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"exeter-bow": {
  gold: 512000,
  materials: [
    { itemName: "Soldier Bow", quantity: 1 },
    { itemName: "Copper Reel", quantity: 2 },
    { itemName: "Welding Gun", quantity: 3 },
  ],
},

"lightning-bow": {
  gold: 512000,
  materials: [
    { itemName: "Flamethrower Bow", quantity: 1 },
    { itemName: "Triple Cell Battery", quantity: 2 },
    { itemName: "Conductor Metal", quantity: 4 },
  ],
},

// --- Gloves ---


"training-gloves": {
  gold: 1000,
  materials: [
    { itemName: "Teethstone", quantity: 4 },
    { itemName: "Iron Bar", quantity: 6 },
    { itemName: "Foundry Rests", quantity: 4 },
  ],
},

"fighter-gloves": {
  gold: 4000,
  materials: [
    { itemName: "Training Gloves", quantity: 1 },
    { itemName: "Hardened Steel", quantity: 5 },
    { itemName: "Rune Tool", quantity: 1 },
  ],
},

"rough-gloves": {
  gold: 4000,
  materials: [
    { itemName: "Training Gloves", quantity: 1 },
    { itemName: "Whetstone", quantity: 10 },
    { itemName: "Golem Chisel", quantity: 4 },
  ],
},

"forest-spirit-gloves": {
  gold: 64000,
  materials: [
    { itemName: "Fighter Gloves", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 3 },
    { itemName: "Old Bulb", quantity: 2 },
  ],
},

"venom-twins-gloves": {
  gold: 64000,
  materials: [
    { itemName: "Rough Gloves", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 4 },
    { itemName: "Pure Acid", quantity: 5 },
  ],
},

"captain-gloves": {
  gold: 256000,
  materials: [
    { itemName: "Forest Spirit Gloves", quantity: 1 },
    { itemName: "Desert Steel Ingot", quantity: 2 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"flame-gloves": {
  gold: 256000,
  materials: [
    { itemName: "Venom Twins Gloves", quantity: 1 },
    { itemName: "Fire Gem", quantity: 4 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"star-platinum-gloves": {
  gold: 512000,
  materials: [
    { itemName: "Captain Gloves", quantity: 1 },
    { itemName: "Copper Reel", quantity: 2 },
    { itemName: "Welding Gun", quantity: 3 },
  ],
},

"thunder-gloves": {
  gold: 512000,
  materials: [
    { itemName: "Flame Gloves", quantity: 1 },
    { itemName: "Triple Cell Battery", quantity: 2 },
    { itemName: "Conductor Metal", quantity: 4 },
  ],
},


// --- Spears ---

"training-spear": {
  gold: 1000,
  materials: [
    { itemName: "Teethstone", quantity: 4 },
    { itemName: "Iron Bar", quantity: 8 },
    { itemName: "Foundry Rests", quantity: 4 },
  ],
},

"warrior-spear": {
  gold: 4000,
  materials: [
    { itemName: "Training Spear", quantity: 1 },
    { itemName: "Hardened Steel", quantity: 5 },
    { itemName: "Rune Tool", quantity: 1 },
  ],
},

"golem-drill-spear": {
  gold: 4000,
  materials: [
    { itemName: "Training Spear", quantity: 1 },
    { itemName: "Whetstone", quantity: 10 },
    { itemName: "Golem Chisel", quantity: 4 },
  ],
},

"wood's-spear": {
  gold: 64000,
  materials: [
    { itemName: "Warrior Spear", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 3 },
    { itemName: "Old Bulb", quantity: 2 },
  ],
},

"venom-sting-spear": {
  gold: 64000,
  materials: [
    { itemName: "Golem Drill Spear", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 4 },
    { itemName: "Pure Acid", quantity: 5 },
  ],
},

"monkey-spear": {
  gold: 256000,
  materials: [
    { itemName: "Wood's Spear", quantity: 1 },
    { itemName: "Desert Steel Ingot", quantity: 2 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"hell-spear": {
  gold: 256000,
  materials: [
    { itemName: "Venom Sting Spear", quantity: 1 },
    { itemName: "Fire Gem", quantity: 4 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"fighter-spear": {
  gold: 512000,
  materials: [
    { itemName: "Monkey Spear", quantity: 1 },
    { itemName: "Copper Reel", quantity: 2 },
    { itemName: "Welding Gun", quantity: 3 },
  ],
},

"lightning-rod-spear": {
  gold: 512000,
  materials: [
    { itemName: "Hell Spear", quantity: 1 },
    { itemName: "Triple Cell Battery", quantity: 2 },
    { itemName: "Conductor Metal", quantity: 4 },
  ],
},


// --- Swords and Shields ---


"training-short-sword": {
  gold: 1000,
  materials: [
    { itemName: "Teethstone", quantity: 10 },
    { itemName: "Foundry Rests", quantity: 4 },
    { itemName: "Iron Bar", quantity: 6 },
  ],
},

"soldier-short-sword": {
  gold: 4000,
  materials: [
    { itemName: "Training Short Sword", quantity: 1 },
    { itemName: "Hardened Steel", quantity: 5 },
    { itemName: "Rune Tool", quantity: 1 },
  ],
},

"rusty-short-sword": {
  gold: 4000,
  materials: [
    { itemName: "Training Short Sword", quantity: 1 },
    { itemName: "Whetstone", quantity: 10 },
    { itemName: "Golem Chisel", quantity: 4 },
  ],
},

"knight-short-sword": {
  gold: 64000,
  materials: [
    { itemName: "Soldier Short Sword", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 3 },
    { itemName: "Old Bulb", quantity: 2 },
  ],
},

"venom-short-sword": {
  gold: 64000,
  materials: [
    { itemName: "Rusty Short Sword", quantity: 1 },
    { itemName: "Ancient Wood", quantity: 4 },
    { itemName: "Pure Acid", quantity: 5 },
  ],
},

"commander-short-sword": {
  gold: 256000,
  materials: [
    { itemName: "Knight Short Sword", quantity: 1 },
    { itemName: "Desert Steel Ingot", quantity: 2 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"reborn-short-sword": {
  gold: 256000,
  materials: [
    { itemName: "Venom Short Sword", quantity: 1 },
    { itemName: "Fire Gem", quantity: 4 },
    { itemName: "Thermo Magnetic Engine", quantity: 3 },
  ],
},

"king-short-sword": {
  gold: 512000,
  materials: [
    { itemName: "Commander Short Sword", quantity: 1 },
    { itemName: "Copper Reel", quantity: 2 },
    { itemName: "Welding Gun", quantity: 3 },
  ],
},

"vampire-short-sword": {
  gold: 512000,
  materials: [
    { itemName: "Reborn Short Sword", quantity: 1 },
    { itemName: "Triple Cell Battery", quantity: 2 },
    { itemName: "Conductor Metal", quantity: 4 },
  ],
},


 // =========================
  // FABRIC SET
  // =========================
  "fabric-bandana": {
    gold: 4000,
    materials: [
      { itemName: "Fabric", quantity: 4 },
      { itemName: "Water Sphere", quantity: 2 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "fabric-bandana-II": {
    gold: 44000,
    materials: [
      { itemName: "Fabric Bandana", quantity: 1 },
      { itemName: "Straw", quantity: 3 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "fabric-bandana-III": {
    gold: 96000,
    materials: [
      { itemName: "Fabric Bandana II", quantity: 1 },
      { itemName: "Desert Rope", quantity: 3 },
      { itemName: "Fireproof Cloth", quantity: 5 },
    ],
  },
  "fabric-bandana-IV": {
    gold: 192000,
    materials: [
      { itemName: "Fabric Bandana III", quantity: 1 },
      { itemName: "Treated Wood", quantity: 2 },
      { itemName: "Wires", quantity: 2 },
    ],
  },

  "fabric-chestplate": {
    gold: 4000,
    materials: [
      { itemName: "Fabric", quantity: 10 },
      { itemName: "Water Sphere", quantity: 6 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "fabric-chestplate-II": {
    gold: 44000,
    materials: [
      { itemName: "Fabric Chestplate", quantity: 1 },
      { itemName: "Straw", quantity: 3 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "fabric-chestplate-III": {
    gold: 96000,
    materials: [
      { itemName: "Fabric Chestplate II", quantity: 1 },
      { itemName: "Desert Rope", quantity: 3 },
      { itemName: "Fireproof Cloth", quantity: 5 },
    ],
  },
  "fabric-chestplate-IV": {
    gold: 192000,
    materials: [
      { itemName: "Fabric Chestplate III", quantity: 1 },
      { itemName: "Treated Wood", quantity: 2 },
      { itemName: "Wires", quantity: 2 },
    ],
  },

  "fabric-boots": {
    gold: 4000,
    materials: [
      { itemName: "Fabric", quantity: 6 },
      { itemName: "Water Sphere", quantity: 4 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "fabric-boots-II": {
    gold: 44000,
    materials: [
      { itemName: "Fabric Boots", quantity: 1 },
      { itemName: "Straw", quantity: 3 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "fabric-boots-III": {
    gold: 96000,
    materials: [
      { itemName: "Fabric Boots II", quantity: 1 },
      { itemName: "Desert Rope", quantity: 3 },
      { itemName: "Fireproof Cloth", quantity: 5 },
    ],
  },
  "fabric-boots-IV": {
    gold: 192000,
    materials: [
      { itemName: "Fabric Boots III", quantity: 1 },
      { itemName: "Treated Wood", quantity: 2 },
      { itemName: "Wires", quantity: 2 },
    ],
  },

  // =========================
  // IRON SET
  // =========================
  "iron-helmet": {
    gold: 4000,
    materials: [
      { itemName: "Iron Bar", quantity: 6 },
      { itemName: "Teethstone", quantity: 4 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "iron-helmet-II": {
    gold: 44000,
    materials: [
      { itemName: "Iron Helmet", quantity: 1 },
      { itemName: "Strong Leaves", quantity: 4 },
      { itemName: "Preserved Root", quantity: 2 },
    ],
  },
  "iron-helmet-III": {
    gold: 96000,
    materials: [
      { itemName: "Iron Helmet II", quantity: 1 },
      { itemName: "Magnetite", quantity: 4 },
      { itemName: "Insulating Dust", quantity: 2 },
    ],
  },
  "iron-helmet-IV": {
    gold: 192000,
    materials: [
      { itemName: "Iron Helmet III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Gold Strands", quantity: 2 },
    ],
  },

  "iron-chestplate": {
    gold: 4000,
    materials: [
      { itemName: "Iron Bar", quantity: 6 },
      { itemName: "Teethstone", quantity: 14 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "iron-chestplate-II": {
    gold: 44000,
    materials: [
      { itemName: "Iron Chestplate", quantity: 1 },
      { itemName: "Strong Leaves", quantity: 4 },
      { itemName: "Preserved Root", quantity: 2 },
    ],
  },
  "iron-chestplate-III": {
    gold: 96000,
    materials: [
      { itemName: "Iron Chestplate II", quantity: 1 },
      { itemName: "Magnetite", quantity: 4 },
      { itemName: "Insulating Dust", quantity: 2 },
    ],
  },
  "iron-chestplate-IV": {
    gold: 192000,
    materials: [
      { itemName: "Iron Chestplate III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Gold Strands", quantity: 2 },
    ],
  },

  "iron-boots": {
    gold: 4000,
    materials: [
      { itemName: "Iron Bar", quantity: 6 },
      { itemName: "Teethstone", quantity: 14 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "iron-boots-II": {
    gold: 44000,
    materials: [
      { itemName: "Iron Boots", quantity: 1 },
      { itemName: "Strong Leaves", quantity: 4 },
      { itemName: "Preserved Root", quantity: 2 },
    ],
  },
  "iron-boots-III": {
    gold: 96000,
    materials: [
      { itemName: "Iron Boots II", quantity: 1 },
      { itemName: "Magnetite", quantity: 4 },
      { itemName: "Insulating Dust", quantity: 2 },
    ],
  },
  "iron-boots-IV": {
    gold: 192000,
    materials: [
      { itemName: "Iron Boots III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Gold Strands", quantity: 2 },
    ],
  },

  // =========================
  // STEEL SET
  // =========================
  "steel-helmet": {
    gold: 4000,
    materials: [
      { itemName: "Hardened Steel", quantity: 6 },
      { itemName: "Iron Bar", quantity: 12 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "steel-helmet-II": {
    gold: 44000,
    materials: [
      { itemName: "Steel Helmet", quantity: 1 },
      { itemName: "Ancient Wood", quantity: 2 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "steel-helmet-III": {
    gold: 96000,
    materials: [
      { itemName: "Steel Helmet II", quantity: 1 },
      { itemName: "Desert Steel Ingot", quantity: 1 },
      { itemName: "Flammable Dust", quantity: 4 },
    ],
  },
  "steel-helmet-IV": {
    gold: 192000,
    materials: [
      { itemName: "Steel Helmet III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Copper Reel", quantity: 2 },
    ],
  },

  "steel-chestplate": {
    gold: 4000,
    materials: [
      { itemName: "Hardened Steel", quantity: 8 },
      { itemName: "Iron Bar", quantity: 14 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "steel-chestplate-II": {
    gold: 44000,
    materials: [
      { itemName: "Steel Chestplate", quantity: 1 },
      { itemName: "Ancient Wood", quantity: 2 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "steel-chestplate-III": {
    gold: 96000,
    materials: [
      { itemName: "Steel Chestplate II", quantity: 1 },
      { itemName: "Desert Steel Ingot", quantity: 1 },
      { itemName: "Flammable Dust", quantity: 4 },
    ],
  },
  "steel-chestplate-IV": {
    gold: 192000,
    materials: [
      { itemName: "Steel Chestplate III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Copper Reel", quantity: 2 },
    ],
  },

  "steel-boots": {
    gold: 4000,
    materials: [
      { itemName: "Hardened Steel", quantity: 4 },
      { itemName: "Iron Bar", quantity: 12 },
      { itemName: "Foundry Rests", quantity: 3 },
    ],
  },
  "steel-boots-II": {
    gold: 44000,
    materials: [
      { itemName: "Steel Boots", quantity: 1 },
      { itemName: "Ancient Wood", quantity: 2 },
      { itemName: "Magic Wood", quantity: 5 },
    ],
  },
  "steel-boots-III": {
    gold: 96000,
    materials: [
      { itemName: "Steel Boots II", quantity: 1 },
      { itemName: "Desert Steel Ingot", quantity: 1 },
      { itemName: "Flammable Dust", quantity: 4 },
    ],
  },
  "steel-boots-IV": {
    gold: 192000,
    materials: [
      { itemName: "Steel Boots III", quantity: 1 },
      { itemName: "Wolfram Rock", quantity: 2 },
      { itemName: "Copper Reel", quantity: 2 },
    ],
  },

// =========================
// DLC — COMPOSITE ARMOR
// =========================
"composite-helmet": { // Composite Armor Helmet
  gold: 456000,
  materials: [
    { itemName: "Dimensional Garbage", quantity: 3 },
    { itemName: "Dimensional Resistant Metal", quantity: 3 },
    { itemName: "Fireproof Cloth", quantity: 5 },
  ],
}, 

"composite-helmet-I": { // Composite Armor Helmet II
  gold: 506000,
  materials: [
    { itemName: "Composite Armor Helmet", quantity: 1 },
    { itemName: "Dimensional Garbage", quantity: 3 },
    { itemName: "Dimensional Resistant Metal", quantity: 3 },
  ],
}, 

"composite-helmet-II": { // Composite Armor Helmet III
  gold: 556000,
  materials: [
    { itemName: "Composite Armor Helmet II", quantity: 1 },
    { itemName: "Dimensional Resistant Glass", quantity: 3 },
    { itemName: "Dimensional Resistant Metal", quantity: 3 },
  ],
}, 

"composite-helmet-III": { // Composite Armor Helmet IV
  gold: 606000,
  materials: [
    { itemName: "Composite Armor Helmet III", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 2 },
    { itemName: "Dimensional Resistant Metal", quantity: 5 },
  ],
}, 

"composite-helmet-IV": { // Composite Armor Helmet V
  gold: 656000,
  materials: [
    { itemName: "Composite Armor Helmet IV", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 2 },
    { itemName: "Light Power Crystal", quantity: 2 },
  ],
}, 


// Chestplates
"composite-chestplate": { // Composite Armor Chestplate
  gold: 456000,
  materials: [
    { itemName: "Dimensional Garbage", quantity: 3 },
    { itemName: "Carbon Fiber Plate", quantity: 3 },
    { itemName: "Plastic Film", quantity: 5 },
  ],
}, 

"composite-chestplate-I": { // Composite Armor Chestplate II
  gold: 506000,
  materials: [
    { itemName: "Composite Armor Chestplate", quantity: 1 },
    { itemName: "Carbon Fiber Plate", quantity: 3 },
    { itemName: "Dimensional Res. Mineral Ore", quantity: 3 },
  ],
}, 

"composite-chestplate-II": { // Composite Armor Chestplate III
  gold: 556000,
  materials: [
    { itemName: "Composite Armor Chestplate II", quantity: 1 },
    { itemName: "Ancient Sacred Volume", quantity: 3 },
    { itemName: "Carbon Fiber Plate", quantity: 3 },
  ],
},

"composite-chestplate-III": { // Composite Armor Chestplate IV
  gold: 606000,
  materials: [
    { itemName: "Composite Armor Chestplate III", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 2 },
    { itemName: "Carbon Fiber Plate", quantity: 5 },
  ],
}, 

"composite-chestplate-IV": { // Composite Armor Chestplate V
  gold: 656000,
  materials: [
    { itemName: "Composite Armor Chestplate IV", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 2 },
    { itemName: "Shock Absorb Material", quantity: 2 },
  ],
}, 


// Boots
"composite-boots": { // Composite Armor Boots
  gold: 432000,
  materials: [
    { itemName: "Dimensional Res. Mineral Ore", quantity: 3 },
    { itemName: "Dimensional Garbage", quantity: 3 },
    { itemName: "Fabric", quantity: 5 },
  ],
}, 

"composite-boots-I": { // Composite Armor Boots II
  gold: 506000,
  materials: [
    { itemName: "Composite Armor Boots", quantity: 1 },
    { itemName: "Dimensional Res. Mineral Ore", quantity: 3 },
    { itemName: "Dimensional Garbage", quantity: 3 },
  ],
},

"composite-boots-II": { // Composite Armor Boots III
  gold: 556000,
  materials: [
    { itemName: "Composite Armor Boots II", quantity: 1 },
    { itemName: "Ancient Sacred Volume", quantity: 3 },
    { itemName: "Dimensional Garbage", quantity: 3 },
  ],
}, 

"composite-boots-III": { // Composite Armor Boots IV
  gold: 606000,
  materials: [
    { itemName: "Composite Armor Boots III", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 2 },
    { itemName: "Dimensional Garbage", quantity: 5 },
  ],
}, 

"composite-boots-IV": { // Composite Armor Boots V
  gold: 656000,
  materials: [
    { itemName: "Composite Armor Boots IV", quantity: 1 },
    { itemName: "Dimensional Suit Fabric", quantity: 5 },
    { itemName: "Dimensional Garbage", quantity: 2 },
  ],
}, 

};


