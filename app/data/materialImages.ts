import type { ImageSourcePropType } from "react-native";
import { itemImages } from "./itemImages";
import { merchantImages } from "./merchantImages";
import { gearImages } from "./gearImages";

export const materialImages: Record<string, ImageSourcePropType> = {
  // precedence: dungeon items > merchant/DLC > gear
  ...itemImages,
  ...merchantImages,
  ...gearImages,
} as const;
