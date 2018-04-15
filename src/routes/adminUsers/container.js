import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableContainer from './components/tableContainer';
import './index.scss';

class Container extends Component {
    static test = {
        test: 123,
    }
    componentDidMount() {
        window.console.log(this.test);
    }
    render() {
        return (
            <div className='content' style={this.props.leftMenu.small ? { width: 'calc(100% - 70px)' } : {}}>
                <div className='content__top'>
                    <h3>Users</h3>
                    <button className='btn btn-outline-primary'>Add User</button>
                </div>
                <TableContainer />
            </div>
        )
    }
}

Container.propTypes = {
    leftMenu: PropTypes.object,
}

Container.defaultProps = {
    leftMenu: PropTypes.object,
}

function mapStateToProps({ leftMenu }) {
    return {
        leftMenu,
    }
}

export default connect(mapStateToProps, { })(Container);
