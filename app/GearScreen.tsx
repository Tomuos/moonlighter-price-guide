// app/GearScreen.tsx
import React, { useMemo, useState } from "react";
import { View, FlatList, Text } from "react-native"; // ← add Text



import GearFilterGrid, { GearKind } from "@/components/GearFilterGrid";
import SearchBar from "@/components/SearchBar";

// Temp stub data — swap for your real gear data when ready
type GearItem = { id: string; name: string; kind: GearKind };
const ALL_GEAR: GearItem[] = [
  { id: "w1", name: "Iron Sword",   kind: "weapons" },
  { id: "w2", name: "Forest Spear", kind: "weapons" },
  { id: "a1", name: "Golem Plate",  kind: "armour"  },
  { id: "r1", name: "Ring of Wind", kind: "rings"   },
];

export default function GearScreen() {
  // mirror Dungeon: no extra padding here; index handles safe-area
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<GearKind>("all");

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool = filter === "all" ? ALL_GEAR : ALL_GEAR.filter(g => g.kind === filter);
    if (!q) return pool;
    return pool.filter(g => g.name.toLowerCase().includes(q));
  }, [query, filter]);

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <GearFilterGrid value={filter} onChange={setFilter} />

      <SearchBar
        value={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
        placeholder="Search Items..."
        style={{ marginTop: 10, marginBottom: 10 }} // same margins as Dungeons
      />

      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#2F3646",
              borderColor: "#5A6378",
              borderWidth: 1,
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 12,
            }}
          >
            {/* Match Dungeon list typography spacing */}
            <View style={{ gap: 4 }}>
              <View>
                <Text style={{ color: "#E6EAF3", fontWeight: "800", fontSize: 16 }}>
                  {item.name}
                </Text>
              </View>
              <View>
                <Text style={{ color: "#9AA3B2", fontWeight: "700", fontSize: 12 }}>
                  {item.kind.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        style={{ backgroundColor: "transparent" }} // mirror Dungeons
      />
    </View>
  );
}
