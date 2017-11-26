import React from 'react';
import {StyleSheet, View} from 'react-native';
import FoodTypeAutocomplete from './FoodTypeAutocomplete';
import {Dish} from "../../../domain/Dish";

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
        padding: 30,
        width: '100%'
    }
});

DishSection.propTypes = {
    dish: Dish.props.isRequired
};

export default DishSection;
