import React from 'react';
import PropTypes from 'prop-types';
import {SegmentedControls} from 'react-native-radio-buttons';

export default class GenderRadioButton extends React.PureComponent {

  handleChange = newOption => {
    const gender = newOption.value;
    if (['F', 'M'].includes(gender)) {
      this.props.onChange(gender);
    }
  };

  render() {
    const {gender} = this.props;

    const genderRadioProps = [
      {label: 'Female', value: 'F'},
      {label: 'Male', value: 'M'}
    ];

    return (
      <SegmentedControls
        options={genderRadioProps}
        onSelection={newOption => this.handleChange(newOption)}
        selectedOption={genderRadioProps.find(option => option.value === gender)}
        extractText={option => option.label}
        testOptionEqual={(selectedValue, option) => selectedValue.value === option.value}
      />
    );
  }
}

GenderRadioButton.propTypes = {
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};