import React, { PropsWithChildren, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { BriefcaseIcon, CheckSquareIcon, HomeIcon, ShoppingBagIcon, UserIcon } from "lucide-react-native";
import { COLORS } from '../constants/colors';
import { useNavigation } from '../contexts/navigation';

type Tab = "home" | "tasks" | "marketplace" | "hustle" | "profile";

export const TabBar = () => {
    const { currentPage, handleNavigate } = useNavigation();

    function isActive(tab: Tab) {
        return tab == currentPage;
    }

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "white", padding: 10, borderTopWidth: 0.5, borderTopColor: "#ebe6e7" }}>
            <Tab title={"Home"} icon={HomeIcon} active={isActive("home")} onPress={handleNavigate("home")} />

            <Tab title={"Tasks"} icon={CheckSquareIcon} active={isActive("tasks")} onPress={handleNavigate("tasks")} />

            <Tab title={"Marketplace"} icon={ShoppingBagIcon} active={isActive("marketplace")} onPress={handleNavigate("marketplace")} />

            <Tab title={"Hustle"} icon={BriefcaseIcon} active={isActive("hustle")} onPress={handleNavigate("hustle")} />

            <Tab title={"Profile"} icon={UserIcon} active={isActive("profile")} onPress={handleNavigate("profile")} />
        </View>)
}

const Tab = (props: any) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.active ? TabBarStyle.tabContainerActive : TabBarStyle.tabContainer}>
            <props.icon color={props.active ? COLORS.white : COLORS.grey} size={18} />
            <Text style={props.active ? TabBarStyle.tabTextActive : TabBarStyle.tabText}>{props.title}</Text>
        </TouchableOpacity>
    );
}


const TabBarStyle = StyleSheet.create({
    tabContainer: { alignItems: "center", gap: 2, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10 },
    tabContainerActive: { alignItems: "center", gap: 2, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10, backgroundColor: COLORS.primary },
    tabText: { color: COLORS.grey, fontSize: 12 },
    tabTextActive: { color: COLORS.white, fontSize: 12 },
});