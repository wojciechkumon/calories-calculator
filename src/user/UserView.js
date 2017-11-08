import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';
import GenderRadioButton from './GenderRadioButton';
import bindActionCreators from 'redux/es/bindActionCreators';
import {setUserField} from './redux/user';
import ActivityPicker from "./ActivityPicker";

class UserView extends React.PureComponent {

  createFieldSetter = fieldName => value => {
    this.props.setUserField(fieldName, value);
  };

  render() {
    const {weight, age, height, gender, activity} = this.props;

    return (
      <View style={styles.container}>
        <NumberInput name='weight'
                     text={weight}
                     onChangeText={this.createFieldSetter('weight')}/>
        <NumberInput name='age'
                     text={age}
                     onChangeText={this.createFieldSetter('age')}/>
        <NumberInput name='height'
                     text={height}
                     onChangeText={this.createFieldSetter('height')}/>
        <GenderRadioButton gender={gender}
                           onChange={this.createFieldSetter('gender')}/>
        <ActivityPicker
          activity={activity}
          onActivityChange={this.createFieldSetter('activity')}/>
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

UserView.propTypes = {
  weight: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  activity: PropTypes.number.isRequired,
  setUserField: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    weight: state.user.weight,
    age: state.user.age,
    height: state.user.height,
    gender: state.user.gender,
    activity: state.user.activity
  };
};

const mapDispatchToProps = dispatch => {
  return {setUserField: bindActionCreators(setUserField, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);