import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {container, title} from '../../common/style';

/**
 * Return view when no user data available
 * @function
 * @return {*}
 */
export const NoUserDataView = () =>
    <View style={styles.container}>
        <Text style={styles.title}>
            Please enter your body data.
        </Text>
    </View>;

const styles = StyleSheet.create({
    container,
    title
});
