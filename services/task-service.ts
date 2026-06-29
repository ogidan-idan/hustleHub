import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Task } from "../type";
import { STORAGE_KEY } from "../constants";

const { getItem, setItem, mergeItem, removeItem } = useAsyncStorage(STORAGE_KEY['tasks']);

export const getTasks = async (): Promise<Task[]> => {
    const value = await getItem();
    if (value == null) {
        setItem(JSON.stringify([]));
        return [];
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        console.error("Error parsing tasks:", error);
        setItem(JSON.stringify([]));
        return [];
    }
}

export const saveTasks = async (tasks:Task[]) => {
    try {
        await setItem(JSON.stringify(tasks));
        console.log("Info: Task saved successfully!");
    } catch(error){
        console.error("Error saving tasks:", error);        
    }
}