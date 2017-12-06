import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import PropTypes from 'prop-types';

import {container} from '../../../common/style';
import FoodTypeAutocomplete from './FoodTypeAutocomplete';
import PositiveNumberInput from '../../PositiveNumberInput';
import {PINK} from "../../../common/colors";
import {FoodTypesService} from "../../../service/FoodTypesService";
import {addFoodToDishAndPersist} from "../redux/dailyMenu";
import {Food} from "../../../domain/Food";

/**
 * FoodCreator react component
 * @extends React.Component
 */
class FoodCreator extends React.Component {

  constructor() {
    super();
    this.state = {
      foodInput: '',
      gramsInput: '100',
      validationError: true
    };
  }

  /**
   * Sets grams
   * @method
   * @param gramsInput {string}
   */
  setGrams = gramsInput => {
    const {foodInput} = this.state;
    this.setState({gramsInput});
    this.validate(foodInput, gramsInput);
  };

  /**
   * Sets food input
   * @method
   * @param foodInput {string}
   */
  setFood = foodInput => {
    const {gramsInput} = this.state;
    this.setState({foodInput});
    this.validate(foodInput, gramsInput);
  };

  /**
   * Validates inputs
   * @param food {string}
   * @param grams {string}
   */
  validate = (food, grams) => {
    if (FoodTypesService.findFoodType(food) && grams) {
      this.setState({validationError: false});
      return;
    }
    this.setState({validationError: true});
  };

    /**
     * Saves new Food
     * @method
     */
  save = () => {
    const {addFoodToDish, navigation} = this.props;
    const {dishType} = navigation.state.params;
    const {foodInput, gramsInput} = this.state;
    const foodType = FoodTypesService.findFoodType(foodInput);
    const food = new Food(foodType, Number(gramsInput));
    addFoodToDish(dishType, food);
    navigation.goBack();
  };

  render() {
    const {foodInput, gramsInput, validationError} = this.state;
    return (
        <View style={styles.container}>
          <FoodTypeAutocomplete inputValue={foodInput}
                                onChange={this.setFood}/>
          <PositiveNumberInput name='grams'
                               inputValue={gramsInput}
                               onChangeText={this.setGrams}/>
          <Button onPress={this.save}
                  title='Save'
                  color={PINK}
                  disabled={validationError}/>
        </View>
    );
  }
}

FoodCreator.propTypes = {
  addFoodToDish: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container
});

const mapDispatchToProps = dispatch => {
  return {addFoodToDish: bindActionCreators(addFoodToDishAndPersist, dispatch)};
};

export default connect(() => {return {}}, mapDispatchToProps)(FoodCreator);
