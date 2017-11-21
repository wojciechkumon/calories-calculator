import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {NoUserDataView} from './NoUserDataView';

const withUserData = (WrappedComponent) => {

    const wrapper = class WithUserData extends React.Component {

        render() {
            const {userData} = this.props;

            if (userData) {
                return (<WrappedComponent/>);
            }

            return (
                <NoUserDataView/>
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
