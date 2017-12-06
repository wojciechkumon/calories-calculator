import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import Selectbox from 'react-native-selectbox';
import {Activities} from '../../domain/Activity';
import {PINK} from '../../common/colors';

/**
 * ActivityPicker component
 * @extends React.PureComponent
 */
class ActivityPicker extends React.PureComponent {

  render() {
    const {activity, onActivityChange} = this.props;
    const selectedItem = items[activityToIndexMap[activity]];

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
  {key: Activities.NO_ACTIVITY, label: 'No activity or very low activity', value: Activities.NO_ACTIVITY},
  {key: Activities.LIGHT_ACTIVITY, label: 'Light physical activity', value: Activities.LIGHT_ACTIVITY},
  {key: Activities.AVERAGE_ACTIVITY, label: 'Average physical activity', value: Activities.AVERAGE_ACTIVITY},
  {key: Activities.HIGH_ACTIVITY, label: 'High physical activity', value: Activities.HIGH_ACTIVITY}
];

const description = {
  [Activities.NO_ACTIVITY]: '',
  [Activities.LIGHT_ACTIVITY]: 'light workouts 1-3 times a week',
  [Activities.AVERAGE_ACTIVITY]: '3 - 5 workouts per week of moderate intensity',
  [Activities.HIGH_ACTIVITY]: '6 - 7 workouts a medium or high intensity'
};

const activityToIndexMap = {
  [Activities.NO_ACTIVITY]: 0,
  [Activities.LIGHT_ACTIVITY]: 1,
  [Activities.AVERAGE_ACTIVITY]: 2,
  [Activities.HIGH_ACTIVITY]: 3
};

const firstLineStyles = {
  marginTop: 10,
  fontSize: 18,
  textAlign: 'center',
  color: PINK
};

const secondLineStyles = {
  marginTop: 2,
  fontSize: 18,
  textAlign: 'center',
  color: PINK
};

ActivityPicker.propTypes = {
  activity: PropTypes.string.isRequired,
  onActivityChange: PropTypes.func.isRequired
};

export default ActivityPicker;
