import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import * as Progress from 'react-native-progress';
import {title} from '../../common/style';
import {changeDate, DATE_FORMAT} from './redux/menuDate';
import {DailyMenuService} from '../../service/DailyMenuService';
import {DailyMenu, newEmptyDailyMenu} from '../../domain/DailyMenu';
import DishSection from './Dish/DishSection';
import {PINK, GREEN} from '../../common/colors';
import {changeDailyMenu, deleteFoodFromDishAndPersist} from './redux/dailyMenu';
import {Dish} from '../../domain/Dish';
import {Total} from '../Total';
import {User} from '../../domain/User';

class FoodView extends React.PureComponent {

  componentDidMount = () => {
    const {date} = this.props;
    this.findDailyMenu(date);
  };

  setNewDate = newDate => {
    const {changeDate, changeDailyMenu} = this.props;
    changeDailyMenu(undefined);
    changeDate(newDate);
    this.findDailyMenu(newDate);
  };

  findDailyMenu = newDate => {
    const {changeDailyMenu} = this.props;
    DailyMenuService.findDailyMenu(newDate)
    .then(dailyMenu => {
      if (dailyMenu) {
        changeDailyMenu(dailyMenu);
      } else {
        changeDailyMenu(newEmptyDailyMenu(newDate));
      }
    });
  };

  render() {
    const {date, navigation, dailyMenu, deleteFood} = this.props;

    if (!dailyMenu) {
      return (
          <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
      );
    }

    const {user} = this.props;
    const intake = user.calcIntake().toFixed();

    const dailyKcal = dailyMapper(dailyMenu, 'kcal');
    const dailyFat = dailyMapper(dailyMenu, 'fat');
    const dailyProteins = dailyMapper(dailyMenu, 'proteins');
    const dailyCarbohydrates = dailyMapper(dailyMenu, 'carbohydrates');

    const caloriesProgress = dailyKcal / intake >= 1 ? 1 : (dailyKcal
        / intake).toFixed(2);

    const dishSections = dailyMenu.dishList
      .sort(Dish.comparator)
      .map(dish => <DishSection key={dish.dishType}
                                dish={dish}
                                deleteFood={deleteFood}
                                navigation={navigation}/>);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <DatePicker
              style={{width: '90%'}}
              date={date}
              mode="date"
              placeholder="select date"
              format={DATE_FORMAT}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={date => this.setNewDate(date)}
              showIcon={false}
              customStyles={{
                btnTextConfirm: {
                  color: PINK
                }
              }}/>
          <Bar caloriesProgress={caloriesProgress} />
          <DailyTotal calories={dailyKcal} proteins={dailyProteins}
                      fat={dailyFat} carbohydrates={dailyCarbohydrates}/>
          {dishSections}
        </ScrollView>
    )
  }
}

const Bar = props =>
  <View style={styles.bar}>
    <Progress.Bar progress={Number(props.caloriesProgress)} width={200} color={GREEN}/>
  </View>;


const DailyTotal = props =>
    <View>
      {props.calories > 0 && <Total text='Calories: ' value={props.calories}
                                    unit='kcal'/>}
      {props.proteins > 0 && <Total text='Proteins: ' value={props.proteins}
                                    unit='g'/>}
      {props.fat > 0 && <Total text='Fats: ' value={props.fat} unit='g'/>}
      {props.carbohydrates > 0 && <Total text='Carbohydrates: '
                                         value={props.carbohydrates} unit='g'/>}

    </View>;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bar: {
    padding: 10
  },
  title
});

FoodView.propTypes = {
  date: PropTypes.string.isRequired,
  user: User.props,
  changeDate: PropTypes.func.isRequired,
  dailyMenu: DailyMenu.props,
  changeDailyMenu: PropTypes.func.isRequired,
  deleteFood: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapper = (foodList, field) =>
    foodList
      .map(food => (food.grams * food.foodType[field]) / 100)
      .reduce((a, b) => a + b, 0);

const dailyMapper = (dailyMenu, field) =>
    dailyMenu.dishList
      .map(dish => mapper(dish.foodList, field))
      .reduce((a, b) => a + b, 0)
      .toFixed();

const mapStateToProps = state => {
  return {
    date: state.menuDate.date,
    dailyMenu: state.dailyMenu.current,
    user: state.user.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDate: bindActionCreators(changeDate, dispatch),
    changeDailyMenu: bindActionCreators(changeDailyMenu, dispatch),
    deleteFood: dishType => foodName => dispatch(
        deleteFoodFromDishAndPersist(dishType, foodName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodView);
