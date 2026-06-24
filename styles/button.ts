import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const secondary = StyleSheet.create({
    container: { backgroundColor: "white", width: "85%", paddingHorizontal: 40, paddingVertical: 20, borderRadius: 15 },
    text: { textAlign: "center", fontWeight: 600, fontSize: 16, color: "#155dfc" }
});

export const primary = StyleSheet.create({
    container: { flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: COLORS.primary, width: "85%", paddingHorizontal: 40, paddingVertical: 20, borderRadius: 15 },
    text: { textAlign: "center", fontWeight: 600, fontSize: 16, color: "#FFF" }
});

export const roundedIconBtn = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary, width: 70, aspectRatio: 1, padding: 20, borderRadius: "100%", justifyContent: "center", alignItems: "center",
        position: 'absolute',
        bottom: 24,
        right: 24,
        boxShadow: "-4px 4px 8px rgba(0,0,0,0.2)",
    },
    text: { textAlign: "center", fontWeight: 600, fontSize: 16, color: "#fff" }
})