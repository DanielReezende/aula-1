import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';


export const Input = (props) => {
  return <TextInput style={styles.input} {...props} />;
}


