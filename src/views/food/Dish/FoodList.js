import React from 'react';
import {FlatList, ListView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';
import {title} from '../../../common/style';
import {Food} from '../../../domain/Food';

/**
 * FoodList react component
 * @extends React.PureComponent
 */
class FoodList extends React.PureComponent {

  renderRow = ({item}) => {
    const {deleteFoodFromDish} = this.props;
    const food = item;
    const button = [{
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => deleteFoodFromDish(food.foodType.name)
    }];

    return (
        <Swipeout right={button}>
          <View style={styles.li}>
            <Text key={food.foodType.name}>{food.foodType.name}</Text>
            <Text style={styles.grams}>{food.grams} g</Text>
          </View>
        </Swipeout>
    )
  };

  render() {
    const {foodList} = this.props;

    return (
        <FlatList
            style={styles.listView}
            data={foodList}
            keyExtractor={food => food.foodType.name}
            renderItem={this.renderRow}/>

    );
  }
}

const dataSourcePrototype =
    new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  grams: {
    fontWeight: 'bold'
  },
  title
});

FoodList.propTypes = {
  foodList: PropTypes.arrayOf(Food.props).isRequired,
  dishType: PropTypes.string.isRequired,
  deleteFoodFromDish: PropTypes.func.isRequired
};

export default FoodList;
