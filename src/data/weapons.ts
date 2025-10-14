// app/data/weapons.ts (or wherever this lives)
// app/data/weapons.ts
import type {
  WeaponItem,
  WeaponStats,
  EnchantmentTier,
} from "@/constants/types";


import { BLACKSMITH_RECIPES_BY_ID } from "./recipes";

const BASE_WEAPONS: WeaponItem[] = [
  

// --- Big Swords ---

{ id: "training-big-sword", name: "Training Big Sword", kind: "weapons", slot: "big-sword", tier: 0,
  weaponStats: { base: 25, enchant: { "+": 32, "++": 39, "+++": 46 } },
  summary: "Basic training greatsword.",
},

{ id: "buster-big-sword", name: "Buster Big Sword", kind: "weapons", slot: "big-sword", tier: 1,
  weaponStats: { base: 62, enchant: { "+": 86, "++": 110, "+++": 134 } },
},

{ id: "rock-big-sword", name: "Rock Big Sword", kind: "weapons", slot: "big-sword", tier: 1,
  weaponStats: { base: 50, enchant: { "+": 74, "++": 98, "+++": 122 }, special: "Stun" },
},

{ id: "wild-big-sword", name: "Wild Big Sword", kind: "weapons", slot: "big-sword", tier: 2,
  weaponStats: { base: 185, enchant: { "+": 210, "++": 235, "+++": 260 } },
},

{ id: "toxic-big-sword", name: "Toxic Big Sword", kind: "weapons", slot: "big-sword", tier: 2,
  weaponStats: { base: 135, enchant: { "+": 160, "++": 185, "+++": 210 }, special: "Poison" },
},

{ id: "vulcan-big-sword", name: "Vulcan Big Sword", kind: "weapons", slot: "big-sword", tier: 3,
  weaponStats: { base: 310, enchant: { "+": 336, "++": 362, "+++": 388 } },
},

{ id: "blaze-big-sword", name: "Blaze Big Sword", kind: "weapons", slot: "big-sword", tier: 3,
  weaponStats: { base: 215, enchant: { "+": 241, "++": 267, "+++": 293 }, special: "Burn" },
},

{ id: "fusion-big-sword", name: "Fusion Big Sword", kind: "weapons", slot: "big-sword", tier: 4,
  weaponStats: { base: 500, enchant: { "+": 531, "++": 562, "+++": 593 } },
},

{ id: "storm-big-sword", name: "Storm Big Sword", kind: "weapons", slot: "big-sword", tier: 4,
  weaponStats: { base: 375, enchant: { "+": 406, "++": 437, "+++": 468 }, special: "Shock" },
},

// --- Bows ---

{ id: "training-bow", name: "Training Bow", kind: "weapons", slot: "bow", tier: 0,
  weaponStats: { base: 15, enchant: { "+": 20, "++": 25, "+++": 30 } },
},
{ id: "hunter-bow", name: "Hunter Bow", kind: "weapons", slot: "bow", tier: 1,
  weaponStats: { base: 35, enchant: { "+": 53, "++": 71, "+++": 89 } },
},
{ id: "catapult-bow", name: "Catapult Bow", kind: "weapons", slot: "bow", tier: 1,
  weaponStats: { base: 30, enchant: { "+": 48, "++": 66, "+++": 84 }, special: "Stun" },
},
{ id: "natural-bow", name: "Natural Bow", kind: "weapons", slot: "bow", tier: 2,
  weaponStats: { base: 105, enchant: { "+": 124, "++": 143, "+++": 162 } },
},
{ id: "poison-bow", name: "Poison Bow", kind: "weapons", slot: "bow", tier: 2,
  weaponStats: { base: 77, enchant: { "+": 96, "++": 115, "+++": 134 }, special: "Poison" },
},
{ id: "soldier-bow", name: "Soldier Bow", kind: "weapons", slot: "bow", tier: 3,
  weaponStats: { base: 175, enchant: { "+": 195, "++": 215, "+++": 235 } },
},
{ id: "flamethrower-bow", name: "Flamethrower Bow", kind: "weapons", slot: "bow", tier: 3,
  weaponStats: { base: 125, enchant: { "+": 145, "++": 165, "+++": 185 }, special: "Burn" },
},
{ id: "exeter-bow", name: "Exeter Bow", kind: "weapons", slot: "bow", tier: 4,
  weaponStats: { base: 300, enchant: { "+": 324, "++": 348, "+++": 372 }, special: "Top" },
},
{ id: "lightning-bow", name: "Lightning Bow", kind: "weapons", slot: "bow", tier: 4,
  weaponStats: { base: 200, enchant: { "+": 224, "++": 248, "+++": 272 }, special: "Shock" },
},


// --- Gloves ---

{ id: "training-gloves", name: "Training Gloves", kind: "weapons", slot: "gloves", tier: 0,
  weaponStats: { base: 20, enchant: { "+": 27, "++": 34, "+++": 41 } },
},
{ id: "fighter-gloves", name: "Fighter Gloves", kind: "weapons", slot: "gloves", tier: 1,
  weaponStats: { base: 50, enchant: { "+": 74, "++": 98, "+++": 122 } },
},
{ id: "rough-gloves", name: "Rough Gloves", kind: "weapons", slot: "gloves", tier: 1,
  weaponStats: { base: 40, enchant: { "+": 64, "++": 88, "+++": 112 }, special: "Stun", },
  
},
{ id: "forest-spirit-gloves", name: "Forest Spirit Gloves", kind: "weapons", slot: "gloves", tier: 2,
  weaponStats: { base: 150, enchant: { "+": 175, "++": 200, "+++": 225 } },
  
},
{ id: "venom-twins-gloves", name: "Venom Twins Gloves", kind: "weapons", slot: "gloves", tier: 2,
  weaponStats: { base: 110, enchant: { "+": 135, "++": 160, "+++": 185 },special: "Poison" },
  
},
{ id: "captain-gloves", name: "Captain Gloves", kind: "weapons", slot: "gloves", tier: 3,
  weaponStats: { base: 250, enchant: { "+": 276, "++": 302, "+++": 328 } },
},
{ id: "flame-gloves", name: "Flame Gloves", kind: "weapons", slot: "gloves", tier: 3,
  weaponStats: { base: 175, enchant: { "+": 201, "++": 227, "+++": 253 }, special: "Burn" },
  
},
{ id: "star-platinum-gloves", name: "Star Platinum Gloves", kind: "weapons", slot: "gloves", tier: 4,
  weaponStats: { base: 400, enchant: { "+": 431, "++": 462, "+++": 493 } },
},
{ id: "thunder-gloves", name: "Thunder Gloves", kind: "weapons", slot: "gloves", tier: 4,
  weaponStats: { base: 300, enchant: { "+": 331, "++": 362, "+++": 393 }, special:"Shock" },
  
},


// --- Spears ---

{ id: "broom-spear", name: "Broom", kind: "weapons", slot: "spear", tier: 0,
  weaponStats: { base: 6, enchant: { "+": 6, "++": 6, "+++": 6 } }, // dummy values
  enchantments: [
    { tier: 1, bonus: "+5% Speed" },
    { tier: 2, bonus: "+10% Speed" },
    { tier: 3, bonus: "+15% Speed" },
  ],
},



{ id: "training-spear", name: "Training Spear", kind: "weapons", slot: "spear", tier: 0,
  weaponStats: { base: 20, enchant: { "+": 27, "++": 34, "+++": 41 } },
},

{ id: "warrior-spear", name: "Warrior Spear", kind: "weapons", slot: "spear", tier: 1,
  weaponStats: { base: 50, enchant: { "+": 74, "++": 98, "+++": 122 } },
},

{ id: "golem-drill-spear", name: "Golem Drill Spear", kind: "weapons", slot: "spear", tier: 1,
  weaponStats: { base: 40, enchant: { "+": 64, "++": 88, "+++": 112 }, special: "Stun" },
},

{ id: "wood's-spear", name: "Wood's Spear", kind: "weapons", slot: "spear", tier: 2,
  weaponStats: { base: 150, enchant: { "+": 175, "++": 200, "+++": 225 },  },
},

{ id: "venom-sting-spear", name: "Venom Sting Spear", kind: "weapons", slot: "spear", tier: 2,
  weaponStats: { base: 110, enchant: { "+": 135, "++": 160, "+++": 185 }, special: "Poison" },
},

{ id: "monkey-spear", name: "Monkey Spear", kind: "weapons", slot: "spear", tier: 3,
  weaponStats: { base: 250, enchant: { "+": 276, "++": 302, "+++": 328 },  },
},

{ id: "hell-spear", name: "Hell Spear", kind: "weapons", slot: "spear", tier: 3,
  weaponStats: { base: 175, enchant: { "+": 201, "++": 227, "+++": 253 }, special: "Fire" },
},

{ id: "fighter-spear", name: "Fighter Spear", kind: "weapons", slot: "spear", tier: 4,
  weaponStats: { base: 400, enchant: { "+": 431, "++": 462, "+++": 493 }, special: "Top" },
},

{ id: "lightning-rod-spear", name: "Lightning Rod Spear", kind: "weapons", slot: "spear", tier: 4,
  weaponStats: { base: 300, enchant: { "+": 331, "++": 362, "+++": 393 }, special: "Shock" },
},


// --- Sword and shield ---

  { id: "training-short-sword", name: "Training Short Sword", kind: "weapons", slot: "short-sword", tier: 0, 
    weaponStats: { base: 20, enchant: { "+": 27, "++": 34, "+++": 41 } },
    summary: "Basic training blade.",
  },
  { id: "soldier-short-sword", name: "Soldier Short Sword", kind: "weapons", slot: "short-sword", tier: 1,
    weaponStats: { base: 50, enchant: { "+": 74, "++": 98, "+++": 122 } },
  },
  { id: "rusty-short-sword", name: "Rusty Short Sword", kind: "weapons", slot: "short-sword", tier: 1,
    weaponStats: { base: 40, enchant: { "+": 64, "++": 88, "+++": 112 }, special: "Stun" },
  },
  { id: "knight-short-sword", name: "Knight Short Sword", kind: "weapons", slot: "short-sword", tier: 2,
    weaponStats: { base: 150, enchant: { "+": 175, "++": 200, "+++": 225 } },
  },
  { id: "venom-short-sword", name: "Venom Short Sword", kind: "weapons", slot: "short-sword", tier: 2,
    weaponStats: { base: 110, enchant: { "+": 135, "++": 160, "+++": 185 }, special: "Poison" },
  },
  { id: "commander-short-sword", name: "Commander Short Sword", kind: "weapons", slot: "short-sword", tier: 3,
    weaponStats: { base: 250, enchant: { "+": 276, "++": 302, "+++": 328 } },
  },
  { id: "reborn-short-sword", name: "Reborn Short Sword", kind: "weapons", slot: "short-sword", tier: 3,
    weaponStats: { base: 175, enchant: { "+": 201, "++": 227, "+++": 253 },  special: "Burn" },
  },
  { id: "king-short-sword", name: "King Short Sword", kind: "weapons", slot: "short-sword", tier: 4,
    weaponStats: { base: 400, enchant: { "+": 431, "++": 462, "+++": 493 } },
  },
  { id: "vampire-short-sword", name: "Vampire Short Sword", kind: "weapons", slot: "short-sword", tier: 4,
    weaponStats: { base: 300, enchant: { "+": 331, "++": 362, "+++": 393 }, special: "Shock" },
  },

// --- DLC craftable (post-boss) shown in dropdown as Levels I–V ---




{
  id: "ether-sable", name: "Ether Sable", kind: "weapons", slot: "sword-and-shield", tier: 5,  baseDamage: 620,         
 
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 620",
      gold: 456000,
      weaponStats: {enchant: { "+": 692, "++": 764, "+++": 837 }},
    },
    {
      tier: 2,
      bonus: "Level II · Damage 960",
      gold: 506000,
      weaponStats: {enchant: { "+": 431, "++": 462, "+++": 493 }},
    },
    {
      tier: 3,
      bonus: "Level III · Damage 1488",
      gold: 556000,
      weaponStats: {enchant: { "+": 431, "++": 462, "+++": 493 }},
    },
    {
      tier: 4,
      bonus: "Level IV · Damage 2300",
      gold: 606000,
      weaponStats: {enchant: { "+": 431, "++": 462, "+++": 493 }},
    },
    {
      tier: 5,
      bonus: "Level V · Damage 3500",
      gold: 656000,
      weaponStats: {enchant: { "+": 431, "++": 462, "+++": 493 }},
    },
  ],
  // Keep Blacksmith Recipe useful by showing Level I craft here:
  recipe: {
    gold: 456000,
    materials: [
      { itemName: "Dimensional Garbage", quantity: 3 },
      { itemName: "Dimensional Resistant Metal", quantity: 2 },
      { itemName: "Wolfram Rock", quantity: 5 },
    ],
  },
  summary: "DLC sword & shield with upgrades I–V.",
},

