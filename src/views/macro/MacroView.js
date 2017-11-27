import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {StyleSheet, Text, View} from 'react-native';
import {User} from '../../domain/User';
import PieChart from './PieChart';
import {MacroTable} from './Table';
import {text} from '../../common/style';

class MacroView extends React.PureComponent {

    render() {
        const {userData} = this.props;
        const user = (userData : User);
        const intake = user.calcIntake().toFixed();
        const bmr = user.calcBmr().toFixed();

        return (
            <View style={styles.container}>
                <InfoText type='BMR' value={bmr}/>
                <InfoText type='Calories intake' value={intake}/>
                <PieChart/>
                <MacroTable intake={intake}/>
            </View>
        );
    }
}

const InfoText = props =>
    <Text style={styles.info}>
        {props.type}: <Text style={styles.value}>{props.value} kcal</Text>
    </Text>;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 30
    },
    ...text
});

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    };
};

export default connect(mapStateToProps, null)(MacroView);
