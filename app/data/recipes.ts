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


};
