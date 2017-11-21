import {StyleSheet} from 'react-native';
import {PINK, GREY} from './colors';

export const title = {
    fontWeight: 'bold',
    fontSize: 30,
    color: PINK
};

export const container = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
};

export const tableStyles = StyleSheet.create({
    head: {height: 40, backgroundColor: GREY},
    text: {textAlign: 'center'},
    headText: {textAlign: 'center', fontWeight: 'bold'},
    row: {height: 30}
});

export const text = {
    info: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    value: {
        color: PINK
    }
};
