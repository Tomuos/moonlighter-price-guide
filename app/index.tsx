import { useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getItems } from "./data/items";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import DungeonFilterGrid from "../components/DungeonFilterGrid";
import type { DungeonId } from "../constants/types";


export default function Home() {
  const [query, setQuery] = useState("");
  const [dungeon, setDungeon] = useState<DungeonId | "all">("all");
  const insets = useSafeAreaInsets();

  const data = useMemo(() => {
  const all = getItems(dungeon); // A→Z by default
  const q = query.trim().toLowerCase();
  if (!q) return all;

  // 1) gather all items that match anywhere
  const matches = all.filter(it => {
    const name = it.name.toLowerCase();
    const notes = it.notes?.toLowerCase() ?? "";
    const cat = it.category.toLowerCase();
    return (
      name.includes(q) ||
      notes.includes(q) ||
      cat.includes(q)
    );
  });

  // 2) rank by relevance: name startsWith > name includes > category/notes startsWith > category/notes includes
  const score = (it: (typeof all)[number]) => {
    const name = it.name.toLowerCase();
    const notes = it.notes?.toLowerCase() ?? "";
    const cat = it.category.toLowerCase();

    if (name.startsWith(q)) return 0;
    if (name.includes(q))  return 1;
    if (cat.startsWith(q) || notes.startsWith(q)) return 2;
    return 3; // cat/notes include q
  };

  matches.sort((a, b) => {
    const sa = score(a);
    const sb = score(b);
    if (sa !== sb) return sa - sb;

    // tie-break: earlier index in the name comes first (then alpha)
    const ai = a.name.toLowerCase().indexOf(q);
    const bi = b.name.toLowerCase().indexOf(q);
    if (ai !== bi) return ai - bi;

    return a.name.localeCompare(b.name);
  });

  return matches;
}, [query, dungeon]);


  return (
    // SINGLE parent element
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Background image, absolutely positioned behind the content */}
      <ImageBackground
        source={require("../assets/images/Revision.png")} // make sure the path+case match
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
        imageStyle={{ opacity: 0.9 }}   // fade it so text stays readable
        accessible={false}
      />

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
    overflow: "hidden",          // <-- ADD: clips bounce/overscroll reveal
  },
  title: { fontSize: 28, fontWeight: "900", color: "#0f1220" },
});
