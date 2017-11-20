import React from 'react';
import PropTypes from 'prop-types';
import {SegmentedControls} from 'react-native-radio-buttons';
import {Genders} from '../../domain/Gender';
import {PINK} from '../../common/colors';

export default class GenderRadioButton extends React.PureComponent {

  handleChange = newOption => {
    const gender = newOption.value;
    if (Object.values(Genders).includes(gender)) {
      this.props.onChange(gender);
    }
  };

  render() {
    const {gender} = this.props;

    const genderRadioProps = [
      {label: 'Female', value: Genders.FEMALE},
      {label: 'Male', value: Genders.MALE}
    ];

    return (
      <SegmentedControls
        tint= {PINK}
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