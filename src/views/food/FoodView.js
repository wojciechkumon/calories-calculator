import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import {container, title} from '../../common/style';
import {changeDate, DATE_FORMAT} from './redux/food';
import {DailyMenuService} from "../../service/DailyMenuService";
import {newEmptyDailyMenu} from "../../domain/DailyMenu";
import DishSection from "./Dish/DishSection";

class FoodView extends React.Component {

    constructor() {
        super();
        this.state = {dailyMenu: undefined}
    }

    componentDidMount = () => {
        const {date} = this.props;
        this.findDailyMenu(date);
    };

    setNewDate = newDate => {
        const {changeDate} = this.props;
        this.setState({dailyMenu: undefined});
        changeDate(newDate);
        this.findDailyMenu(newDate);
    };

    findDailyMenu = newDate => {
        DailyMenuService.findDailyMenu(newDate)
            .then(dailyMenu => {
                if (dailyMenu) {
                    this.setState({dailyMenu});
                } else {
                    this.setState({dailyMenu: newEmptyDailyMenu(newDate)});
                }
            });
    };

    render() {
        const {date} = this.props;
        const {dailyMenu} = this.state;

        if (!dailyMenu) {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <DatePicker
                    style={{width: 200}}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format={DATE_FORMAT}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={date => this.setNewDate(date)}
                    showIcon={false}/>
                <DishSection/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container,
    title
});

FoodView.propTypes = {
    date: PropTypes.string.isRequired,
    changeDate: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {date: state.food.date};
};

const mapDispatchToProps = dispatch => {
    return {changeDate: bindActionCreators(changeDate, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodView);