// Switch Exclusive – Hero’s Bow
{
  id: "heros-bow",
  name: "Hero's Bow",
  kind: "weapons",
  slot: "bow",
  tier: 5,                  // Switch-exclusive reskin
  baseDamage: 35,           // Level I
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 35",
      gold: 4000,
      cost: [
        { itemName: "Fabric", quantity: 3 },
        { itemName: "Hardened Steel", quantity: 5 },
        { itemName: "Rune Tool", quantity: 1 },
      ],
    },
    { tier: 2, bonus: "Level II · Damage 105" },
    { tier: 3, bonus: "Level III · Damage 175" },
    { tier: 4, bonus: "Level IV · Damage 300" },
  ],
  recipe: {
    gold: 4000,
    materials: [
      { itemName: "Fabric", quantity: 3 },
      { itemName: "Hardened Steel", quantity: 5 },
      { itemName: "Rune Tool", quantity: 1 },
    ],
  },
  summary: "Nintendo Switch exclusive bow.",
},


{
  id: "heros-sword",
  name: "Hero's Sword",
  kind: "weapons",
  slot: "sword-and-shield",
  tier: 5,
  baseDamage: 50,
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 50",
      gold: 4000,
      cost: [
        { itemName: "Broken Sword", quantity: 5 },
        { itemName: "Rune Tool", quantity: 1 },
        { itemName: "Hardened Steel", quantity: 5 },
      ],
    },
    {
      tier: 2,
      bonus: "Level II · Damage 150",
      cost: [
        { itemName: "Ancient Wood", quantity: 3 },
        { itemName: "Old Bulb", quantity: 2 },
        { itemName: "Hero's Sword", quantity: 1 },
      ],
    },
    {
      tier: 3,
      bonus: "Level III · Damage 250",
      cost: [
        { itemName: "Desert Steel Ingot", quantity: 2 },
        { itemName: "Thermo Magnetic Engine", quantity: 3 },
        { itemName: "Hero's Sword II", quantity: 1 },
      ],
    },
    {
      tier: 4,
      bonus: "Level IV · Damage 400",
      cost: [
        { itemName: "Copper Reel", quantity: 2 },
        { itemName: "Welding Gun", quantity: 3 },
        { itemName: "Hero's Sword III", quantity: 1 },
      ],
    },
  ],
  recipe: {
    gold: 4000,
    materials: [
      { itemName: "Broken Sword", quantity: 5 },
      { itemName: "Rune Tool", quantity: 1 },
      { itemName: "Hardened Steel", quantity: 5 },
    ],
  },
  summary: "Nintendo Switch exclusive.",
},

