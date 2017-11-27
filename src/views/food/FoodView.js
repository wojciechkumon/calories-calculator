import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import {title} from '../../common/style';
import {changeDate, DATE_FORMAT} from './redux/menuDate';
import {DailyMenuService} from '../../service/DailyMenuService';
import {newEmptyDailyMenu} from '../../domain/DailyMenu';
import DishSection from './Dish/DishSection';
import {PINK} from "../../common/colors";

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
        const {date, navigation} = this.props;
        const {dailyMenu} = this.state;

        if (!dailyMenu) {
            return (
                <View style={styles.container}>
                    <Text>Loading...</Text>
                </View>
            );
        }

        const dishSections = dailyMenu.dishList
            .map(dish => <DishSection key={dish.dishType} dish={dish} navigation={navigation}/>);

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
                {dishSections}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title
});

FoodView.propTypes = {
    date: PropTypes.string.isRequired,
    changeDate: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {date: state.menuDate.date};
};

const mapDispatchToProps = dispatch => {
    return {changeDate: bindActionCreators(changeDate, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodView);
