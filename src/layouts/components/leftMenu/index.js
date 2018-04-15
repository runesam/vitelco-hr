import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuSections from './MenuSections';
import { getLeftMenuData, toggleLeftMenuSize } from './../../../actions/leftMenu';

class LeftMenu extends PureComponent {
    componentDidMount() {
        this.props.getLeftMenuData();
        setTimeout(() => {
            // this.props.toggleLeftMenuSize();
        }, 2000);
    }

    render() {
        return (
            <div className={`left-menu ${this.props.leftMenu.small ? 'small' : ''}`}>
                <div className='left-menu__tag'>
                    <i className='fab fa-adn' />
                    <span> VITELCO - HR Admin </span>
                </div>
                <div className='left-menu__profile'>
                    <div className='profile__image'>
                        <img
                            src='https://avatars0.githubusercontent.com/u/18414089?s=400&u=5c532e90d887b114bfc6c286ad5d64475b13e23f&v=4'
                            alt='profile tag goes here'
                        />
                    </div>
                    <p className='profile__word'>Welcome,</p>
                    <p className='profile__name'>Sam Ewdala</p>
                </div>
                <div className='left-menu__center'>
                    <MenuSections menuData={this.props.leftMenu.data} />
                </div>
                <div className='left-menu__bottom'>
                    <a href='/#' data-toggle='tooltip' data-placement='top' title='' data-original-title='Settings'>
                        <span className='fas fa-cog' aria-hidden='true' />
                    </a>
                    <a href='/#' data-toggle='tooltip' data-placement='top' title='' data-original-title='FullScreen'>
                        <span className='fas fa-arrows-alt' aria-hidden='true' />
                    </a>
                    <a href='/#' data-toggle='tooltip' data-placement='top' title='' data-original-title='Lock'>
                        <span className='fas fa-eye-slash' aria-hidden='true' />
                    </a>
                    <a data-toggle='tooltip' data-placement='top' title='' href='login.html' data-original-title='Logout'>
                        <span className='fas fa-power-off' aria-hidden='true' />
                    </a>
                </div>
            </div>
        )
    }
}

LeftMenu.propTypes = {
    leftMenu: PropTypes.object,
    getLeftMenuData: PropTypes.func,
    toggleLeftMenuSize: PropTypes.func,
}

LeftMenu.defaultProps = {
    leftMenu: PropTypes.object,
    getLeftMenuData: PropTypes.func,
    toggleLeftMenuSize: PropTypes.func,
}

function mapStateToProps({ leftMenu }) {
    return {
        leftMenu,
    }
}

export default connect(mapStateToProps, {
    getLeftMenuData,
    toggleLeftMenuSize,
})(LeftMenu)
