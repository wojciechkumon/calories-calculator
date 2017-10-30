import React from 'react';
import {buildNewStore} from "./src/config/reduxStore";
import Root from "./src/config/Root";

const store = buildNewStore();

export default class App extends React.Component {

  render() {
    return (<Root store={store}/>);
  }
}
