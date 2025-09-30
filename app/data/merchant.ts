
import type { MerchantItem } from "../../constants/types";


export const MERCHANT: MerchantItem[] = [

  // Broken Weapons
{
  id: "broken-club",
  name: "Broken Club",
  kind: "merchant",
  category: "broken",
  summary: "A battered weapon fragment. Mostly useless, but might sell for a bit.",
  sellPrice: 330,
  popularPrice: 405,
},
{
  id: "broken-crossbow",
  name: "Broken Crossbow",
  kind: "merchant",
  category: "broken",
  summary: "Scraps of a ranged weapon. Valueless in combat.",
  sellPrice: 11000,
  popularPrice: 13500,
},
{
  id: "broken-dagger",
  name: "Broken Dagger",
  kind: "merchant",
  category: "broken",
  summary: "The blade is snapped. Beyond repair.",
  sellPrice: 22000,
  popularPrice: 27000,
},
{
  id: "broken-katana",
  name: "Broken Katana",
  kind: "merchant",
  category: "broken",
  summary: "A once-sharp edge, now shattered.",
  sellPrice: 2200,
  popularPrice: 2700,
},
{
  id: "broken-mace",
  name: "Broken Mace",
  kind: "merchant",
  category: "broken",
  summary: "The head is missing, only the handle remains.",
  sellPrice: 330,
  popularPrice: 405,
},
{
  id: "broken-morningstar",
  name: "Broken Morningstar",
  kind: "merchant",
  category: "broken",
  summary: "The spiked ball is cracked and useless.",
  sellPrice: 11000,
  popularPrice: 13500,
},
{
  id: "broken-rapier",
  name: "Broken Rapier",
  kind: "merchant",
  category: "broken",
  summary: "Slender but fragile — now broken beyond use.",
  sellPrice: 2200,
  popularPrice: 2700,
},
{
  id: "broken-sling",
  name: "Broken Sling",
  kind: "merchant",
  category: "broken",
  summary: "The strap is torn; no longer works.",
  sellPrice: 330,
  popularPrice: 405,
},
{
  id: "broken-whip",
  name: "Broken Whip",
  kind: "merchant",
  category: "broken",
  summary: "The leather strands are frayed.",
  sellPrice: 22000,
  popularPrice: 27000,
},


  // Miscellaneous merchant items
  {
    id: "dimensional-suit-fabric",
    name: "Dimensional Suit Fabric",
    kind: "merchant",
    category: "misc",
    summary: "Strange cloth infused with dimensional energy.",
  },
  {
    id: "light-power-crystal",
    name: "Light Power Crystal",
    kind: "merchant",
    category: "misc",
    summary: "A glowing shard humming with energy.",
  },


  // MERCHANT MISC
{
  id: "ghost-in-a-bottle",
  name: "Ghost in a Bottle",
  kind: "merchant",
  category: "misc",
  summary: "A faint spirit sealed away. Strange and eerie.",
},
{
  id: "gold-feather",
  name: "Gold Feather",
  kind: "merchant",
  category: "misc",
  summary: "A rare golden feather that shimmers faintly.",
},
{
  id: "obsidian-rock",
  name: "Obsidian Rock",
  kind: "merchant",
  category: "misc",
  summary: "Dark volcanic glass, sharp to the touch.",
},
{
  id: "plasma-charge",
  name: "Plasma Charge",
  kind: "merchant",
  category: "misc",
  summary: "Condensed energy ready to explode on impact.",
},
{
  id: "poison-treated-glass",
  name: "Poison Treated Glass",
  kind: "merchant",
  category: "misc",
  summary: "Glass coated with a toxic sheen.",
},
{
  id: "shock-absorb-material",
  name: "Shock Absorb Material",
  kind: "merchant",
  category: "misc",
  summary: "Special padding that reduces electric shock.",
},
{
  id: "tech-explosive",
  name: "Tech Explosive",
  kind: "merchant",
  category: "misc",
  summary: "A volatile device from the Tech Dungeon.",
},


  // ==================
  //  POTIONS
  // =================
  {
    id: "hp-potion-1", name: "HP Potion I", kind: "merchant", category: "potion",
    tier: 1, 
    hpRestore: 40,
    summary: "Should always have one or two of these on hand.",
    potionRecipe: {
      gold: 125,
      cost: [{ itemName: "Rich Jelly", quantity: 1 }],
    },
  },
  {
    id: "hp-potion-2", name: "HP Potion II", kind: "merchant", category: "potion",
    tier: 2, 
    hpRestore: 75,
    summary: "Definitely worth the price.",
    potionRecipe: {
      gold: 800,
      cost: [
        { itemName: "Rich Jelly", quantity: 1 },
        { itemName: "Venom Jelly", quantity: 1 },
      ],
    },
  },
  {
    id: "hp-potion-3", name: "HP Potion III", kind: "merchant", category: "potion",
    tier: 3, 
    hpRestore: 200,
    summary: "Would’ve been nice to have this earlier…",
    potionRecipe: {
      gold: 3000,
      cost: [
        { itemName: "Rich Jelly", quantity: 1 },
        { itemName: "Fire Jelly", quantity: 1 },
      ],
    },
  },
  {
    id: "hp-potion-4", name: "HP Potion IV", kind: "merchant", category: "potion",
    tier: 4, 
    hpRestore: 500,
    summary: "The Witch has outdone herself here.",
    potionRecipe: {
      gold: 8000,
      cost: [
        { itemName: "Rich Jelly", quantity: 1 },
        { itemName: "Electric Jelly", quantity: 1 },
      ],
    },
  },

  // DLC tiers
  {
    id: "hp-potion-5", name: "HP Potion V", kind: "merchant", category: "potion",
    tier: 5, 
    hpRestore: 750,
    summary: "Should always have one or two of these on hand.",
  },
  {
    id: "hp-potion-6", name: "HP Potion VI", kind: "merchant", category: "potion",
    tier: 5, 
    hpRestore: 1500,
    summary: "Should always have one or two of these on hand.",
  },
  {
    id: "hp-potion-7", name: "HP Potion VII", kind: "merchant", category: "potion",
    tier: 5, 
    hpRestore: 2500,
    summary: "Should always have one or two of these on hand.",
  },
  {
    id: "hp-potion-8", name: "HP Potion VIII", kind: "merchant", category: "potion",
    tier: 5, 
    hpRestore: 4500,
    summary: "Should always have one or two of these on hand.",
  },
  {
    id: "hyper-potion", name: "Hyper Potion", kind: "merchant", category: "potion",
    tier: 5, 
    summary: "Restores you to full health",
     potionRecipe: {
      gold: 20520,
      cost: [
        { itemName: "Venom Jelly", quantity: 1 },
        { itemName: "Fire Jelly", quantity: 1 },
        { itemName: "Electric Jelly", quantity: 1 },
      ],
    },
  },

  // Guidance potions
  {
    id: "guidance-golem-potion", name: "Guidance Golem Potion",
    kind: "merchant", category: "potion", 
    summary: "Fireflies guide you to the next floor of the Golem Dungeon.",
  },
  {
    id: "guidance-forest-potion", name: "Guidance Forest Potion",
    kind: "merchant", category: "potion", 
    summary: "Fireflies guide you to the next floor of the Forest Dungeon.",
  },
  {
    id: "guidance-desert-potion", name: "Guidance Desert Potion",
    kind: "merchant", category: "potion", 
    summary: "Fireflies guide you to the next floor of the Desert Dungeon.",
  },
  {
    id: "guidance-tech-potion", name: "Guidance Tech Potion",
    kind: "merchant", category: "potion", 
    summary: "Fireflies guide you to the next floor of the Tech Dungeon.",
  },

  // Map reveal potions
  {
    id: "reveal-golem-potion", name: "Reveal Golem Potion",
    kind: "merchant", category: "potion",
    summary: "Reveals the Golem Dungeon map upon use.",
  },
  {
    id: "reveal-forest-potion", name: "Reveal Forest Potion",
    kind: "merchant", category: "potion", 
    summary: "Reveals the Forest Dungeon map upon use.",
  },
  {
    id: "reveal-desert-potion", name: "Reveal Desert Potion",
    kind: "merchant", category: "potion", 
    summary: "Reveals the Desert Dungeon map upon use.",
  },
  {
    id: "reveal-tech-potion", name: "Reveal Tech Potion",
    kind: "merchant", category: "potion", 
    summary: "Reveals the Tech Dungeon map upon use.",
  },
];
