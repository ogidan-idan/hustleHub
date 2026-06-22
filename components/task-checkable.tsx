import { Text, TouchableOpacity, View } from "react-native";
import { TasksScreenStyle } from "../styles/task";
import { Task, TaskCardCheckableProps } from "../type";
import { CalendarIcon, CheckIcon } from "lucide-react-native";
import { COLORS } from "../constants/colors";

export const TaskCardCheckable = ({ task, handlePress }: TaskCardCheckableProps) => {
    const isChecked = task.status == "completed";

    function getPriorityColor(priority: Task["priority"], type: "bg" | "color") {
        switch (priority) {
            case "high":
                return type === "bg" ? TasksScreenStyle.taskStatusBadgeHigh : TasksScreenStyle.taskStatusHighText;
            case "medium":
                return type === "bg" ? TasksScreenStyle.taskStatusBadgeMedium : TasksScreenStyle.taskStatusMediumText;
            case "low":
                return type === "bg" ? TasksScreenStyle.taskStatusBadgeLow : TasksScreenStyle.taskStatusLowText;
            default:
                return {};
        }
    }

    function formatDate(date: string) {
        // convert to JS date object
        const newDate = new Date(date);
        // convert to readable string date
        return newDate.toDateString();
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
                        <Text style={TasksScreenStyle.taskTimeText}>{formatDate(task.due_date)}</Text>
                    </View>

                    <View style={[TasksScreenStyle.taskStatusBadge, getPriorityColor(task.priority, "bg")]}>
                        <Text style={[TasksScreenStyle.taskStatusText, getPriorityColor(task.priority, "color")]}>{task.priority}</Text>
                    </View>

                </View>
            </View>
        </View>
    );
}