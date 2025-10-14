import type { GearItem } from "../../constants/types";


export const ARMOUR: GearItem[] = [
 // -------------------------
// Helmets
// -------------------------
{ id: "fabric-bandana", name: "Fabric Bandana", kind: "armour", slot: "helmet", tier: 1, setOrder: 0,
  armourStats: { base: { health: 30, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "fabric-bandana-II", name: "Fabric Bandana II", kind: "armour", slot: "helmet", tier: 2, setOrder: 0,
  armourStats: { base: { health: 60, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 5 }],
  },
},
{ id: "fabric-bandana-III", name: "Fabric Bandana III", kind: "armour", slot: "helmet", tier: 3, setOrder: 0,
  armourStats: { base: { health: 120, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 8 }],
  },
},
{ id: "fabric-bandana-IV", name: "Fabric Bandana IV", kind: "armour", slot: "helmet", tier: 4, setOrder: 0,
  armourStats: { base: { health: 270, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 10 }],
  },
},


{ id: "iron-helmet", name: "Iron Helmet", kind: "armour", slot: "helmet", tier: 1, setOrder: 1,
  armourStats: { base: { health: 40 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-helmet-II", name: "Iron Helmet II", kind: "armour", slot: "helmet", tier: 2, setOrder: 1,
  armourStats: { base: { health: 80 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-helmet-III", name: "Iron Helmet III", kind: "armour", slot: "helmet", tier: 3, setOrder: 1,
  armourStats: { base: { health: 160 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-helmet-IV", name: "Iron Helmet IV", kind: "armour", slot: "helmet", tier: 4, setOrder: 1,
  armourStats: { base: { health: 360 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},



{ id: "steel-helmet", name: "Steel Helmet", kind: "armour", slot: "helmet", tier: 1, setOrder: 2,
  armourStats: { base: { health: 50, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-helmet-II", name: "Steel Helmet II", kind: "armour", slot: "helmet", tier: 2, setOrder: 2,
  armourStats: { base: { health: 75, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-helmet-III", name: "Steel Helmet III", kind: "armour", slot: "helmet", tier: 3, setOrder: 2,
  armourStats: { base: { health: 200, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-helmet-IV", name: "Steel Helmet IV", kind: "armour", slot: "helmet", tier: 4, setOrder: 2,
  armourStats: { base: { health: 490, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 15 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},


  // -------------------------
// Chestplates
// -------------------------
{ id: "fabric-chestplate", name: "Fabric Chestplate", kind: "armour", slot: "chestplate", tier: 1, setOrder:0,
  armourStats: { base: { health: 30, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
  
},
{ id: "fabric-chestplate-II", name: "Fabric Chestplate II", kind: "armour", slot: "chestplate", tier: 2, setOrder:0,
  armourStats: { base: { health: 60, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
  
},
{ id: "fabric-chestplate-III", name: "Fabric Chestplate III", kind: "armour", slot: "chestplate", tier: 3, setOrder:0,
  armourStats: { base: { health: 120, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "fabric-chestplate-IV", name: "Fabric Chestplate IV", kind: "armour", slot: "chestplate", tier: 4, setOrder:0,
  armourStats: { base: { health: 270, speed: 8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},

{ id: "iron-chestplate", name: "Iron Chestplate", kind: "armour", slot: "chestplate", tier: 1, setOrder:1,
  armourStats: { base: { health: 40 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-chestplate-II", name: "Iron Chestplate II", kind: "armour", slot: "chestplate", tier: 2, setOrder:1,
  armourStats: { base: { health: 80 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-chestplate-III", name: "Iron Chestplate III", kind: "armour", slot: "chestplate", tier: 3, setOrder:1,
  armourStats: { base: { health: 160 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-chestplate-IV", name: "Iron Chestplate IV", kind: "armour", slot: "chestplate", tier: 4, setOrder:1,
  armourStats: { base: { health: 360 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},

{ id: "steel-chestplate", name: "Steel Chestplate", kind: "armour", slot: "chestplate", tier: 1, setOrder:2,
  armourStats: { base: { health: 50, speed: -4 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-chestplate-II", name: "Steel Chestplate II", kind: "armour", slot: "chestplate", tier: 2, setOrder:2,
  armourStats: { base: { health: 100, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-chestplate-III", name: "Steel Chestplate III", kind: "armour", slot: "chestplate", tier: 3, setOrder:2,
  armourStats: { base: { health: 200, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-chestplate-IV", name: "Steel Chestplate IV", kind: "armour", slot: "chestplate", tier: 4, setOrder:2,
  armourStats: { base: { health: 490, speed: -8 } },
  armourEnchant: {
    bonus: { defense: 20 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},


  // -------------------------
// Boots
// -------------------------
{ id: "fabric-boots", name: "Fabric Boots", kind: "armour", slot: "boots", tier: 1, setOrder:0,
  armourStats: { base: { health: 15, speed: 4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "fabric-boots-II", name: "Fabric Boots II", kind: "armour", slot: "boots", tier: 2, setOrder:0,
  armourStats: { base: { health: 30, speed: 4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "fabric-boots-III", name: "Fabric Boots III", kind: "armour", slot: "boots", tier: 3, setOrder:0,
  armourStats: { base: { health: 60, speed: 4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "fabric-boots-IV", name: "Fabric Boots IV", kind: "armour", slot: "boots", tier: 4, setOrder:0,
  armourStats: { base: { health: 135, speed: 4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},

{ id: "iron-boots", name: "Iron Boots", kind: "armour", slot: "boots", tier: 1, setOrder:1,
  armourStats: { base: { health: 20 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-boots-II", name: "Iron Boots II", kind: "armour", slot: "boots", tier: 2, setOrder:1,
  armourStats: { base: { health: 40 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-boots-III", name: "Iron Boots III", kind: "armour", slot: "boots", tier: 3, setOrder:1,
  armourStats: { base: { health: 80 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "iron-boots-IV", name: "Iron Boots IV", kind: "armour", slot: "boots", tier: 4, setOrder:1,
  armourStats: { base: { health: 180 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},

{ id: "steel-boots", name: "Steel Boots", kind: "armour", slot: "boots", tier: 1, setOrder:2,
  armourStats: { base: { health: 25, speed: -4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-boots-II", name: "Steel Boots II", kind: "armour", slot: "boots", tier: 2, setOrder:2,
  armourStats: { base: { health: 50, speed: -4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-boots-III", name: "Steel Boots III", kind: "armour", slot: "boots", tier: 3, setOrder:2,
  armourStats: { base: { health: 100, speed: -4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 64000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "steel-boots-IV", name: "Steel Boots IV", kind: "armour", slot: "boots", tier: 4, setOrder:2,
  armourStats: { base: { health: 245, speed: -4 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 128000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},


  // -------------------------
// DLC Composite Armour
// -------------------------
{ id: "composite-helmet", name: "Composite Armor Helmet", kind: "armour", slot: "helmet", tier: 0, setOrder:3, 
  armourStats: { base: { health: 560, defense: 10 } },
  armourEnchant: {
    bonus: { defense: 10 },
    gold: 2000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "composite-helmet-I", name: "Composite Armor Helmet II", kind: "armour", slot: "helmet", tier: 1, setOrder:3,
  armourStats: { base: { health: 870, defense: 10 } },
  armourEnchant: {
    bonus: { defense: 5 },
    gold: 32000,
    cost: [{ itemName: "Empowering Crystal", quantity: 3 }],
  },
},
{ id: "composite-helmet-II", name: "Composite Armor Helmet III", kind: "armour", slot: "helmet", tier: 2, setOrder:3,
  armourStats: { base: { health: 1345, defense: 10 } },
},
{ id: "composite-helmet-III", name: "Composite Armor Helmet IV", kind: "armour", slot: "helmet", tier: 3, setOrder:3,
  armourStats: { base: { health: 2085, defense: 10 } },
},
{ id: "composite-helmet-IV", name: "Composite Armor Helmet V", kind: "armour", slot: "helmet", tier: 4, setOrder:3,
  armourStats: { base: { health: 3085, defense: 10 } },
},

{ id: "composite-chestplate", name: "Composite Armor Chestplate", kind: "armour", slot: "chestplate", tier: 0, setOrder:3,
  armourStats: { base: { health: 560, defense: 10 } },
},
{ id: "composite-chestplate-I", name: "Composite Armor Chestplate II", kind: "armour", slot: "chestplate", tier: 1, setOrder:3,
  armourStats: { base: { health: 870, defense: 10 } },
},
{ id: "composite-chestplate-II", name: "Composite Armor Chestplate III", kind: "armour", slot: "chestplate", tier: 2, setOrder:3,
  armourStats: { base: { health: 1345, defense: 10 } },
},
{ id: "composite-chestplate-III", name: "Composite Armor Chestplate IV", kind: "armour", slot: "chestplate", tier: 3, setOrder:3,
  armourStats: { base: { health: 2085, defense: 10 } },
},
{ id: "composite-chestplate-IV", name: "Composite Armor Chestplate V", kind: "armour", slot: "chestplate", tier: 4, setOrder:3,
  armourStats: { base: { health: 3085, defense: 10 } },
},

{ id: "composite-boots", name: "Composite Armor Boots", kind: "armour", slot: "boots", tier: 0, setOrder:3,
  armourStats: { base: { health: 280, defense: 10 } },
},
{ id: "composite-boots-I", name: "Composite Armor Boots II", kind: "armour", slot: "boots", tier: 1, setOrder:3,
  armourStats: { base: { health: 434, defense: 10 } },
},
{ id: "composite-boots-II", name: "Composite Armor Boots III", kind: "armour", slot: "boots", tier: 2, setOrder:3,
  armourStats: { base: { health: 672, defense: 10 } },
},
{ id: "composite-boots-III", name: "Composite Armor Boots IV", kind: "armour", slot: "boots", tier: 3, setOrder:3,
  armourStats: { base: { health: 1041, defense: 10 } },
},
{ id: "composite-boots-IV", name: "Composite Armor Boots V", kind: "armour", slot: "boots", tier: 4, setOrder:3,
  armourStats: { base: { health: 2041, defense: 10 } },
},


];
