import React from 'react'
import { AppLayout } from '../../App';
import { TasksScreenStyle } from '../../styles/task';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeft, SaveIcon } from 'lucide-react-native';
import { useNavigation } from '../../contexts/navigation';
import { COLORS } from '../../constants/colors';
import { TextInputStyle } from '../../styles/form';
import DateInput from '../../components/form/date';
import PriorityButtonRadios from '../../components/form/button-radio';
import { Button } from '../../components/button';
import { primary } from '../../styles/button';

export default function TaskCreateScreen() {
  const { goBack } = useNavigation();

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
        <View style={{backgroundColor: COLORS.white, padding: 20, borderRadius: 15, boxShadow:  "2px 2px 4px rgba(0,0,0,0.1)"}}>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Task Title</Text>
            <TextInput placeholder='Enter task title' placeholderTextColor={TextInputStyle.placeholder.color} style={TextInputStyle.input}/>
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Description</Text>
            <TextInput placeholder='Enter task description' multiline={true} placeholderTextColor={TextInputStyle.placeholder.color} style={TextInputStyle.textarea} textAlignVertical="top" numberOfLines={10}/>
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Due Date</Text>
            <DateInput/>
          </View>
          <View style={TextInputStyle.container}>
            <Text style={TextInputStyle.label}>Priority</Text>
            <PriorityButtonRadios/>
          </View>
          <TouchableOpacity style={{...primary.container, width: "100%", gap: 8}}>
            <SaveIcon size={20} color={"white"}/>
            <Text style={primary.text}>Save Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppLayout>
  )
}