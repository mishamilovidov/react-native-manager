import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 21,
    flex: 2,
    height: 20,
    width: 100,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
