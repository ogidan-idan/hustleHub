import React from 'react'
import { AppLayout } from '../App'
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '../contexts/navigation';
import { ArrowLeft } from 'lucide-react-native';

export const TasksScreen = () => {
    const { goBack } = useNavigation();
    return (
        <AppLayout>
            <View style={{ flexDirection: "row", gap: 30, padding: 20 }}>
                <TouchableOpacity onPress={goBack()} style={{cursor: "pointer"}}>
                    <ArrowLeft />
                </TouchableOpacity>
                <Text>My Tasks</Text>
            </View>
        </AppLayout>
    );
}
