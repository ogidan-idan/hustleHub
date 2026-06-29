import React, { useState } from 'react'
import { AppLayout } from '../../App';
import { TasksScreenStyle } from '../../styles/task';
import { ActivityIndicator, Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeft, SaveIcon } from 'lucide-react-native';
import { useNavigation } from '../../contexts/navigation';
import { COLORS } from '../../constants/colors';
import { TextInputStyle } from '../../styles/form';
import DateInput from '../../components/form/date';
import PriorityButtonRadios from '../../components/form/button-radio';
import { Button } from '../../components/button';
import { primary } from '../../styles/button';
import { Task } from '../../type';
import { getTasks, saveTasks } from '../../services/task-service';

export default function TaskCreateScreen() {
  const { goBack, handleNavigate } = useNavigation();
  const [task, setTask] = useState<Omit<Task, 'id' | 'due_date'> & { priority: Exclude<Task['priority'], undefined>, due_date: Task['due_date'] | undefined }>({
    title: "",
    status: "pending",
    description: "",
    due_date: undefined,
    priority: "medium"
  });

  const [processing, setProcessing] = useState(false);

  async function handleSaveTask() {
    // Retrieve tasks
    const tasks = await getTasks();

    // Disable button & form & show loader
    setProcessing(true);

    // TODO: validate inputs

    // TODO: show validation errors if need be

    try{
      const prevId = tasks[tasks.length-1]?.id??0;
      // create task
      const newTask:Task = {...task, id: prevId+1} as Task;

      // Save task
      tasks.push(newTask);

      await saveTasks(tasks);
  
      // successful message
      Alert.alert("Task saved","Saved task successfully!", [
        {text: "Ok", onPress: handleNavigate("tasks"), style: "default", isPreferred: true }
      ]);
    } catch(error){

    }

  }
  return (
    <AppLayout>
      <View style={[TasksScreenStyle.container, { paddingTop: 40, paddingBottom: 20, gap: 24, boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px", borderBottomWidth: 1, borderBottomColor: "#ccc" }]}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 30, marginLeft: 10 }}>
          <TouchableOpacity onPress={goBack()} style={{ cursor: "pointer" }}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: 600 }}>
            Add New Tasks
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#f8f8f8", gap: 16, flex: 1 }}>
        <View style={{ backgroundColor: COLORS.white, padding: 20, borderRadius: 15, boxShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Task Title</Text>
            <TextInput readOnly={processing} placeholder='Enter task title' placeholderTextColor={TextInputStyle.placeholder.color} style={TextInputStyle.input} value={task.title} onChangeText={(value) => setTask({ ...task, title: value })} />
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Description</Text>
            <TextInput readOnly={processing} placeholder='Enter task description' multiline={true} placeholderTextColor={TextInputStyle.placeholder.color} style={TextInputStyle.textarea} textAlignVertical="top" numberOfLines={10} value={task.description} onChangeText={(value) => setTask({ ...task, description: value })} />
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Due Date</Text>
            <DateInput readOnly={true} value={task.due_date ? new Date(task.due_date) : undefined} onChange={(value) => setTask({ ...task, due_date: value.toISOString() })} />
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Priority</Text>
            <PriorityButtonRadios readOnly={processing} value={task.priority} onChange={(value) => setTask({ ...task, priority: value! })} />
          </View>
          <TouchableOpacity disabled={processing} onPress={handleSaveTask} style={{ ...primary.container, width: "100%", gap: 8, opacity: processing?10:100  }}>
            {processing ? <>
              <ActivityIndicator color={COLORS.white} />
              <Text style={primary.text}>Saving Task</Text>
            </> : <><SaveIcon size={20} color={"white"} />
              <Text style={primary.text}>Save Task</Text></>}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppLayout>
  )
}