// constants/gears.ts
export type GearId = "weapons" | "armour" | "amulets"| "merchant";

export const GEAR: {
  id: GearId;
  label: string;
  text: string;   // text color
  bg: string;     // button background
  border: string; // border (when inactive)
}[] = [
   
  {    id: "weapons",    label: "Weapons",     text: "#62E6DB",     bg: "#2F3646",     border: "#5A6378", },
  {    id: "armour",     label: "Armour",      text: "#ffc052ff",     bg: "#2F3646",     border: "#5A6378", },
  {    id: "amulets",    label: "Amulets",     text: "#FF9BD7",     bg: "#2F3646",     border: "#5A6378", },
  {    id: "merchant",   label: "Merchant",    text: "#f36b6bff",   bg: "#2F3646",     border: "#5A6378" },
];
