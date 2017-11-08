import React from 'react';
import PropTypes from 'prop-types';
import {Text} from "react-native";
import Selectbox from 'react-native-selectbox'
import {AVERAGE_ACTIVITY, HIGH_ACTIVITY, LIGHT_ACTIVITY, NO_ACTIVITY} from "./userActivity";

class ActivityPicker extends React.PureComponent {

  render() {
    const {activity, onActivityChange} = this.props;
    const selectedItem = items[activity];

    return (
      <Selectbox
        selectedItem={selectedItem}
        promptLabel='Choose your activity'
        onChange={item => onActivityChange(item.value)}
        items={items}>
        <Text style={firstLineStyles}>{selectedItem.label}</Text>
        <Text style={secondLineStyles}>{description[activity]}</Text>
      </Selectbox>
    );
  }
}

const items = [
  {key: NO_ACTIVITY, label: 'No activity or very low activity', value: NO_ACTIVITY},
  {key: LIGHT_ACTIVITY, label: 'Light physical activity', value: LIGHT_ACTIVITY},
  {key: AVERAGE_ACTIVITY, label: 'Average physical activity', value: AVERAGE_ACTIVITY},
  {key: HIGH_ACTIVITY, label: 'High physical activity', value: HIGH_ACTIVITY}
];

const description = {
  [NO_ACTIVITY]: '',
  [LIGHT_ACTIVITY]: 'light workouts 1-3 times a week',
  [AVERAGE_ACTIVITY]: '3 - 5 workouts per week of moderate intensity',
  [HIGH_ACTIVITY]: '6 - 7 workouts a medium or high intensity'
};

const firstLineStyles = {
  marginTop: 10,
  fontSize: 18,
  textAlign: 'center',
  color: '#008AFF'
};

const secondLineStyles = {
  marginTop: 2,
  fontSize: 18,
  textAlign: 'center',
  color: '#008AFF'
};

ActivityPicker.propTypes = {
  activity: PropTypes.number.isRequired,
  onActivityChange: PropTypes.func.isRequired
};

export default ActivityPicker;