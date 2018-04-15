import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import LeftMenu from './../components/leftMenu';
import Header from './../components/header';

export const PageLayout = ({ children }) => (
    <div className='text-center'>
        <div className='page-layout__menu'>
            <LeftMenu />
        </div>
        <div className='page-layout__viewport'>
            <div className='page-layout__header'>
                <Header />
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
