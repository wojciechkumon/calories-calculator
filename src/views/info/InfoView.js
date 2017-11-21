import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {title, container} from '../../common/style';
import {CALORIES_TITLE, CALORIES_TEXT, MACRO_TITLE, MACRO_TEXT, FOOD_TITLE, FOOD_TEXT} from './text';
class InfoView extends React.PureComponent {

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Section title={CALORIES_TITLE} text={CALORIES_TEXT} />
            <Section title={MACRO_TITLE} text={MACRO_TEXT} />
            <Section title={FOOD_TITLE} text={FOOD_TEXT} />
          </View>
        </View>
    );
  }
}

const Section = props =>
    <View style={styles.section}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text>
        {props.text}
      </Text>
    </View>;

const styles = StyleSheet.create({
    container,
    title,
    section: {
        flex: 1 / 3,
        padding: 50
    }
});

export default InfoView;
