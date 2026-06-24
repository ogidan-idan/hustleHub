import React from 'react'
import { ButtonProps } from '../type'
import { Text, TouchableOpacity } from 'react-native';

export const Button = (props:ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[props.variant.container, props.style]}>
        <Text style={[props.variant.text, props.textStyle]}>
            {props.title}
        </Text>
    </TouchableOpacity>
  );
}
