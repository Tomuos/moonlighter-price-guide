// app/utils/images.ts
import { materialImages } from "../data/materialImages";
import { slugify } from "../utils/slug";

function romanToArabic(r: string): number | null {
  const map: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0, prev = 0;
  for (let i = r.length - 1; i >= 0; i--) {
    const v = map[r[i].toUpperCase()] || 0;
    if (!v) return null;
    total += v < prev ? -v : v;
    prev = v;
  }
  return total;
}

function withRomanVariants(k: string): string[] {
  const out = [k];
  const m = k.match(/-(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i);
  if (m) {
    const upper = k.replace(m[0], "-" + m[1].toUpperCase());
    out.push(upper);
    const n = romanToArabic(m[1]);
    if (n) out.push(k.replace(m[0], "-" + n));
  }
  return out;
}

export function getMatImage(itemId?: string, itemName?: string) {
  const base: string[] = [];
  if (itemId) base.push(itemId, slugify(itemId));
  if (itemName) {
    const s = slugify(itemName);
    base.push(
      s,
      s.replace(/-armou?r-/g, "-"),
      s.replace(/-armor-/g, "-armour-"),
      s.replace(/-armour-/g, "-armor-")
    );
  }

  const candidates = new Set<string>();
  for (const k of base) {
    for (const v of withRomanVariants(k)) {
      candidates.add(v);
      candidates.add(v.replace(/-/g, "_"));
    }
  }

  for (const k of candidates) {
    const hit = (materialImages as any)[k];
    if (hit) return hit;
  }
  return null;
}