{
  id: "master-fists",
  name: "Master Fists",
  kind: "weapons",
  slot: "gloves",
  tier: 5,                 
  baseDamage: 620,         
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 620",
      gold: 456000,
      cost: [
        { itemName: "Dimensional Garbage", quantity: 3 },
        { itemName: "Dimensional Resistant Metal", quantity: 2 },
        { itemName: "Gold Strands", quantity: 5 },
      ],
    },
    { tier: 2, bonus: "Level II · Damage 960" },
    { tier: 3, bonus: "Level III · Damage 1488" },
    { tier: 4, bonus: "Level IV · Damage 2300" },
    { tier: 5, bonus: "Level V · Damage 3500" },
  ],
  
  recipe: {
    gold: 456000,
    materials: [
      { itemName: "Dimensional Garbage", quantity: 3 },
      { itemName: "Dimensional Resistant Metal", quantity: 2 },
      { itemName: "Gold Strands", quantity: 5 },
    ],
  },
  summary: "DLC gloves with upgrades I–V.",
},

{
  id: "ragnarok-big-sword",
  name: "Ragnarok Big Sword",
  kind: "weapons",
  slot: "big-sword",
  tier: 5,                 // DLC bucket
  baseDamage: 775,         // Level I
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 775",
      gold: 456000,
      cost: [
        { itemName: "Fossil Bone", quantity: 3 },
        { itemName: "Heavy Metal Plates", quantity: 2 },
        { itemName: "Hardened Steel", quantity: 5 },
      ],
    },
    { tier: 2, bonus: "Level II · Damage 1200" },
    { tier: 3, bonus: "Level III · Damage 1860" },
    { tier: 4, bonus: "Level IV · Damage 2886" },
    { tier: 5, bonus: "Level V · Damage 4473" },
  ],
  // Show Level I craft for quick reference
  recipe: {
    gold: 456000,
    materials: [
      { itemName: "Fossil Bone", quantity: 3 },
      { itemName: "Heavy Metal Plates", quantity: 2 },
      { itemName: "Hardened Steel", quantity: 5 },
    ],
  },
  summary: "DLC big sword with upgrades I–V.",
},


