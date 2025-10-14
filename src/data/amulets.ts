import type { GearItem } from "../../constants/types";

export const AMULETS: GearItem[] = [
  { id: "anti-confusion-amulet", name: "Anti-Confusion Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Prevents stun effects. Found in Purple Chests in the Golem Dungeon." },

  { id: "anti-electricity-amulet", name: "Anti-Electricity Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Prevents all electric DoT effects, including puddles and monster attacks. Purple Chests in the Tech Dungeon." },

  { id: "anti-fire-amulet", name: "Anti-Fire Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Prevents all fire DoT effects, including lava puddles and monster attacks. Purple Chests in the Desert Dungeon." },

  { id: "anti-poison-amulet", name: "Anti-Poison Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Prevents all poison DoT effects, including puddles and poisonous monsters. Purple Chests in the Forest Dungeon." },

  { id: "barrier-amulet", name: "Barrier Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Grants a shield buff when entering a dungeon floor, but increases fall damage by 20%. Purple Chests in any Dungeon." },

  { id: "black-cat-amulet", name: "Black Cat Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Prevents fall damage and slowing, but reduces enemy drops by 20%. Purple Chests in any Dungeon." },

  { id: "carnivorous-mutae-amulet", name: "Carnivorous Mutae Amulet", kind: "amulets", slot: "amulet", tier: 2,
    summary: "Increases health by 20% but decreases defense by 10%. Drops from Carnivorous Mutae's Blue Chest." },

  { id: "charged-attack-amulet", name: "Charged Attack Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Holding the special attack key increases ability damage. Found in Slime Chests in the Wanderer Dungeon." },

  { id: "confu-elemental-amulet", name: "Confu Elemental Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Occasionally interrupts enemy attacks. Slime Chests in the Wanderer Dungeon." },

  { id: "electric-elemental-amulet", name: "Electric Elemental Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Occasionally applies an electric DoT to enemies. Slime Chests in the Wanderer Dungeon." },

  { id: "electric-puddle-amulet", name: "Electric Puddle Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "20% chance to spawn an electric puddle that deals 1/5th of current damage. Slime Chests in the Wanderer Dungeon." },

  { id: "emergency-attack-amulet", name: "Emergency Attack Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases attack power by 50% when HP < 20%. Purple Chests in any Dungeon." },

  { id: "emergency-defense-amulet", name: "Emergency Defense Amulet", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases defense by 30% when HP < 20%. Purple Chests in any Dungeon." },

  { id: "emergency-health-amulet", name: "Emergency Health Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases healing effect of potions by 50% when HP < 20%. Purple Chests in any Dungeon." },

  { id: "emergency-speed-amulet", name: "Emergency Speed Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases movement speed by 10% when HP < 20%. Purple Chests in any Dungeon." },

  { id: "energy-flux-amulet", name: "Energy Flux Amulet ", kind: "amulets", slot: "amulet", tier: 2,
    summary: "Increases Health by 20% but nullifies secondary attack damage. Drops from Energy Flux's Blue Chest." },

  { id: "familiar-amulet", name: "Familiar Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Increases the damage dealt by familiars. Slime Chests in the Wanderer Dungeon." },

  { id: "fenix-amulet", name: "Fenix Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Revives the player if they die, but the ring breaks. Purple Chests in any Dungeon." },

  { id: "fire-elemental-amulet", name: "Fire Elemental Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Occasionally applies a fire DoT while attacking. Slime Chests in the Wanderer Dungeon." },

  { id: "fire-puddle-amulet", name: "Fire Puddle Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "20% chance to spawn a lava puddle under Will’s feet, dealing 1/10th current damage as DoT. Slime Chests in the Wanderer Dungeon." },

  { id: "golem-king-amulet", name: "Golem King Amulet ", kind: "amulets", slot: "amulet", tier: 2,
    summary: "Increases health by 20% but decreases movement speed by 5%. Drops from Golem King and Blue Chests." },

  { id: "golem-turret-familiar-amulet", name: "Golem Turret Familiar Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Summons a Golem Turret Familiar (stacks with other familiar rings). Slime Chests in the Wanderer Dungeon." },

  { id: "graaf-generator-familiar-amulet", name: "Graaf Generator Familiar Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Summons a Graaf Generator Familiar (stacks with other familiar rings). Slime Chests in the Wanderer Dungeon." },

  { id: "hero-ring", name: "Hero Ring", kind: "amulets", slot: "amulet", tier: 3,
    summary: "At full health, every 3rd hit releases an energy slash. Slime Chests in the Wanderer Dungeon." },

  { id: "insta-kill-amulet", name: "Insta Kill Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Small chance for every 3rd hit to instantly kill enemies (not bosses). Slime Chests in the Wanderer Dungeon." },

  { id: "life-drain-amulet", name: "Life Drain Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Every 3rd hit restores health based on damage dealt. Slime Chests in the Wanderer Dungeon." },

  { id: "luck-amulet", name: "Luck Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases item drops by 20% but decreases defense by 10%. Purple Chests in any Dungeon." },

  { id: "mother-golem-familiar-amulet", name: "Mother Golem Familiar Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Summons a Mother Golem Familiar (stacks with other familiar rings). Slime Chests in the Wanderer Dungeon." },

  { id: "naja-amulet", name: "Naja Amulet ", kind: "amulets", slot: "amulet", tier: 2,
    summary: "Increases Health by 20% but decreases attack by 10%. Drops from Naja's Blue Chest." },

  { id: "poison-elemental-amulet", name: "Poison Elemental Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Applies poison DoT to enemies while attacking. Slime Chests in the Wanderer Dungeon." },

  { id: "poison-puddle-amulet", name: "Poison Puddle Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "20% chance to spawn a poison puddle under Will’s feet. Slime Chests in the Wanderer Dungeon." },

  { id: "spiked-roll-amulet", name: "Spiked Roll Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Dodge rolling deals ~1/10th of your damage to enemies rolled through. Slime Chests in the Wanderer Dungeon." },

  { id: "vampire-amulet", name: "Vampire Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Deal 20% less damage while restoring 2% of attack damage as health. Purple Chests in any Dungeon." },

  { id: "wanderer-amulet", name: "Wanderer Amulet ", kind: "amulets", slot: "amulet", tier: 1,
    summary: "Increases damage by 5%, but each attack may summon The Wanderer. Purple Chests in any Dungeon." },

  { id: "wind-tree-sprout-familiar-amulet", name: "Wind Tree Sprout Familiar Amulet", kind: "amulets", slot: "amulet", tier: 3,
    summary: "Summons a Wind Tree Sprout Familiar (stacks with other familiar rings). Slime Chests in the Wanderer Dungeon." },
];
