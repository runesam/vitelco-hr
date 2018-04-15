import React, { PureComponent } from 'react';

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            active: false,
        };
    }
    toggle() {
        this.setState({ active: !this.state.active });
    }
    render() {
        return (
            <div className='profile'>
                <div
                    className={`profile__button ${this.state.active ? 'profile__button--active' : ''}`}
                    onClick={this.toggle}
                    onKeyUp={this.toggle}
                    role='button'
                    tabIndex={0}
                >
                    <div className='profile__image'>
                        <img
                            src='https://avatars0.githubusercontent.com/u/18414089?s=400&u=5c532e90d887b114bfc6c286ad5d64475b13e23f&v=4'
                            alt='profile tag goes here'
                        />
                    </div>
                    <span>Sam Ewdala</span>
                    <i className={this.state.active ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
                </div>
                <div className={`profile__content animate ${this.state.active ? 'profile__content--active' : ''}`}>
                    <ul className='pull-right'>
                        <li><a href='/#'> Profile</a></li>
                        <li>
                            <a href='/#'>
                                <span>Settings</span>
                                <span className='badge bg-red pull-right'>50%</span>
                            </a>
                        </li>
                        <li><a href='/#'>Help</a></li>
                        <li>
                            <a href='login.html'>
                                Log Out
                                <i className='fa fa-sign-out-alt pull-right' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Profile;
