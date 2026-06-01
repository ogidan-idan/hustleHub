import { StyleSheet } from "react-native";

export const FeatureItemStyle = StyleSheet.create({
    container: { flexDirection: "row", gap: 20, alignItems: "center", backgroundColor: "rgba(255,255,255, 0.1)", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 15 },
    iconBox: { backgroundColor: "rgba(255,255,255, 0.2)", padding: 10, borderRadius: 10 },
    textContainer: { maxWidth: "70%" },
    boldText: { color: "white", fontSize: 18, lineHeight: 24, fontWeight: 700 },
    smallText: { color: "white", fontSize: 14, lineHeight: 18 }
});