import type { GearItem } from "../../constants/types";

function isArmourSlot(s: GearItem["slot"]): s is ArmourSlot {
  return s === "helmet" || s === "chestplate" || s === "boots";
}

type ArmourSlot = "helmet" | "chestplate" | "boots";

const SLOT_ORDER: Record<ArmourSlot, number> = {
  helmet: 0,
  chestplate: 1,
  boots: 2,
};

export function sortArmour(items: GearItem[]) {
  return [...items].sort((a, b) => {
   
    const aSet = (a as any).setOrder as number | undefined;
    const bSet = (b as any).setOrder as number | undefined;
    if ((aSet ?? 99) !== (bSet ?? 99)) return (aSet ?? 99) - (bSet ?? 99);

    
    const aSlotOrder = isArmourSlot(a.slot) ? SLOT_ORDER[a.slot] : 99;
    const bSlotOrder = isArmourSlot(b.slot) ? SLOT_ORDER[b.slot] : 99;
    if (aSlotOrder !== bSlotOrder) return aSlotOrder - bSlotOrder;

    
    const aTier = (a as any).tier as number | undefined;
    const bTier = (b as any).tier as number | undefined;
    if ((aTier ?? 0) !== (bTier ?? 0)) return (aTier ?? 0) - (bTier ?? 0);

    
    return a.name.localeCompare(b.name);
  });
}