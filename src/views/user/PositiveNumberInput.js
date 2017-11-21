import React from 'react';
import PropTypes from 'prop-types';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';

export default class NumberInput extends React.PureComponent {

  handleTextChange = newText => {
    if (isNaN(newText) || Number(newText) <= 0) {
      return;
    }
    this.props.onChangeText(newText);
  };

  render() {
    const {name, text} = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{padding: 10, flexDirection: 'row'}}>
          <Text style={{flex: 0.2, flexDirection: 'column'}}>{name}</Text>
          <TextInput
            style={{flex: 0.8, height: 40}}
            onChangeText={text => this.handleTextChange(text)}
            placeholder={name}
            keyboardType='numeric'
            value={text}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
};
