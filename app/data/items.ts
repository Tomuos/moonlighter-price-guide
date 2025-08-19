import { Item } from "../../constants/types";

export const ITEMS: Item[] = [
  {
    id: "broken-sword",
    name: "Broken Sword",
    dungeon: "golem",
    price: { normal: 100, popular: 150 },
    notes: "Common drop from golems",
    tags: ["weapon", "metal", "common"]
  },
  {
    id: "fabric",
    name: "Fabric",
    dungeon: "golem",
    price: { normal: 150, popular: 200 },
    tags: ["cloth", "material"]
  }
];
