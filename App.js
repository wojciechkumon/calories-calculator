import React from 'react';
import {buildNewStore} from './src/config/reduxStore';
import Root from './src/config/Root';

const store = buildNewStore();

/**
 * Application entry point
 * @extends React.Component
 */
class App extends React.Component {

    render() {
        return (<Root store={store}/>);
    }
}

export default App;
