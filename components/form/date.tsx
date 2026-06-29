import React, { useState } from 'react'
import { Button, Text, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerChangeEvent } from '@react-native-community/datetimepicker';
import { TextInputStyle } from '../../styles/form';
import { CalendarIcon } from 'lucide-react-native';

const TODAY = new Date();

export default function DateInput({ onChange: setDate, min = TODAY, value: date = TODAY, readOnly = false }: { min?: Date, value?: Date, onChange: (date: Date) => void;readOnly?:boolean }) {
    const [dateFilled, setDateFilled] = useState(false);
    const [show, setShow] = useState(false);

    const showDatepicker = () => {
        setShow(true);
    };
    const handleSelection = (event: DateTimePickerChangeEvent, selectedDate: Date) => {
        setDate(selectedDate)
        setDateFilled(true);
        setShow(false);
    }

    return (
        <>
            <TouchableOpacity disabled={readOnly} onPress={showDatepicker} style={TextInputStyle.date}>
                <Text style={TextInputStyle.dateText}>
                    {dateFilled ? date.toLocaleDateString() : "mm/dd/yyyy"}
                </Text>
                <CalendarIcon size={TextInputStyle.dateIcon.height} color={TextInputStyle.dateIcon.color} />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    onValueChange={handleSelection}
                    onDismiss={() => setShow(false)}
                    minimumDate={min}
                />
            )}
        </>
    )
}
