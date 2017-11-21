import React, {Component} from 'react';
import {View, StyleSheet } from 'react-native';
import {Pie} from 'react-native-pathjs-charts';
import {macroData} from './macro';
import {container} from '../../common/style';
import {PIE_CHART_PALETTE, WHITE} from '../../common/colors';

const styles = StyleSheet.create({
    container
});

class PieChart extends Component {
    render() {
        const options = {
            width: 300,
            height: 300,
            r: 50,
            R: 150,
            legendPosition: 'bottomLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 18,
                fontWeight: true,
                color: WHITE
            }
        };

        return (
            <View style={styles.container}>
                <Pie data={macroData}
                     options={options}
                     accessorKey="value"
                     pallete={PIE_CHART_PALETTE}
                />
            </View>
        )
    }
}

export default PieChart;
