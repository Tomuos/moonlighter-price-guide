import { View, Image, Text } from "react-native";
import { Item } from "../constants/types"; // adjust path if needed

export default function ItemCard({ item }: { item: Item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        gap: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
      }}
    >
      {/* Render image only if it exists */}
      {item.image && (
        <Image
          source={item.image}
          style={{ width: 48, height: 48, borderRadius: 8 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.name}</Text>
        <Text>
          💰 {item.price.normal}
          {item.price.popular ? ` / ⭐ ${item.price.popular}` : ""}
        </Text>
        {item.notes ? (
          <Text style={{ color: "#6b7280" }}>{item.notes}</Text>
        ) : null}
      </View>
    </View>
  );
}
