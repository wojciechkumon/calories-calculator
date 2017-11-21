import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {Text, View} from 'react-native';

const withUserData = (WrappedComponent) => {

    const wrapper = class WithUserData extends React.Component {

        render() {
            console.log(this.props);
            const {userData} = this.props;

            if (userData) {
                return (<WrappedComponent/>);
            }

            return (
                <View>
                    <Text>User data needed!</Text>
                </View>
            );
        }
    };


    const mapStateToProps = state => {
        return {
            userData: state.user.userData
        };
    };

    return connect(mapStateToProps)(wrapper);
};

export default withUserData;
