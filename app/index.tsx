import { useMemo, useState } from "react";
import { View, Text, FlatList,} from "react-native";
import { ITEMS } from "../app/data/items";                 // <-- adjust if needed
import type { DungeonId } from "../constants/types";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import DungeonFilterGrid from "../components/DungeonFilterGrid";

export default function Home() {
  const [query, setQuery] = useState("");
  const [dungeon, setDungeon] = useState<DungeonId | "all">("all");

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS
      .filter(it => dungeon === "all" || it.dungeon === dungeon)
      .filter(it =>
        !q ||
        it.name.toLowerCase().includes(q) ||
        it.tags?.some(t => t.toLowerCase().includes(q))
      );
  }, [query, dungeon]);

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "800" }}>Moonlighter Price Guide</Text>

      {/* Dungeon filter pills */}
      <DungeonFilterGrid value={dungeon} onChange={setDungeon} />
      

      <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />

      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </View>
  );
}
