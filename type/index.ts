
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