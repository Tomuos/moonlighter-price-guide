import React, { useMemo, useState } from "react";
import { View, FlatList } from "react-native";

import DungeonFilterGrid from "../components/DungeonFilterGrid";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import { getItems } from "../src/data/items";
import type { DungeonId } from "../constants/types";

export default function DungeonsScreen() {
 
  const [query, setQuery] = useState("");
  const [dungeon, setDungeon] = useState<DungeonId | "all">("all");

  const data = useMemo(() => {
    const all = getItems(dungeon);
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((it) => {
      const name = it.name.toLowerCase();
      const notes = (it.notes ?? "").toLowerCase();
      const cat   = (it.category ?? "").toLowerCase();
      return name.includes(q) || notes.includes(q) || cat.includes(q);
    });
  }, [query, dungeon]);

  return (
  <View style={{ flex: 1, backgroundColor: "transparent" }}>
    <DungeonFilterGrid value={dungeon} onChange={setDungeon} />
    <SearchBar
      value={query}
      onChange={setQuery}
      onClear={() => setQuery("")}
      style={{ marginTop: 10, marginBottom: 10 }}
    />
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => <ItemCard item={item} />}
      contentContainerStyle={{ paddingBottom: 24 }}
      style={{ backgroundColor: "transparent" }}            // ⬅️ FlatList background
    />
  </View>
);

}
