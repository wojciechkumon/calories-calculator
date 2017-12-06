import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {NoUserDataView} from './NoUserDataView';

/**
 * React HOC (higher order components), returns component if user data exists,
 * NoUserDataView otherwise
 * @function
 * @param WrappedComponent {React.Component}
 * @return {function}
 */
const withUserData = (WrappedComponent) => {

    const wrapper = class WithUserData extends React.Component {

        render() {
            const {userData, ...otherProps} = this.props;
            if (userData) {
                return (<WrappedComponent {...otherProps}/>);
            }

            return (<NoUserDataView/>);
        }
    };


    const mapStateToProps = state => {
        return {
            userData: state.user.userData
        };
    };

    return connect(mapStateToProps, () => {return {}})(wrapper);
};

export default withUserData;
