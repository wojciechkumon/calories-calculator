// @flow
import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {Button, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import PositiveNumberInput from './PositiveNumberInput';
import GenderRadioButton from './GenderRadioButton';
import bindActionCreators from 'redux/es/bindActionCreators';
import {setUserField} from './redux/userForm';
import ActivityPicker from './ActivityPicker';
import {User} from '../../domain/User';
import {setAndSaveUserData} from './redux/user';
import {PINK} from '../../common/colors';
import {title, container} from '../../common/style';
import {UserService} from "../../service/UserService";

class UserView extends React.PureComponent {

  componentDidMount = () => {
    UserService.getPersistedUserData()
        .then(user => {
            if (user) {
                this.createFieldSetter('weight')(user.weight.toString());
                this.createFieldSetter('age')(user.age.toString());
                this.createFieldSetter('height')(user.height.toString());
                this.createFieldSetter('gender')(user.gender);
                this.createFieldSetter('activity')(user.activity);
            }
        })
  };

  createFieldSetter = fieldName => value => {
    this.props.setUserField(fieldName, value);
  };

  save = () => {
    const {weight, age, height, gender, activity, saveUserData} = this.props;
    let user: User = new User(Number(weight), Number(age), Number(height), activity, gender);
    saveUserData(user);
  };

  render() {
    const {weight, age, height, gender, activity} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>
                        Please enter your body data.
                    </Text>
                </View>
                <View style={styles.formSection}>
                    <PositiveNumberInput name='weight'
                                         text={weight}
                                         onChangeText={this.createFieldSetter('weight')}/>
                    <PositiveNumberInput name='age'
                                         text={age}
                                         onChangeText={this.createFieldSetter('age')}/>
                    <PositiveNumberInput name='height'
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...container,
        padding: 20
    },
    titleSection: {
        flex: 0.25,
        padding: 30
    },
    formSection: {
        flex: 0.75,
        padding: 20
    },
    title
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
