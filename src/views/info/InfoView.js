// @flow
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PINK} from '../../common/colors';

class InfoView extends React.PureComponent {

  render() {
    return (
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', color: PINK}}>
            InfoView
          </Text>
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

export default InfoView;