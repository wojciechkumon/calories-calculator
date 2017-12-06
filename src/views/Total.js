import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 * Returns Total component
 * @function
 * @param props
 */
export const Total = props =>
    <Text style={styles.total}>{props.text} {props.value} {props.unit}</Text>;


const styles = StyleSheet.create({
  total: {
    textAlign: 'right',
    fontWeight: 'bold'
  }
});
