import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants/colors';

export default function PriorityButtonRadios() {
    const [state, setState] = useState<"low"|"medium"|"high"|null>(null);
    return (
        <View style={PriorityButtonRadiosStyle.container}>
            <TouchableOpacity onPress={()=>setState("low")} style={[PriorityButtonRadiosStyle.radio, state=="low"&&{backgroundColor: COLORS.green}]}>
                <Text style={[PriorityButtonRadiosStyle.text, state == "low" && PriorityButtonRadiosStyle.textActive]}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setState("medium")} style={[PriorityButtonRadiosStyle.radio, state=="medium"&&{backgroundColor: COLORS.yellow}]}>
                <Text style={[PriorityButtonRadiosStyle.text, state == "medium" && PriorityButtonRadiosStyle.textActive]}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setState("high")} style={[PriorityButtonRadiosStyle.radio, state=="high"&&{backgroundColor: COLORS.red}]}>
                <Text style={[PriorityButtonRadiosStyle.text, state == "high" && PriorityButtonRadiosStyle.textActive]}>High</Text>
            </TouchableOpacity>
        </View>
    )
}

const PriorityButtonRadiosStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 16,
        alignItems: "center"
    },
    radio: {
        paddingHorizontal: 30,
        backgroundColor:"#eee",
        paddingVertical: 10,
        borderRadius: 12
    },
    text: {
        color:"#616161",
        fontWeight: 500
    },
    textActive: {
        color: "white"
    }
})