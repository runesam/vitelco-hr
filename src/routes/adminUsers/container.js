import React, { Component } from 'react';

class Container extends Component {
    static test = {
        test: 123,
    }
    componentDidMount() {
        window.console.log(this.test);
    }
    render() {
        return (
            <div>test me</div>
        )
    }
}

export default Container;
