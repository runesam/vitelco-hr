import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import LeftMenu from './../../components/LeftMenu'

export const PageLayout = ({ children }) => (
    <div className='text-center'>
        <div className='page-layout__menu'>
            <LeftMenu />
        </div>
        <div className='page-layout__viewport'>
            <div className='page-layout__header'>
                <h1>React Redux Starter Kit</h1>
                <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
                {' · '}
                <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
            </div>
            <div className='page-layout__content'>
                {children}
            </div>
        </div>
    </div>
)

PageLayout.propTypes = {
    children: PropTypes.node,
}

PageLayout.defaultProps = {
    children: PropTypes.node,
}

export default PageLayout
