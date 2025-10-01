// app/components/ui/PriceCoins.tsx
import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const COIN = require("../assets/images/detail-icons/Coin-norm.png");
const POP  = require("../assets/images/detail-icons/Coin-pop.png");

export function PriceLine({
  craft,
  upgrade,
}: {
  craft?: number | null;
  upgrade?: number | null;
}) {
  if (craft == null && upgrade == null) return null;
  return (
    <Text style={styles.line}>
      {craft != null && (
        <>
          <Image source={COIN} style={styles.coin} />{" "}
          <Text style={styles.strong}>{craft}</Text>
        </>
      )}
      {upgrade != null && (
        <>
          {"   Upgrade "}
          <Image source={POP} style={styles.coin} />
          <Text style={styles.strong}>{upgrade}</Text>
        </>
      )}
    </Text>
  );
}

export function MerchantPricesInline({
  sell,
  popular,
  buy,
}: {
  sell?: number | null;
  popular?: number | null;
  buy?: number | null;
}) {
  const hasSell = typeof sell === "number";
  const hasPop  = typeof popular === "number";
  const hasBuy  = typeof buy === "number";
  if (!hasSell && !hasPop && !hasBuy) return null;

  return (
    <Text style={styles.line}>
      {hasSell && (
        <>
          <Image source={COIN} style={styles.coin} /> <Text style={styles.numSell}>{sell!.toLocaleString()}</Text>
        </>
      )}
      {hasPop && (
        <>
          {"  "}
          <Text style={styles.label}>Popular </Text>
          <Image source={POP} style={styles.coin} /> <Text style={styles.numPop}>{popular!.toLocaleString()}</Text>
        </>
      )}
      {hasBuy && (
        <>
          {"  "}
          <Text style={styles.label}>Buy </Text>
          <Image source={COIN} style={styles.coin} /> <Text style={styles.numBuy}>{buy!.toLocaleString()}</Text>
        </>
      )}
    </Text>
  );
}

export function GoldRow({ gold }: { gold?: number | null }) {
  if (typeof gold !== "number") return null;
  return (
    <View style={styles.goldRow}>
      <Image source={POP} style={[styles.coin, { marginRight: 6 }]} />
      <Text style={styles.goldText}>Gold: {gold.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: { marginTop: 4, fontSize: 12, color: "#FFFFFF" },
  strong: { fontSize: 14, fontWeight: "500", color: "#FFFFFF" },
  coin: { width: 20, height: 14 },
  label: { fontSize: 12, color: "#FFFFFF" },

  numSell: { fontSize: 14, fontWeight: "700", color: "#ffd166" },
  numPop:  { fontSize: 14, fontWeight: "700", color: "#ffe69a" },
  numBuy:  { fontSize: 14, fontWeight: "700", color: "#b9fbc0" },

  goldRow: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  goldText: { color: "#ffd166", fontSize: 13 },
});
