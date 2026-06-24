import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";

export type Task = {
    id: number;
    status: "pending" | "completed";
    title: string;
    description: string;
    due_date: string;
    priority?: "low" | "medium" | "high",
};

export type TaskCardCheckableProps = {
    task: Task,
    handlePress: (taskId: number) => () => void;
}

export type ButtonProps = {
    title: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    variant: {
        container: StyleProp<ViewStyle>;
        text: StyleProp<TextStyle>;
    },
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}