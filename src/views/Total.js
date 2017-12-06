import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Total = props =>
    <Text style={styles.total}>{props.text} {props.value} {props.unit}</Text>;


const styles = StyleSheet.create({
  total: {
    textAlign: 'right',
    fontWeight: 'bold'
  }
});
