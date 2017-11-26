import React from 'react';
import {StyleSheet, View} from 'react-native';
import connect from 'react-redux/es/connect/connect';
import bindActionCreators from 'redux/es/bindActionCreators';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import {container, title} from '../../common/style';
import {changeDate, DATE_FORMAT} from './redux/food';

class FoodView extends React.PureComponent {

    render() {
        const {date, setDate} = this.props;
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
                    onDateChange={date => setDate(date)}
                    showIcon={false}/>
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
    setDate: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        date: state.food.date
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDate: bindActionCreators(changeDate, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodView);
