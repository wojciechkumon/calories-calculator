import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {title} from '../../common/style';
import {BLUE, GREEN, ORANGE} from '../../common/colors';

class MacroView extends React.PureComponent {

    render() {
        const chart_wh = 250;
        const series = [123, 321, 789];
        const colors = [BLUE, GREEN, ORANGE];

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    Calculate your macro.
                </Text>
                <View style={styles.pieChart}>
                    <PieChart
                        chart_wh={chart_wh}
                        series={series}
                        sliceColor={colors}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 30
    },
    pieChart: {
        padding: 20
    },
    title
});

export default MacroView;
