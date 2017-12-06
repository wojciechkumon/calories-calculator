import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Dish} from '../../../domain/Dish';
import {title} from '../../../common/style';
import FoodList from './FoodList';
import {PINK} from '../../../common/colors';
import {Total} from '../../Total';

/**
 * DishSection react component
 * @extends React.PureComponent
 */
class DishSection extends React.PureComponent {

    /**
     * Adds new food
     * @method
     */
    addNewFood = () => {
        const {navigation, dish} = this.props;
        navigation.navigate('FoodCreator', {dishType: dish.dishType});
    };

    render() {
        const {dish, deleteFood} = this.props;
        const {dishType, foodList} = dish;
        const deleteFoodFromDish = deleteFood(dishType);

        const dishKcal = mapper(foodList, 'kcal');
        const dishProteins = mapper(foodList, 'proteins');
        const dishFat = mapper(foodList, 'fat');
        const dishCarbohydrates = mapper(foodList, 'carbohydrates');

      return (
            <View style={styles.container}>
                <Text style={title}>{dishType}</Text>
                <FoodList foodList={foodList}
                          dishType={dishType}
                          deleteFoodFromDish={deleteFoodFromDish}/>
                <Button onPress={this.addNewFood}
                        title='Add new food'
                        color={PINK}/>
                {dishKcal > 0 && <Total text='Calories: ' value={dishKcal} unit='kcal'/>}
                <MacroTotal
                    proteins={dishProteins}
                    fat={dishFat}
                    carbohydrates={dishCarbohydrates}
                />
            </View>
        );
    }
}

const MacroTotal = props =>
    <View>
      {props.proteins > 0 && <Total text='Proteins: ' value={props.proteins} unit='g'/>}
      {props.fat > 0 && <Total text='Fats: ' value={props.fat} unit='g'/>}
      {props.carbohydrates > 0 && <Total text='Carbohydrates: ' value={props.carbohydrates} unit='g'/>}
    </View>;

const mapper = (foodList, field) => {
    return foodList
        .map(food => (food.grams * food.foodType[field]) / 100)
        .reduce((a, b) => a + b, 0)
        .toFixed();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        width: '100%'
    },
    title,
    total: {
        textAlign: 'right',
        fontWeight: 'bold'
    }
});

DishSection.propTypes = {
    dish: Dish.props.isRequired,
    deleteFood: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
};

export default DishSection;
