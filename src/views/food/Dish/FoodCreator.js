import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {container} from '../../../common/style';
import FoodTypeAutocomplete from './FoodTypeAutocomplete';
import PositiveNumberInput from '../../PositiveNumberInput';
import {PINK} from "../../../common/colors";
import {FoodTypesService} from "../../../service/FoodTypesService";

class FoodCreator extends React.Component {

  constructor() {
    super();
    this.state = {
      foodInput: '',
      gramsInput: '100',
      validationError: true
    };
  }

  setGrams = gramsInput => {
    const {foodInput} = this.state;
    this.setState({gramsInput});
    this.validate(foodInput, gramsInput);
  };

  setFood = foodInput => {
    const {gramsInput} = this.state;
    this.setState({foodInput});
    this.validate(foodInput, gramsInput);
  };

  validate = (food, grams) => {
    if (FoodTypesService.findFoodType(food) && grams) {
      this.setState({validationError: false});
      return;
    }
    this.setState({validationError: true});
  };

  save = () => {
    const {dishType} = this.props.navigation.state.params;
    const {foodInput, gramsInput} = this.state;
    console.log(dishType);
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

const styles = StyleSheet.create({
  container
});

export default FoodCreator;