{
  id: "valkyrie-spear",
  name: "Valkyrie Spear",
  kind: "weapons",
  slot: "spear",
  tier: 5,
  baseDamage: 620,
  enchantments: [
    {
      tier: 1,
      bonus: "Level I · Damage 620",
      gold: 456000,
      cost: [
        { itemName: "Dimensional Res. Mineral Ore", quantity: 3 },
        { itemName: "Carbon Fiber Plate", quantity: 2 },
        { itemName: "Desert Steel Sheet", quantity: 5 },
      ],
    },
    { tier: 2, bonus: "Level II · Damage 960" },
    { tier: 3, bonus: "Level III · Damage 1488" },
    { tier: 4, bonus: "Level IV · Damage 2300" },
    { tier: 5, bonus: "Level V · Damage 4473" },
  ],
  // Keep Blacksmith Recipe useful by showing Level I craft here:
  recipe: {
    gold: 456000,
    materials: [
      { itemName: "Dimensional Res. Mineral Ore", quantity: 3 },
      { itemName: "Carbon Fiber Plate", quantity: 2 },
      { itemName: "Desert Steel Sheet", quantity: 5 },
    ],
  },
  summary: "DLC spear with upgrades I–V.",
},

// DLC – Runic Bow
{
  id: "runic-bow",
  name: "Runic Bow",
  kind: "weapons",
  slot: "bow",
  tier: 5,                 // DLC bucket
  baseDamage: 465,         // Level I
  enchantments: [
    { tier: 1, bonus: "Level I · Damage 465", gold: 456000,
      cost: [
        { itemName: "Fossil Bone", quantity: 3 },
        { itemName: "Small Spectral Flame", quantity: 2 },
        { itemName: "Ancient Wood", quantity: 5 },
      ],
    },
    { tier: 2, bonus: "Level II · Damage 720" },
    { tier: 3, bonus: "Level III · Damage 1117" },
    { tier: 4, bonus: "Level IV · Damage 1731" },
    { tier: 5, bonus: "Level V · Damage 2683" },
  ],
  // Show Level I craft for quick reference
  recipe: {
    gold: 456000,
    materials: [
      { itemName: "Fossil Bone", quantity: 3 },
      { itemName: "Small Spectral Flame", quantity: 2 },
      { itemName: "Ancient Wood", quantity: 5 },
    ],
  },
  summary: "DLC bow with upgrades I–V.",
},


];



/** Helpers to derive dropdown-friendly fields from weaponStats */
function buildEnchantments(ws: WeaponStats): EnchantmentTier[] | undefined {
  if (!ws.enchant) return undefined; // no enchantments available
  return [
    { tier: 1, bonus: `Damage ${ws.enchant["+"]}` },
    { tier: 2, bonus: `Damage ${ws.enchant["++"]}` },
    { tier: 3, bonus: `Damage ${ws.enchant["+++"]}` },
  ];
}





export const WEAPONS: WeaponItem[] = BASE_WEAPONS.map((w) => {
  const ws = w.weaponStats;
  return {
    ...w,
    baseDamage: ws?.base ?? w.baseDamage,
    enchantments: w.enchantments ?? (ws ? buildEnchantments(ws) : undefined),
    recipe: w.recipe ?? BLACKSMITH_RECIPES_BY_ID[w.id] ?? undefined,
  };
});
