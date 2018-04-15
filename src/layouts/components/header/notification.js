import React, { PureComponent } from 'react';

class Notification extends PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            count: 99,
            active: false,
        };
    }
    toggle() {
        this.setState({ active: !this.state.active });
    }
    render() {
        return (
            <div className='notification'>
                <div
                    className={`notification__button ${this.state.active ? 'notification__button--active' : ''}`}
                    onClick={this.toggle}
                    onKeyUp={this.toggle}
                    role='button'
                    tabIndex={0}
                >
                    <div>
                        {this.state.count}
                    </div>
                    <i className='far fa-envelope' />
                </div>
                <div className={`notification__content animate ${this.state.active ? 'notification__content--active' : ''}`}>
                    content goes here
                </div>
            </div>
        )
    }
}

export default Notification;
