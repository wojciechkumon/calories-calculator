import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import {Dish} from '../../../domain/Dish';
import {title} from '../../../common/style';
import FoodList from './FoodList';
import {PINK} from '../../../common/colors';

class DishSection extends React.PureComponent {

    addNewFood = () => {
        const {navigation, dish} = this.props;
        navigation.navigate('FoodCreator', {dishType: dish.dishType});
    };

    render() {
        const {dish} = this.props;

        return (
            <View style={styles.container}>
                <Text style={title}>{dish.dishType}</Text>
                <FoodList foodList={dish.foodList}/>
                <Button onPress={this.addNewFood}
                        title='Add new food'
                        color={PINK}/>
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

DishSection.propTypes = {
    dish: Dish.props.isRequired,
    navigation: PropTypes.object.isRequired
};

export default DishSection;
