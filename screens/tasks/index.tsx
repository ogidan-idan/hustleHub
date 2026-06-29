import { useEffect, useState } from 'react'
import { AppLayout } from '../../App'
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../../type';
import { TasksScreenHeader } from '../../components/task-header';
import { TaskCardCheckable } from '../../components/task-checkable';
import { PackageOpenIcon, PlusIcon } from 'lucide-react-native';
import { COLORS } from '../../constants/colors';
import { Button } from '../../components/button';
import { roundedIconBtn, secondary } from '../../styles/button';
import { tasks } from '../../data/tasks';
import { useNavigation } from '../../contexts/navigation';
import { getTasks } from '../../services/task-service';

const API_BASE_URL = "https://api.mockfly.dev/mocks/1349e1e4-4b57-4ba3-bb91-6bd55f140a7d";
export const TasksScreen = () => {
    const {handleNavigate} = useNavigation();
    const [taskList, setTaskList] = useState<Task[]>(tasks);

    const [taskLoading, setTaskLoading] = useState<boolean>(false);

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

    async function fetchTaskList() {
        try {
            setTaskLoading(true);

            const savedTasks = await getTasks();
            setTaskList(savedTasks);
            // const response = await fetch(API_BASE_URL + "/tasks", {
            //     method: "GET",
            //     headers: {
            //         "Accept": "application/json"
            //     }
            // });

            // if (response.ok) {
            //     // fill taskList state
            //     const data: Task[] = await response.json();
            //     setTaskList(data);
            // }
        } catch (error) {
            console.log(error);
        } finally {
            setTaskLoading(false);
        }
    }

    useEffect(() => {
        fetchTaskList();
    }, []);

    return (
        <AppLayout>
            <TasksScreenHeader />
            <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#f8f8f8", gap: 16, flex: 1 }}>
                {
                    taskLoading == true ? (
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", opacity: 0.2 }}>
                            <ActivityIndicator size={64} color={COLORS.primary} />
                            <Text style={{ fontSize: 36 }}>Tasks loading...</Text>
                        </View>
                    ) :
                        taskList.length == 0 ? (
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", opacity: 0.2 }}>
                                <PackageOpenIcon size={100} />
                                <Text style={{ fontSize: 36 }}>No tasks found</Text>
                            </View>
                        ) :
                        <>
                           { taskList.map((task, index) => {
                                return (<TaskCardCheckable task={task} handlePress={handleCheck} key={index} />);
                            })}
                            <View style={{height: 300, width: "100%"}}></View>
                        </>
                }
                <Button onPress={handleNavigate('tasks.create')} title={<PlusIcon size={32} color={"white"} />} variant={roundedIconBtn} />
            </ScrollView>
        </AppLayout>
    );
}





