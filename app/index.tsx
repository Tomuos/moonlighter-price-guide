import { useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getItems } from "./data/items";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import DungeonFilterGrid from "../components/DungeonFilterGrid";
import type { DungeonId } from "../constants/types";
import { PALETTE } from "../constants/Colors";


export default function Home() {
  const [query, setQuery] = useState("");
  const [dungeon, setDungeon] = useState<DungeonId | "all">("all");
  const insets = useSafeAreaInsets();

 const data = useMemo(() => {
  const all = getItems(dungeon);                 // A→Z by default
  const q = query.trim().toLowerCase();
  if (!q) return all;
  return all.filter(it =>
    it.name.toLowerCase().includes(q) ||
    (it.notes?.toLowerCase().includes(q) ?? false) ||
    it.category.toLowerCase().includes(q)
  );
}, [query, dungeon]);

  return (
    
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Text style={styles.title}>Moonlighter Price Guide</Text>
      <DungeonFilterGrid value={dungeon} onChange={setDungeon} />
      <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => <ItemCard item={item} />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    backgroundColor: PALETTE.parchment, // ← parchment tint
  },
  title: { fontSize: 28, fontWeight: "900", color: "#0f1220" },
});
