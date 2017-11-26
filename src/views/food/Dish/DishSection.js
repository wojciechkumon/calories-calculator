import React from 'react';
import {StyleSheet, View} from 'react-native';
import FoodTypeAutocomplete from './FoodTypeAutocomplete';

class DishSection extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <FoodTypeAutocomplete/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
});

export default DishSection;
