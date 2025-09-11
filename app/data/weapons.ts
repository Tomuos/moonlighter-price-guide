import type { GearItem } from "@/constants/types";

export const WEAPONS: GearItem[] = [
  {
    id: "training-short-sword",
    name: "Training Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 0,
    weaponStats: {
      base: 20,
      enchant: { "+": 27, "++": 34, "+++": 41 },
    },
    summary: "Basic training blade.",
  },
  {
    id: "soldier-short-sword",
    name: "Soldier Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 1,
    weaponStats: {
      base: 50,
      enchant: { "+": 74, "++": 98, "+++": 122 },
    },
  },
  {
    id: "rusty-short-sword",
    name: "Rusty Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 1,
    weaponStats: {
      base: 40,
      enchant: { "+": 64, "++": 88, "+++": 112 },
      special: "Stun",
    },
  },
  {
    id: "knight-short-sword",
    name: "Knight Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 2,
    weaponStats: {
      base: 150,
      enchant: { "+": 175, "++": 200, "+++": 225 },
    },
  },
  {
    id: "venom-short-sword",
    name: "Venom Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 2,
    weaponStats: {
      base: 110,
      enchant: { "+": 135, "++": 160, "+++": 185 },
      special: "Poison",
    },
  },
  {
    id: "commander-short-sword",
    name: "Commander Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 3,
    weaponStats: {
      base: 250,
      enchant: { "+": 276, "++": 302, "+++": 328 },
    },
  },
  {
    id: "reborn-short-sword",
    name: "Reborn Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 3,
    weaponStats: {
      base: 175,
      enchant: { "+": 201, "++": 227, "+++": 253 }, // your list had 253 without the +++
      special: "Burn",
    },
  },
  {
    id: "king-short-sword",
    name: "King Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 4,
    weaponStats: {
      base: 400,
      enchant: { "+": 431, "++": 462, "+++": 493 },
    },
  },
  {
    id: "vampire-short-sword",
    name: "Vampire Short Sword",
    kind: "weapons",
    slot: "short-sword",
    tier: 4,
    weaponStats: {
      base: 300,
      enchant: { "+": 331, "++": 362, "+++": 393 },
      special: "Shock",
    },
  },
];
