import React from 'react';
import {StyleSheet, View} from 'react-native';
import NumberInput from './NumberInput';
import GenderRadioButton from "./GenderRadioButton";

export default class UserView extends React.Component {

  constructor() {
    super();
    this.state = {weight: '', age: '', height: '', gender: 'F'}
  }

  createFieldSetter = fieldName => value => {
    this.setState({[fieldName]: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <NumberInput name='weight'
                     text={this.state.weight}
                     onChangeText={this.createFieldSetter('weight')}/>
        <NumberInput name='age'
                     text={this.state.age}
                     onChangeText={this.createFieldSetter('age')}/>
        <NumberInput name='height'
                     text={this.state.height}
                     onChangeText={this.createFieldSetter('height')}/>

        <GenderRadioButton gender={this.state.gender}
                           onChange={this.createFieldSetter('gender')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
