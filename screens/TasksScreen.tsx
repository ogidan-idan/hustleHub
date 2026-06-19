import React, { useState } from 'react'
import { AppLayout } from '../App'
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '../contexts/navigation';
import { ArrowLeft, CalendarIcon, CheckIcon, PlusIcon } from 'lucide-react-native';
import { COLORS } from '../constants/colors';

export type Task = {
    id: number;
    status: "pending" | "completed";
    title: string;
    description: string;
    due_date: Date;
    priority?: "low" | "medium" | "high",
};

const tasks: Task[] = [
    { id: 1, title: "Complete Chemistry Assigment", status: "pending", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-05-30"), priority: "high" },
    { id: 2, title: "Study for Midterm Exam", status: "pending", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-06-01"), priority: "high" },
    { id: 3, title: "Submit Lab Report", status: "completed", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-05-31"), priority: "medium" },
    { id: 4, title: "Read Chapter 5 - Economics", status: "pending", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-06-02"), priority: "low" },
    { id: 5, title: "Group Project Meeting", status: "pending", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-05-29"), priority: "medium" },
    { id: 6, title: "Group Project Meeting", status: "pending", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, est sequi vel repudiandae amet pariatur delectus exercitationem omnis corrupti?", due_date: new Date("2025-05-29"), priority: "medium" },
];


export const TasksScreen = () => {
    const [taskList, setTaskList] = useState(tasks);

    function handleCheck(taskId: number) {
        return () => {
            const updatedTaskList = [...taskList].map((value) => {
                if (value.id !== taskId) return value;

                const newStatus = value.status == "pending" ? "completed" : "pending";
                const newValue: Task = { ...value, status: newStatus };

                return newValue;
            });

            setTaskList(updatedTaskList);
        }
    }
    return (
        <AppLayout>
            <TasksScreenHeader />
            {/* <FlatList/> */}
            <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#f8f8f8", gap: 16, flex: 1 }}>
                {
                    taskList.map((task, index) => {
                        return (<TaskCardCheckable task={task} handlePress={handleCheck} key={index} />);
                    })
                }
            </ScrollView>
        </AppLayout>
    );
}

const TasksScreenHeader = () => {
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
type TaskCardCheckableProps = {
    task: Task,
    handlePress: (taskId: number) => () => void;
}
const TaskCardCheckable = ({ task, handlePress }: TaskCardCheckableProps) => {
    const isChecked = task.status == "completed";

    function getPriorityColor(priority: Task["priority"], type: "bg"|"color"){
        switch(priority){
            case "high":
                return type === "bg"?TasksScreenStyle.taskStatusBadgeHigh:TasksScreenStyle.taskStatusHighText;
            case "medium":
                return type === "bg"?TasksScreenStyle.taskStatusBadgeMedium:TasksScreenStyle.taskStatusMediumText;
            case "low":
                return type === "bg"?TasksScreenStyle.taskStatusBadgeLow:TasksScreenStyle.taskStatusLowText;
            default: 
                return {};
        }
    }
    return (
        <View style={TasksScreenStyle.taskContainer}>
            <TouchableOpacity onPress={handlePress(task.id)} style={[TasksScreenStyle.checkbox, isChecked && TasksScreenStyle.checkboxChecked]}>
                {isChecked && <CheckIcon color={COLORS.primary} size={12} strokeWidth={5} />}
            </TouchableOpacity>

            <View style={TasksScreenStyle.taskBody}>
                <Text style={[TasksScreenStyle.taskTitle, isChecked && { textDecorationLine: "line-through" }]}>{task.title}</Text>
                <View style={TasksScreenStyle.taskDetails}>
                    <View style={TasksScreenStyle.taskTime}>
                        <CalendarIcon size={16} color={COLORS.grey} />
                        <Text style={TasksScreenStyle.taskTimeText}>{task.due_date.toDateString()}</Text>
                    </View>

                    <View style={[TasksScreenStyle.taskStatusBadge, getPriorityColor(task.priority, "bg")]}>
                        <Text style={[TasksScreenStyle.taskStatusText, getPriorityColor(task.priority, "color")]}>{task.priority}</Text>
                    </View>

                </View>
            </View>
        </View>
    );
}

const TasksScreenStyle = StyleSheet.create({
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