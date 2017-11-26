import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {title} from '../../../common/style';
import {Food} from '../../../domain/Food';

class FoodList extends React.PureComponent {

    render() {
        const {foodList} = this.props;
        const foodRows = foodList.map(food =>
            <Text key={food.foodType.name}>{food.foodType.name} {food.grams}</Text>);

        return (
            <View style={styles.container}>
                {foodRows}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        width: '100%'
    },
    title
});

FoodList.propTypes = {
    foodList: PropTypes.arrayOf(Food.props).isRequired
};

export default FoodList;
