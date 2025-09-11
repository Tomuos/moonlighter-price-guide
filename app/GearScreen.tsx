import { useMemo, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import type { GearId } from "../constants/gear";
import { getMoreItems } from "./data/moreItems";
import GearCard from "../components/GearCard";
import GearFilterGrid from "../components/GearFilterGrid";
import SearchBar from "../components/SearchBar";

export default function GearScreen() {
  const [gear, setGear] = useState<GearId | "all">("all");
  const [query, setQuery] = useState("");

  const data = useMemo(() => {
    const all = getMoreItems(gear);
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(
      (it) =>
        it.name.toLowerCase().includes(q) ||
        (it.summary?.toLowerCase().includes(q) ?? false)
    );
  }, [gear, query]);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        {/* Static header (buttons + search) */}
        <View style={styles.header}>
          <GearFilterGrid value={gear} onChange={setGear} />
          <SearchBar value={query} onChange={setQuery} />
        </View>

        {/* Scrollable list */}
        <FlatList
          data={data}
          keyExtractor={(it) => it.id}
          renderItem={({ item }) => <GearCard gear={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },

  // single container (same padding as Dungeons)
  content: {
    flex: 1,
    paddingHorizontal: 1,
    paddingBottom: 24,
  },

  header: {
    marginBottom: 12,
    gap: 12,
  },

  // optional: extra spacing at bottom for scroll comfort
  listContent: {
    paddingBottom: 12,
  },
});
