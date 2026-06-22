import { Text, TouchableOpacity, View } from "react-native";
import { TasksScreenStyle } from "../styles/task";
import { useNavigation } from "../contexts/navigation";
import { ArrowLeft } from "lucide-react-native";

export const TasksScreenHeader = () => {
    const { goBack } = useNavigation();

    return (
        <View style={[TasksScreenStyle.container, { paddingTop: 40, paddingBottom: 20, gap: 24, boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px", borderBottomWidth: 1, borderBottomColor: "#ccc" }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 30, marginLeft: 10 }}>
                <TouchableOpacity onPress={goBack()} style={{ cursor: "pointer" }}>
                    <ArrowLeft />
                </TouchableOpacity>
                <Text style={{ fontSize: 26, fontWeight: 600 }}>My Tasks</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={[TasksScreenStyle.statusFilter, TasksScreenStyle.statusFilterActive]}>
                    <Text style={[TasksScreenStyle.statusFilterText, TasksScreenStyle.statusFilterActiveText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={TasksScreenStyle.statusFilter}>
                    <Text style={[TasksScreenStyle.statusFilterText]}>Pending</Text>
                </TouchableOpacity>
                <TouchableOpacity style={TasksScreenStyle.statusFilter}>
                    <Text style={[TasksScreenStyle.statusFilterText]}>Completed</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}