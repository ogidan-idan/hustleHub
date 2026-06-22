import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const TasksScreenStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    statusFilter: {
        backgroundColor: "#eee",
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 20
    },
    statusFilterText: {
        color: "#555"
    },
    statusFilterActive: {
        backgroundColor: COLORS.primary
    },
    statusFilterActiveText: {
        color: "white",
    },
    taskContainer: {
        padding: 20,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
        backgroundColor: "white",
        borderRadius: 20
    },
    taskBody: {
        gap: 10
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 500
    },
    taskDetails: {
        flexDirection: "row",
        gap: 20
    },
    taskTime: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    taskTimeText: {
        color: "#555"
    },
    taskStatusBadge: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 30
    },
    taskStatusBadgeHigh: {
        backgroundColor: "#ffe1e4",
        borderColor: "#fd8f87",
    },
    taskStatusBadgeMedium: {
        backgroundColor: "#fff9c4",
        borderColor: "#fff59d",
    },
    taskStatusBadgeLow: {
        backgroundColor: "#c8e6c9",
        borderColor: "#a5d6a7",
    },
    taskStatusText: {
        fontSize: 12,
        fontWeight: 500
    },
    taskStatusHighText: {
        color: "#ac1308",
    },
    taskStatusMediumText: {
        color: "#fbc02d",
    },
    taskStatusLowText: {
        color: "#388e3c",
    },
    checkbox: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: "#555",
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8
    },
    checkboxChecked: {
        borderColor: COLORS.primary
    }
});