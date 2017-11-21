// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {title, container} from '../../common/style';

class MacroView extends React.PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Calcualte your macro.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container,
    title
});

export default MacroView;