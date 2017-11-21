import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import {tableStyles} from '../../common/style';
import {PROTEINS, CARBS, FATS, PROTEINS_CALORIES, CARBS_CALORIES, FATS_CALORIES} from './macro';

const calculateMacroGrams = (intake, macro, macroCal) => {
    return Math.round((intake * macro / 100) / macroCal);
};

export const MacroTable = props => {
    const intake = props.intake;
    const fats = calculateMacroGrams(intake, FATS, FATS_CALORIES);
    const carbs = calculateMacroGrams(intake, CARBS, CARBS_CALORIES);
    const proteins = calculateMacroGrams(intake, PROTEINS, PROTEINS_CALORIES);

    const tableHead = ['Fats', 'Carbs', 'Proteins'];
    const tableData = [[fats + ' g', carbs + ' g', proteins + ' g']];

    return (
        <Table>
            <Row data={tableHead} style={tableStyles.head} textStyle={tableStyles.headText}/>
            <Rows data={tableData} style={tableStyles.row} textStyle={tableStyles.text}/>
        </Table>
    );
};
