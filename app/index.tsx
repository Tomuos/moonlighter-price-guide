import { useMemo, useState } from "react";
import { View,  FlatList, StyleSheet, ImageBackground, Image, useWindowDimensions } from "react-native";
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
  const { width } = useWindowDimensions();

  const headerHeight = Math.max(56, Math.min(80, width * 0.14));

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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/background/Revision.png")}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
        imageStyle={{ opacity: 0.9 }}
        accessible={false}
      />

      {/* Use ONLY this safe-area padding on the header (remove the separate spacer) */}
      <View style={[styles.header, { paddingTop: insets.top, height: headerHeight + insets.top }]}>
        <Image
          source={require("../assets/images/logo/Moonlighter-Logo.png")}
          style={{ height: headerHeight, width: width * 0.9 }}
          resizeMode="contain"
          accessible
          accessibilityLabel="Moonlighter Price Guide"
        />
      </View>

      <View style={styles.content}>
        <DungeonFilterGrid value={dungeon} onChange={setDungeon} />
        <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />
        <FlatList
          data={data}
          keyExtractor={(it) => it.id}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          renderItem={({ item }) => <ItemCard item={item} />}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B3F5EE", // your blue strip
     height: 70,
    marginBottom: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 12,
  },
  
});