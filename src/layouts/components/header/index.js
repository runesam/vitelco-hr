import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { IndexLink, Link } from 'react-router';
import Notification from './notification';
import Profile from './profile';
import { toggleLeftMenuSize } from '../../../actions/leftMenu';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.props.toggleLeftMenuSize();
    }
    render() {
        return (
            <div className='header' style={this.props.leftMenu.small ? { width: 'calc(100% - 70px)' } : {}}>
                <button className='fas fa-bars' onClick={this.toggle} />
                <Profile />
                <Notification />
            </div>
        )
    }
}

Header.propTypes = {
    toggleLeftMenuSize: PropTypes.func,
    leftMenu: PropTypes.object,
}

Header.defaultProps = {
    toggleLeftMenuSize: PropTypes.func,
    leftMenu: PropTypes.object,
}

function mapStateToProps({ leftMenu }) {
    return {
        leftMenu,
    }
}

export default connect(mapStateToProps, {
    toggleLeftMenuSize,
})(Header)


// export default () => (
//     <div>
//         <h1>React Redux Starter Kit</h1>
//         <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
//         {' · '}
//         <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
//     </div>
// );
