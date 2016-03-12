'use strict'

import ReactDOM from 'react-dom';
import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }
    render() {
        return ( 
            <div>Hello World</div>
        ) ;
    }
};
//插入到页面中
ReactDOM.render(<App />, document.getElementById('app'));