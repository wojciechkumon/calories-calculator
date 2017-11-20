// @flow
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {Button, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';
import GenderRadioButton from './GenderRadioButton';
import bindActionCreators from 'redux/es/bindActionCreators';
import {setUserField} from './redux/userForm';
import ActivityPicker from './ActivityPicker';
import {User} from '../../domain/User';
import {setAndSaveUserData} from './redux/user';
import {PINK} from '../../common/colors';

class UserView extends React.PureComponent {

  createFieldSetter = fieldName => value => {
    this.props.setUserField(fieldName, value);
  };

  save = () => {
    // TODO validation (redux-form maybe?)
    // TODO init form data using state.user.userData if exists
    const {weight, age, height, gender, activity, saveUserData} = this.props;
    let user: User = new User(Number(weight), Number(age), Number(height), activity, gender);
    saveUserData(user);
  };

  render() {
    const {weight, age, height, gender, activity} = this.props;

    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Please enter your body data.
          </Text>
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
          <ActivityPicker activity={activity}
                          onActivityChange={this.createFieldSetter(
                              'activity')}/>
          <Button onPress={this.save}
                  title='Save'
                  color={PINK}/>
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
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: PINK,
    padding: 20
  }
});

UserView.propTypes = {
  weight: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  setUserField: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    weight: state.userForm.weight,
    age: state.userForm.age,
    height: state.userForm.height,
    gender: state.userForm.gender,
    activity: state.userForm.activity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserField: bindActionCreators(setUserField, dispatch),
    saveUserData: bindActionCreators(setAndSaveUserData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserView);